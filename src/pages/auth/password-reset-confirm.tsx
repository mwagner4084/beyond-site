import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { useRouter } from 'next/router';
import axios from 'axios';
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
  const [isValidToken, setIsValidToken] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);

  // Verify token when component loads and router is ready
  useEffect(() => {
    const verifyToken = async () => {
      if (router.isReady && token && uid) {
        try {
          setIsVerifying(true);
          const response = await axios.post('/api/auth/verify-reset-token', {
            token: token,
            uid: uid
          });
          
          if (response.data.success) {
            setIsValidToken(true);
          } else {
            setIsValidToken(false);
            setError('Invalid or expired password reset link.');
          }
        } catch (err) {
          setIsValidToken(false);
          if (axios.isAxiosError(err) && err.response) {
            setError(err.response.data.message || 'Invalid or expired password reset link.');
          } else {
            setError('Invalid or expired password reset link.');
          }
        } finally {
          setIsVerifying(false);
        }
      } else if (router.isReady) {
        setIsValidToken(false);
        setError('Invalid password reset link. Missing parameters.');
        setIsVerifying(false);
      }
    };
    
    verifyToken();
  }, [router.isReady, token, uid, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate passwords
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setIsSubmitting(false);
      return;
    }

    if (formData.newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Make sure token and uid are strings
      const resetToken = Array.isArray(token) ? token[0] : token;
      const userId = Array.isArray(uid) ? uid[0] : uid;
      
      if (!resetToken || !userId) {
        throw new Error('Reset token or user ID is missing');
      }
      
      const response = await axios.post('/api/auth/password-reset-confirm', {
        token: resetToken,
        uid: userId,
        newPassword: formData.newPassword
      });
      
      if (response.data.success) {
        router.push('/auth/password-reset-complete');
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'Failed to reset password');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to reset password. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isVerifying) {
    return (
      <Layout
        title="Verifying Reset Link - Beyond Events"
        description="Verifying your password reset link."
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <div className="my-5">
                <h1 className="display-6 mb-4">Verifying Reset Link</h1>
                <p>Please wait while we verify your password reset link...</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!isValidToken) {
    return (
      <Layout
        title="Invalid Reset Link - Beyond Events"
        description="Invalid password reset link."
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <div className="my-5">
                <h1 className="display-6 mb-4">Invalid Reset Link</h1>
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
                <Link href="/auth/password-reset" className="btn btn-primary mt-3">
                  Try Again
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Reset Password - Beyond Events"
      description="Set a new password for your account."
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form onSubmit={handleSubmit} className="my-4">
              <h1 className="display-6 my-3 text-center">
                Set New Password
              </h1>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  required
                />
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
                  required
                />
              </div>
              
              <button 
                className="w-100 btn btn-lg btn-primary" 
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