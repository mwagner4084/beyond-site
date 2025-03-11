import React from 'react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';

export default function PasswordResetCompletePage() {
  return (
    <Layout
      title="Password Reset Complete - Beyond Events"
      description="Your password has been successfully reset."
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card border-dark my-5">
              <div className="card-body text-center">
                <h2 className="display-6 text-center my-3">
                  Password Reset Complete
                </h2>
                <p className="h3 text-center mb-4">
                  Your password has been successfully changed. You can now log in with your new password.
                </p>
                <div className="mt-4">
                  <Link href="/auth/login" className="button-56">
                    <span>Log In</span>
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