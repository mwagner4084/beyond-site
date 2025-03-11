import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma'; // Assuming you're using Prisma for DB

type TokenPayload = {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
};

type ResponseData = {
  success?: boolean;
  user?: {
    id: string;
    name: string;
    email: string;
  };
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
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
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error('JWT_SECRET environment variable is not defined');
      }
      
      decodedToken = jwt.verify(token, secret) as TokenPayload;
    } catch {
      // Removed the unused error parameter
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    // Get the user from database
    const user = await prisma.user.findUnique({
      where: { id: decodedToken.userId },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return user data (excluding sensitive information)
    return res.status(200).json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('Authentication check error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}