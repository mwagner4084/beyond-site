import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

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
    // Clear the auth cookie by setting its expiry to a past date
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        expires: new Date(0), // Set to epoch time (expired)
        path: '/',
      })
    );

    return res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}