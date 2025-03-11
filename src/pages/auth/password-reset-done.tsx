import React from 'react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';

export default function PasswordResetDonePage() {
  return (
    <Layout
      title="Password Reset Email Sent - Beyond Events"
      description="Password reset instructions have been sent to your email."
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card border-dark my-5">
              <div className="card-body text-center">
                <h2 className="display-6 text-center my-3">
                  Password Reset Email Sent
                </h2>
                <p className="text-center mb-4">
                  An email has been sent to your email address with instructions on how to reset your password. 
                  Please check your inbox and follow the link in the email.
                </p>
                <p className="text-center">
                  If you don't receive an email within a few minutes, please check your spam folder or 
                  <Link href="/auth/password-reset" className="mx-1 link">
                    try again
                  </Link>.
                </p>
                <div className="mt-4">
                  <Link href="/auth/login" className="btn btn-primary">
                    Back to Login
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