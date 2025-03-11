import React from 'react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function PricingPage() {
  return (
    <Layout
      title="Investment - Beyond Events"
      description="Explore our wedding coordination and planning packages designed to make your special day perfect."
    >
      <div className="container py-3">
        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col-lg-12 my-3">
            <div className="card card-dark border-dark">
              <div className="card-body text-center">
                <div className="h1 text-white">
                  INVESTMENT
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col-lg-12 my-3">
            <div className="card border-dark">
              <h2 className="text-dark mt-3 text-center">
                DAY-OF COORDINATION PACKAGES
                <br />
                - 2025 Booking Now Open -
              </h2>
              <div className="text-center">
                <Link href="/doc-package" className="link inline-block">Coordination Package</Link>
                {' | '}
                <Link href="/planning-package" className="link inline-block">Planning Package</Link>
              </div>
              <hr />

              {/* FLEXBOX CONTAINER */}
              <div className="d-flex flex-column flex-md-row text-center align-items-normal">
                
                {/* Section 1: DOC */}
                <div className="flex-fill p-3 border-end d-flex flex-column">
                  <h3 className="text-beige">
                    DOC
                  </h3>
                  
                  <ul className="list-unstyled ul-pkg rte flex-grow-1">
                    <li>unlimited virtual meetings</li> 
                    <li>decor meetings</li> 
                    <li>vendor coordination</li> 
                    <li>timeline creation</li> 
                    <li>2 additional coordinators</li> 
                    <li>live planning documents</li> 
                    <li>rehearsal coordination</li>
                    <li>set up &amp; tear down</li> 
                    <li>unlimited day-of hours</li> 
                    <li>dessert pick-up</li>
                    <li>table maintenance</li>
                  </ul>
                  <div className="card-footer">
                    PRICE: $2,750
                  </div>
                  <div className="position-relative" style={{ height: '200px', marginTop: '0.5rem' }}>
                    <Image 
                      className="card-img-bottom my-2" 
                      src="/img/weddings/couple-kiss.png" 
                      alt="Wedding Coordination Packages and Pricing" 
                      fill
                      style={{ objectFit: 'cover', borderRadius: '5px' }}
                    />
                  </div>
                </div>

                {/* Section 3: VIP DOC */}
                <div className="flex-fill p-3 d-flex flex-column">
                  <h3 className="text-beige">
                    VIP DOC*
                  </h3>
                  <ul className="list-unstyled ul-pkg rte flex-grow-1">
                    <li>*includes doc package</li> 
                    <li>source decor &amp; vendors</li> 
                    <li>budget management</li> 
                    <li>vendor coordination</li> 
                    <li>in-person vendor meetings</li> 
                    <li>complimentary rentals</li> 
                    <li>vision boards</li>  
                  </ul>
                  <div className="card-footer">
                    PRICE: $5,500
                  </div>
                  <div className="position-relative" style={{ height: '200px', marginTop: '0.5rem' }}>
                    <Image 
                      className="card-img-bottom my-2" 
                      src="/img/reviews/edensmore.png" 
                      alt="Wedding Coordination Packages and Pricing" 
                      fill
                      style={{ objectFit: 'cover', borderRadius: '5px' }}
                    />
                  </div>
                </div>

              </div> {/* END FLEX CONTAINER */}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <Link href="/contact" className="button-56">
            <span>Request Consultation</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}