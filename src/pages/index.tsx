// src/pages/index.tsx
import React from 'react';
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col text-center">
            <div className="card card-dark my-3 border-dark text-dark">
              <Image 
                src="/favicon/logo-home.png" 
                className="home-img mx-auto my-auto" 
                alt="Beyond Events Wedding Planning and Rentals" 
                width={500}
                height={150}
                priority
              />
            </div>
            <div className="card border-dark my-3 slide-in-right">
              <div className="card-body text-center">
                <div className="h1 text-dark">
                  - 2025 Booking Now Open -
                </div>
                <hr />
                <div className="card-text">
                  Your wedding is a once-in-a-lifetime event, and we are here to ensure it is as magical as you have always dreamed. With over 250 events planned worldwide, including over 100 weddings since 2022, our team brings a wealth of experience and a keen eye for detail to your special day.
                  <br />
                  <br />
                  We offer a variety of packages to suit your needs, from full-service planning to day-of coordination. 
                  We believe that every couple deserves a wedding that reflects their unique love story. We will work with you to create a personalized experience that you and your guests will remember for years to come.
                  <br />
                  <br />
                  Proudly serving the greater Midwest region. International planning and coordination available.
                </div>
                <hr />
                <div className="inline-block">
                  <Link href="/about" className="link">Our Story</Link>
                  |
                  <Link href="/pricing" className="inline-block link">Packages</Link>
                  |
                  <Link href="/rentals" className="inline-block link">Rentals</Link>
                  |
                  <Link href="/gallery" className="inline-block link">Portfolio</Link> 
                </div>
                <Link className="button-56 my-3" role="button" href="/contact">
                  <span>
                    SCHEDULE YOUR CONSULTATION
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 