import type { NextApiRequest, NextApiResponse } from 'next';
import { randomBytes } from 'crypto';
import nodemailer from 'nodemailer';
import prisma from '@/lib/prisma'; // Assuming you're using Prisma for DB

type ResponseData = {
  success?: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate input
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Even if the user doesn't exist, we return success to prevent email enumeration attacks
    if (!user) {
      return res.status(200).json({ 
        success: true, 
        message: 'If an account with that email exists, a password reset link has been sent' 
      });
    }

    // Generate a reset token
    const resetToken = randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    // Store the reset token in the database
    await prisma.passwordReset.upsert({
      where: { userId: user.id },
      update: {
        token: resetToken,
        expires: resetTokenExpiry,
      },
      create: {
        userId: user.id,
        token: resetToken,
        expires: resetTokenExpiry,
      },
    });

    // Create reset URL
    const resetUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/password-reset-confirm?token=${resetToken}&uid=${user.id}`;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send password reset email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: 'Password Reset Request',
      html: `
        <h2>Beyond Events - Password Reset</h2>
        <p>You requested a password reset for your Beyond Events account.</p>
        <p>Please click the link below to reset your password:</p>
        <p><a href="${resetUrl}" style="padding: 10px 20px; background-color: #8FA093; color: white; text-decoration: none; border-radius: 5px;">Reset Your Password</a></p>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this reset, you can safely ignore this email.</p>
        <p>Best regards,<br>Beyond Events Team</p>
      `,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Password reset email sent' 
    });
  } catch (error) {
    console.error('Password reset error:', error);
    return res.status(500).json({ message: 'Failed to send password reset email' });
  }
}