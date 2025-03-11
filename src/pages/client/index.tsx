import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

export default function ClientDashboard() {
  const router = useRouter();
  const { user, loading } = useAuth();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  // Show loading state
  if (loading) {
    return (
      <Layout title="Client Dashboard - Loading">
        <div className="container py-5 text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading your dashboard...</p>
        </div>
      </Layout>
    );
  }

  // Will redirect in useEffect if no user
  if (!user) {
    return null;
  }

  return (
    <Layout
      title="Client Dashboard - Beyond Events"
      description="Access your wedding planning details and documents in your personal client portal."
    >
      <div className="container py-4">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="card border-dark">
              <div className="card-body">
                <h1 className="display-6 mb-0">Welcome, {user.name}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Wedding Details Card */}
          <div className="col">
            <div className="card h-100 border-dark">
              <div className="card-body">
                <h5 className="card-title">Your Wedding Details</h5>
                <p className="card-text">
                  View and manage your wedding information, including venue, date, and schedule.
                </p>
              </div>
              <div className="card-footer bg-transparent">
                <Link href="/client/details" className="btn btn-outline-primary w-100">
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Documents Card */}
          <div className="col">
            <div className="card h-100 border-dark">
              <div className="card-body">
                <h5 className="card-title">Documents</h5>
                <p className="card-text">
                  Access important documents including contracts, invoices, and planning worksheets.
                </p>
              </div>
              <div className="card-footer bg-transparent">
                <Link href="/client/documents" className="btn btn-outline-primary w-100">
                  View Documents
                </Link>
              </div>
            </div>
          </div>

          {/* Timeline Card */}
          <div className="col">
            <div className="card h-100 border-dark">
              <div className="card-body">
                <h5 className="card-title">Wedding Timeline</h5>
                <p className="card-text">
                  Review your wedding day timeline and important planning milestones.
                </p>
              </div>
              <div className="card-footer bg-transparent">
                <Link href="/client/timeline" className="btn btn-outline-primary w-100">
                  View Timeline
                </Link>
              </div>
            </div>
          </div>

          {/* Vendors Card */}
          <div className="col">
            <div className="card h-100 border-dark">
              <div className="card-body">
                <h5 className="card-title">Vendor Information</h5>
                <p className="card-text">
                  View details for all your wedding vendors and their contact information.
                </p>
              </div>
              <div className="card-footer bg-transparent">
                <Link href="/client/vendors" className="btn btn-outline-primary w-100">
                  View Vendors
                </Link>
              </div>
            </div>
          </div>

          {/* Rentals Card */}
          <div className="col">
            <div className="card h-100 border-dark">
              <div className="card-body">
                <h5 className="card-title">Your Rentals</h5>
                <p className="card-text">
                  Manage your decor rental selections and quantities.
                </p>
              </div>
              <div className="card-footer bg-transparent">
                <Link href="/client/rentals" className="btn btn-outline-primary w-100">
                  View Rentals
                </Link>
              </div>
            </div>
          </div>

          {/* Messages Card */}
          <div className="col">
            <div className="card h-100 border-dark">
              <div className="card-body">
                <h5 className="card-title">Contact Your Planner</h5>
                <p className="card-text">
                  Send messages directly to your wedding planner through our secure portal.
                </p>
              </div>
              <div className="card-footer bg-transparent">
                <Link href="/client/messages" className="btn btn-outline-primary w-100">
                  View Messages
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 text-center">
            <p>
              Need assistance? Contact us directly at{' '}
              <a href="mailto:info@beyondevents.com">info@beyondevents.com</a> or call{' '}
              <a href="tel:+12693483690">(269) 348-3690</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}