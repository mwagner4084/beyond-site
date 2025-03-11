import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
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
    const { token, uid, newPassword } = req.body;

    // Validate input
    if (!token || !uid || !newPassword) {
      return res.status(400).json({ message: 'Token, user ID, and new password are required' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ message: 'New password must be at least 8 characters long' });
    }

    // Find the password reset token
    const passwordReset = await prisma.passwordReset.findFirst({
      where: {
        userId: uid,
        token: token,
        expires: {
          gt: new Date()
        }
      },
    });

    if (!passwordReset) {
      return res.status(400).json({ message: 'Invalid or expired password reset token' });
    }

    // Find the user
    const user = await prisma.user.findUnique({
      where: { id: uid },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // Update the user's password
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    // Delete the password reset token
    await prisma.passwordReset.delete({
      where: { id: passwordReset.id },
    });

    return res.status(200).json({ success: true, message: 'Password has been reset successfully' });
  } catch (error) {
    console.error('Password reset confirmation error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}