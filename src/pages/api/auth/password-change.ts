import type { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma'; 

type TokenPayload = {
  userId: string;
  email: string;
};

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
    // Get auth token from cookies
    const token = req.cookies.auth;

    if (!token) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    // Verify JWT
    let decodedToken: TokenPayload;
    try {
      // Fix the JWT verification similar to our other fixes
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error('JWT_SECRET environment variable is not defined');
      }
      
      decodedToken = verify(token, secret) as TokenPayload;
    } catch {
      // Removed the error variable entirely since it's not used
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    const { currentPassword, newPassword } = req.body;

    // Validate input
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Current password and new password are required' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ message: 'New password must be at least 8 characters long' });
    }

    // Get the user
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.userId },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (!isCurrentPasswordValid) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 12);

    // Update the password
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedNewPassword },
    });

    return res.status(200).json({ success: true, message: 'Password changed successfully' });
  } catch (error) {
    console.error('Password change error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}