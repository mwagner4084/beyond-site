import type { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma'; // Assuming you're using Prisma for DB

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
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Check if JWT_SECRET is available
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not defined');
    }

    // Create a JWT token with proper typing
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET environment variable is not defined');
    }

    const token = sign(
        {
            userId: user.id,
            email: user.email,
        },
        secret,
        { expiresIn: process.env.JWT_EXPIRY as string || '7d' } as jwt.SignOptions
    )

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
    return res.status(201).json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}