import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function PasswordResetConfirmPage() {
  const router = useRouter();
  const { token, uid } = router.query;
  
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [tokenValid, setTokenValid] = useState<boolean | null>(null);

  // Validate token on component mount
  useEffect(() => {
    const validateToken = async () => {
      if (!token || !uid) return;

      try {
        const response = await fetch('/api/auth/verify-reset-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, uid }),
        });

        setTokenValid(response.ok);
      } catch (err) {
        setTokenValid(false);
      }
    };

    if (token && uid) {
      validateToken();
    }
  }, [token, uid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate passwords match
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/password-reset-confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid,
          token,
          newPassword: formData.newPassword,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Password reset failed');
      }

      // Redirect to success page
      router.push('/auth/password-reset-complete');
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading state
  if (tokenValid === null && (token && uid)) {
    return (
      <Layout
        title="Reset Password - Beyond Events"
        description="Reset your password for the Beyond Events client portal."
      >
        <div className="container text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Validating your reset link...</p>
        </div>
      </Layout>
    );
  }

  // Invalid token
  if (tokenValid === false) {
    return (
      <Layout
        title="Invalid Reset Link - Beyond Events"
        description="The password reset link is invalid or has expired."
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card border-dark my-5">
                <div className="card-body text-center">
                  <h2 className="display-6 text-center my-3">
                    Invalid Reset Link
                  </h2>
                  <p className="text-center">
                    The password reset link is invalid or has expired. Please request a new password reset link.
                  </p>
                  <div className="mt-4">
                    <Link href="/auth/password-reset" className="btn btn-primary">
                      Request New Reset Link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Missing token or uid
  if (!token || !uid) {
    return (
      <Layout
        title="Invalid Reset Link - Beyond Events"
        description="The password reset link is incomplete."
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card border-dark my-5">
                <div className="card-body text-center">
                  <h2 className="display-6 text-center my-3">
                    Invalid Reset Link
                  </h2>
                  <p className="text-center">
                    The password reset link is incomplete. Please make sure you've clicked the entire link from your email.
                  </p>
                  <div className="mt-4">
                    <Link href="/auth/password-reset" className="btn btn-primary">
                      Request New Reset Link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Valid token - show reset form
  return (
    <Layout
      title="Reset Password - Beyond Events"
      description="Create a new password for your account."
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <h2 className="display-6 text-center my-3">
              Reset Your Password
            </h2>
            
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="my-4">
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter your new password"
                  minLength={8}
                  required
                />
                <div className="form-text">
                  Password must be at least 8 characters long
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your new password"
                  minLength={8}
                  required
                />
              </div>
              
              <button 
                className="btn btn-primary w-100" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Resetting Password...' : 'Reset Password'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}