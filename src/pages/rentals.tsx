import React from 'react';
import Layout from '@/components/Layout/Layout';
import RentalItem from '@/components/RentalItem';
import { rentalData } from '@/lib/rentalData';
import Link from 'next/link';

export default function RentalsPage() {
  return (
    <Layout
      title="Decor Rentals - Beyond Events"
      description="Browse our selection of decor rentals for your special day, including candles, chargers, fabrics, mirrors, signage, and florals."
    >
      <div className="container py-3">
        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col">
            <div className="card card-dark border-dark h-100">
              <div className="card-body text-center">
                <h1 className="text-white">
                  Decor Rentals
                </h1>
                <hr />
                <h5 className="text-white">
                  <i>Inventory constantly changing... please contact us if an item isn&apos;t listed!</i>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Render all rental categories */}
        {Object.entries(rentalData).map(([categoryKey, category]) => (
          <div className="card decor-card border-dark h-100 my-3" key={categoryKey}>
            <div className="card-body">
              <h2 className={categoryKey === 'chargers' ? 'h1' : 'h2'}>
                <strong>{category.title}</strong>
              </h2>
              <div className="h4">
                {category.description}
              </div>
              <hr />
              
              {/* Determine grid layout based on category */}
              <div className={`row row-cols-1 row-cols-md-${categoryKey === 'fabrics' ? '2' : '3'} g-2 mx-auto my-auto`}>
                {category.items.slice(0, 3).map((item, index) => (
                  <RentalItem key={`${categoryKey}-${index}`} item={item} />
                ))}
              </div>
              
              {/* Additional items row if needed */}
              {category.items.length > 3 && (
                <div className={`row row-cols-1 row-cols-md-${categoryKey === 'fabrics' ? '2' : '3'} g-2 mx-auto my-auto mt-2`}>
                  {category.items.slice(3).map((item, index) => (
                    <RentalItem key={`${categoryKey}-extra-${index}`} item={item} />
                  ))}
                </div>
              )}
            </div>
            
            {/* Optional footer */}
            {category.footer && (
              <div className="card-footer h5">
                <strong>{category.footer}</strong>
              </div>
            )}
          </div>
        ))}
        
        <div className="text-center my-4">
          <Link href="/contact" className="button-56">
            <span>Request Rental Information</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}