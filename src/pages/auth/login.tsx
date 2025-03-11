import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await login(formData.email, formData.password);
      router.push('/client'); // Redirect to client dashboard on success
    } catch (err: unknown) {
      // Fixed error handling for unknown type
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Failed to log in. Please check your credentials.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Sign In - Beyond Events"
      description="Sign in to the client portal to access your wedding planning details."
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form onSubmit={handleSubmit} className="my-4">
              <h1 className="display-6 my-3 text-center">
                Client Portal Sign In
              </h1>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  required
                />
              </div>
              
              <br />
              <button 
                className="w-100 btn btn-lg btn-primary" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing In...' : 'Login'}
              </button>
            </form>
            
            <div className="text-center mt-3 mb-5">
              <p>
                <Link href="/auth/password-reset" className="link">
                  Forgotten your password?
                </Link>
              </p>
              <p>
                <Link href="/auth/signup" className="link">
                  Register a new account?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}