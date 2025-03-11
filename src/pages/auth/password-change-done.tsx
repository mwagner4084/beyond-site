import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function PasswordChangeDonePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

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

  if (!user) {
    return null; // Don't render anything while checking authentication
  }

  return (
    <Layout
      title="Password Changed - Beyond Events"
      description="Your password has been successfully changed."
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            <div className="my-5">
              <h1 className="display-6 mb-4">Password Changed Successfully</h1>
              
              <div className="alert alert-success mb-4" role="alert">
                Your password has been updated successfully.
              </div>
              
              <p>
                Your password has been changed. You can now use your new password
                to sign in to your account.
              </p>
              
              <div className="mt-4">
                <Link href="/client" className="btn btn-primary">
                  Return to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}