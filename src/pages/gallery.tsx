import React from 'react';
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

// Define gallery item interface
interface GalleryItem {
  image: string;
  alt: string;
  style: string;
}

// Gallery data
const galleryItems: GalleryItem[] = [
  {
    image: '/img/weddings/wedding-disco.png',
    alt: 'Disco balls wedding decoration',
    style: 'Modern'
  },
  {
    image: '/img/weddings/wedding-donuts.png',
    alt: 'Wedding donut display',
    style: 'Playful'
  },
  {
    image: '/img/weddings/wedding-juice.png',
    alt: 'Wedding garden drinks',
    style: 'Garden'
  },
  {
    image: '/img/weddings/wedding-barn.png',
    alt: 'Barn wedding decor',
    style: 'Rustic'
  },
  {
    image: '/img/weddings/wedding-bride.png',
    alt: 'Glamorous bride',
    style: 'Glam'
  },
  {
    image: '/img/weddings/wedding-cake.png',
    alt: 'Minimalist wedding cake',
    style: 'Minimalist'
  },
  {
    image: '/img/weddings/wedding-centerpiece.png',
    alt: 'Romantic centerpiece',
    style: 'Romantic'
  },
  {
    image: '/img/weddings/wedding-chairs.png',
    alt: 'Eclectic wedding chairs',
    style: 'Eclectic'
  },
  {
    image: '/img/weddings/wedding-florals.png',
    alt: 'Boho floral arrangements',
    style: 'Boho'
  }
];

export default function GalleryPage() {
  return (
    <Layout
      title="Gallery - Beyond Events"
      description="Browse our portfolio of beautiful weddings and events we've had the pleasure of creating."
    >
      <div className="container">
        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col">
            <div className="card card-dark border-dark">
              <div className="card-body text-center">
                <div className="h1 text-white">
                  Gallery Images
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Gallery */}
        <div className="d-none d-md-block">
          <div className="scroll-gallery h-100 my-3">
            <ul className="scroll-ul">
              {galleryItems.map((item, index) => (
                <li className="scroll-li" key={index}> 
                  <div className="position-relative" style={{ height: '200px', width: '100%' }}>
                    <Image 
                      src={item.image} 
                      alt={item.alt} 
                      className="scroll-img" 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  {item.style}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Mobile Gallery */}
        <div className="d-md-none">
          <div className="row row-cols-1 row-cols-sm-2 g-3 my-3">
            {galleryItems.map((item, index) => (
              <div className="col" key={index}>
                <div className="card border-dark h-100">
                  <div className="position-relative" style={{ height: '200px' }}>
                    <Image 
                      src={item.image} 
                      alt={item.alt} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.style}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="row my-4">
          <div className="col-12">
            <div className="card border-dark">
              <div className="card-body text-center">
                <h2>Interested in seeing more?</h2>
                <p className="mb-4">
                  We&apos;d love to share our complete portfolio with you during a personal consultation.
                </p>
                <Link href="/contact" className="button-56">
                  <span>Schedule a Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}