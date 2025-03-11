import React from 'react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function PlanningPackagePage() {
  return (
    <Layout
      title="Planning Package - Beyond Events"
      description="Comprehensive wedding planning services to create your perfect wedding day."
    >
      <div className="container py-3">
        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col-12 align-self-center my-2">
            <div className="card card-dark border-dark">
              <div className="card-body text-center">
                <div className="position-relative" style={{ height: '150px', width: '100%', maxWidth: '500px', margin: 'auto' }}>
                  <Image 
                    src="/favicon/logo-planning.png" 
                    className="home-img" 
                    alt="Beyond Events Wedding Planning and Rentals" 
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col-12 my-3">
            <div className="card border-dark">
              {/* FLEXBOX CONTAINER */}
              <div className="d-flex flex-column flex-md-row">
                <div className="col-md-6">
                  {/* Section 1: Left Column */}
                  <div className="p-3 border-end d-flex flex-column h-100">
                    <div className="pkg-title">
                      SOURCING [VENDORS | DECOR] 
                    </div>
                    <p>
                      Have a vision, but not the time to create it - allow us! We will source multiple vendors for you to interview with, and various styles of decor for you to decide on.
                    </p>
                    <hr />
                    <div className="pkg-title">
                      AESTHETIC BUILDING:
                    </div>
                    <p>
                      With our experince in creating visions for a vast assortment of clientele, we will discuss exactly what you want in your budget, and build it into a reality. This includes rehearsal &amp; day-of. 
                    </p>
                    <hr />
                    <div className="pkg-title">
                      BUDGET MANAGEMENT:
                    </div>
                    <p>
                      With extreme attention to detail we will manage your spendings to ensure there are no unexpected costs, along the conscious effort of trying to save you as much money as possible. 
                    </p>
                    <hr />
                    <div className="position-relative mt-3" style={{ height: '300px' }}>
                      <Image 
                        className="doc-img rounded pt-3" 
                        src="/img/weddings/wedding-bride.png" 
                        alt="Wedding Review 2024" 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-between">
                  {/* Section 2: Right Column */}
                  <div className="p-3 d-flex flex-column h-100">
                    <div className="pkg-title">
                      $500 OFF RENTALS:
                    </div>
                    <p>
                      Enjoy a $500 credit toward our rental catalog! 
                    </p>
                    <hr />
                    <div className="pkg-title">
                      2 ADDITIONAL ASSISTANTS
                    </div>
                    <p>
                      With our planning package, you will also receive 2 extra assistants complimentary.
                    </p>
                    <hr />
                    <div className="pkg-title">
                      DECOR PICK UP &amp; DROP OFF
                    </div>
                    <p>
                      One of the biggest struggles we find our couple&apos;s going through is getting all of the decor to and from the venue. We will arrive before rehearsal and load our trailer, and drop-off the day after your wedding at the designated location. (*Restrictions may apply*)
                    </p>
                    <hr />
                    <div className="h4">
                      <i>Includes Coordination Package</i>
                    </div>
                    <div className="position-relative mt-3" style={{ height: '300px' }}>
                      <Image 
                        className="doc-img rounded pt-3" 
                        src="/img/reviews/clongo.png" 
                        alt="Wedding Review 2024" 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>

                  <div className="card-footer h3 text-center">
                    PRICE: $5,000
                  </div>
                </div>
              </div>
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