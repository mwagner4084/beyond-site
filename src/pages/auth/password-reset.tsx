import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function PasswordResetPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post('/api/auth/password-reset', { email });
      
      if (response.data.success) {
        router.push('/auth/password-reset-done');
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'Failed to process password reset request');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to process password reset request. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Reset Password - Beyond Events"
      description="Request a password reset for your account."
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form onSubmit={handleSubmit} className="my-4">
              <h1 className="display-6 my-3 text-center">
                Reset Your Password
              </h1>
              
              <p className="text-center mb-4">
                Enter your email address below and we&apos;ll send you instructions to reset your password.
              </p>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <button 
                className="w-100 btn btn-lg btn-primary" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
            
            <div className="text-center mt-3 mb-5">
              <p>
                Remember your password?{' '}
                <Link href="/auth/login" className="link">
                  Back to login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}