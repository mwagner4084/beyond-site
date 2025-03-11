// src/components/Layout/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className="site-header">
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className="navbar-logo">
          <Image 
            src="/favicon/logo-nav.png" 
            alt="Beyond Events Logo" 
            className="logo" 
            width={60}
            height={60}
          />
        </Link>
        
        <nav className="justify-content-center text-dark">
          <ul className="nav-ul d-md-flex">
            <li><Link href="/about">Our Story</Link></li>
            <li><Link href="/pricing">Packages</Link></li>
            <li><Link href="/rentals">Rentals</Link></li>
            <li><Link href="/gallery">Portfolio</Link></li>
            <li><Link href="/contact">Inquire</Link></li>
          </ul>
        </nav>
        
        <div id="menu-icon" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>
        
        <div id="fullscreen-nav" className={`overlay ${menuOpen ? 'active' : ''}`}>
          <button className="close-btn" onClick={toggleMenu}>&times;</button>
          <div className="overlay-content">
            <Link href="/" className="navbar-logo-overlay">
              <Image 
                src="/img/logo-white.png" 
                alt="Beyond Events Logo" 
                width={200}
                height={50}
              />
            </Link>
            <hr className="text-white" />
            <Link href="/about">Our Story</Link>
            <Link href="/pricing">Packages</Link>
            <Link href="/rentals">Rentals</Link>
            <Link href="/gallery">Portfolio</Link>
            <Link href="/contact">Inquire</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;