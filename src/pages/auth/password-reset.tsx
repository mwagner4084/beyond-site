import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
      const response = await fetch('/api/auth/password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to send reset email');
      }

      // Redirect to confirmation page
      router.push('/auth/password-reset-done');
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Password Reset - Beyond Events"
      description="Reset your password for the Beyond Events client portal."
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h2 className="display-6 text-center my-3">
              Password Reset
            </h2>
            
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="my-4">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
                <div className="form-text">
                  Enter the email address you used to register. We'll send you instructions to reset your password.
                </div>
              </div>
              
              <button 
                className="btn btn-primary w-100" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Reset Password'}
              </button>
            </form>
            
            <div className="text-center mt-3 mb-5">
              <p>
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