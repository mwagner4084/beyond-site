import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

export default function PasswordChangePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/auth/me');
        if (response.data.success) {
          setUser(response.data.user);
        } else {
          router.push('/auth/login');
        }
      } catch (err) {
        console.error('Auth check error:', err);
        router.push('/auth/login');
      }
    };

    checkAuth();
  }, [router]);

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
      setError('New passwords do not match.');
      setIsSubmitting(false);
      return;
    }

    if (formData.newPassword.length < 8) {
      setError('New password must be at least 8 characters long.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post('/api/auth/password-change', {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword
      });

      if (response.data.success) {
        router.push('/auth/password-change-done');
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'Failed to change password');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to change password. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return null; // Don't render anything while checking authentication
  }

  return (
    <Layout
      title="Change Password - Beyond Events"
      description="Change your account password."
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form onSubmit={handleSubmit} className="my-4">
              <h1 className="display-6 my-3 text-center">
                Change Password
              </h1>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <div className="mb-3">
                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              
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
                {isSubmitting ? 'Changing Password...' : 'Change Password'}
              </button>
              
              <div className="mt-3 text-center">
                <Link href="/client" className="link">
                  Back to Dashboard
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}