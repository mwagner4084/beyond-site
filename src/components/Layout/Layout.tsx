import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Beyond Events Wedding Planning and Rentals', 
  description = 'Your dream wedding planning and decoration rental service. Proudly serving the greater Midwest region and beyond.',
  keywords = 'wedding, planning, rentals, events, decoration, Midwest'
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        <title>{title}</title>
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Beyond Events &amp; Rentals" />
        <meta property="og:description" content="Ready to plan your dream wedding?" />
        <meta property="og:image" content="/favicon/logo-nav.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        
        {/* Bootstrap Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"
        />
      </Head>
      
      <div className="font-family-base background">
        <Header />
        
        <main className="site-main" role="main">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;