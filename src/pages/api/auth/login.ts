import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma'; 

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
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // If user not found or password doesn't match
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password with hashed password in database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create a JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRY as string || '7d' } as jwt.SignOptions
    );

    // Set JWT as an HTTP-only cookie
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 604800, // 7 days in seconds
        path: '/',
      })
    );

    // Return successful response with user info (omitting sensitive data)
    return res.status(200).json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}