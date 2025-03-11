import React from 'react';
import Image from 'next/image';
import { RentalItem as RentalItemType } from '@/lib/rentalData';

interface RentalItemProps {
  item: RentalItemType;
}

const RentalItem: React.FC<RentalItemProps> = ({ item }) => {
  return (
    <div className="col">
      <div className="position-relative" style={{ height: '220px', width: '100%' }}>
        <Image 
          className="img-fluid rounded" 
          src={item.image} 
          alt={item.alt || "Wedding Rental Item"} 
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="rental-text my-2 text-center">
        <strong>
          {item.title}
          {item.description && (
            <>
              <br />
              {item.description}
            </>
          )}
          {item.sizes && (
            <>
              <br />
              SIZES: {item.sizes}
            </>
          )}
          {item.color && (
            <>
              <br />
              COLOR: {item.color}
            </>
          )}
          {item.colors && (
            <>
              <br />
              COLORS: {item.colors}
            </>
          )}
          <br />
          {item.price}
          {item.quantity && (
            <>
              <br />
              {item.quantity}
            </>
          )}
        </strong>
      </div>
    </div>
  );
};

export default RentalItem;