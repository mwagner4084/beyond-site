import type { NextApiRequest, NextApiResponse } from 'next';
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
    const { token, uid } = req.body;

    // Validate input
    if (!token || !uid) {
      return res.status(400).json({ message: 'Token and user ID are required' });
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

    return res.status(200).json({ success: true, message: 'Valid token' });
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}