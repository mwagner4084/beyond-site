import React from 'react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';

export default function PasswordResetDonePage() {
  return (
    <Layout
      title="Reset Email Sent - Beyond Events"
      description="Password reset instructions have been sent to your email."
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            <div className="my-5">
              <h1 className="display-6 mb-4">Check Your Email</h1>
              
              <div className="alert alert-success mb-4" role="alert">
                Password reset instructions have been sent to your email.
              </div>
              
              <p>
                We&apos;ve sent you an email with instructions to reset your password.
                Please check your inbox and follow the link in the email.
              </p>
              
              <p className="mt-3">
                If you don&apos;t receive an email within a few minutes, please check your 
                spam folder or try the reset process again.
              </p>
              
              <div className="mt-4">
                <Link href="/auth/login" className="btn btn-primary">
                  Return to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}