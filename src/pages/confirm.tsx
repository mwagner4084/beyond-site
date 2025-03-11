import React from 'react';
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function ConfirmPage() {
  return (
    <Layout
      title="Thank You - Beyond Events"
      description="Thank you for contacting Beyond Events. We'll be in touch soon to discuss your wedding vision."
    >
      <div>
        <div className="container mx-md-auto py-3">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-8 mb-4 mb-md-0 text-center">
              <div className="card border-dark slide-in-left">
                <div className="position-relative" style={{ height: '200px' }}>
                  <Image 
                    src="/img/thank-you.png" 
                    className="img-fluid" 
                    alt="Thank you" 
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
                <div className="card-body justify-content-center">
                  <h1>
                    Thank you for contacting Beyond Events!
                  </h1>
                  <p>
                    We&apos;ll be in touch soon to discuss your vision.
                  </p>
                  <Link href="/" className="button-56 my-3">
                    <span>Return to Home</span>
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