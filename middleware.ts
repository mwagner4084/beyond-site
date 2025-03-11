import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

// Define types for better type checking
type JwtPayload = {
  userId: string;
  iat: number;
  exp: number;
};

// Middleware function
export async function middleware(request: NextRequest) {
  // Get auth token from cookies
  const token = request.cookies.get('auth')?.value;
  
  // Check if the path is part of the client dashboard (protected area)
  const isClientPath = request.nextUrl.pathname.startsWith('/client');
  
  if (isClientPath) {
    // No token found - redirect to login
    if (!token) {
      const loginUrl = new URL('/auth/login', request.url);
      // Add the original URL as a parameter to redirect back after login
      loginUrl.searchParams.set('returnUrl', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    try {
      // Verify the token
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error('JWT_SECRET not configured');
      }
      
      verify(token, secret) as JwtPayload;
      
      // Token is valid, continue to requested page
      return NextResponse.next();
    } catch (error) {
      // Token is invalid or expired
      console.error('Auth token validation error:', error);
      
      // Clear the invalid token
      const response = NextResponse.redirect(new URL('/auth/login', request.url));
      response.cookies.delete('auth');
      
      return response;
    }
  }
  
  // For non-protected routes, continue normally
  return NextResponse.next();
}

// Configure paths that should be checked by this middleware
export const config = {
  matcher: [
    // All client portal pages
    '/client/:path*',
  ],
};