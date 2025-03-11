import React from 'react';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function DocPackagePage() {
  return (
    <Layout
      title="Day of Coordination Package - Beyond Events"
      description="Our day-of coordination services ensure your wedding day runs perfectly."
    >
      <div className="container py-3">
        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col-12 align-self-center my-2">
            <div className="card card-dark border-dark">
              <div className="card-body text-center">
                <div className="position-relative" style={{ height: '150px', width: '100%', maxWidth: '500px', margin: 'auto' }}>
                  <Image 
                    src="/favicon/logo-coordination.png" 
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
              <div className="d-flex flex-column flex-md-row text-center">
                <div className="col-md-6 d-flex flex-column justify-content-between">
                  {/* Section 1: Left Column */}
                  <div className="p-3 border-end d-flex flex-column h-100">
                    <div className="pkg-title">
                      STRUCTURED MEETINGS:
                    </div>
                    <p>
                      It&apos;s easy to feel flustered, and it&apos;s okay to feel that way also! With Beyond Events, we will guide you efficiently in a prioritized demeanor to insure that you are ticking the boxes in the right order.
                    </p>
                    <hr />
                    <div className="pkg-title">
                      TIMELINE BUILDING:
                    </div>
                    <p>
                      With our heavy experience in the industry, we will create a timeline that prevents issues before they occur, and once we have sent it to your vendors, we will work them to adjust accordingly.
                    </p>
                    <hr />
                    <div className="pkg-title">
                      REHEARSAL &amp; DAY-OF:
                    </div>
                    <p>
                      With our first-to-arrive- &amp; last-to-leave policy, that creates an unlimited window of hours of our service on these days.
                    </p>
                    <hr />
                    <div className="position-relative mt-3" style={{ height: '300px' }}>
                      <Image 
                        className="card-img-bottom rounded pt-3" 
                        src="/img/weddings/couple-kiss.png" 
                        alt="Wedding Review 2024" 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="card-footer">
                    &amp; SO MUCH MORE...
                  </div>
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-between">
                  {/* Section 2: Right Column */}
                  <div className="p-3 d-flex flex-column h-100">
                    <div className="pkg-title">
                      DECOR &amp; VENDOR ASSISTANCE:
                    </div>
                    <p>
                      We will assist you in making your vision a reality with every aspect. We have plenty of tips and tricks for you to utilize, and have worked with a massive amount of vendors in the area and will direct you to find the perfect match. With our vast experince in creating unique tablescapes and aesthetic, no vision is impossible, in any venue, and we will show you how.
                    </p>
                    <hr />
                    
                    <div className="pkg-title">
                      SET-UP &amp; TEAR-DOWN
                    </div>
                    <p>
                      We take care of it all, and prioritize this in a efficient way to insure that you get that private walk-through before ceremony, and are not having to have family linger too late waiting for breakdown. 
                    </p>
                    <hr />
                    <div className="position-relative mt-3" style={{ height: '300px' }}>
                      <Image 
                        className="card-img-bottom rounded pt-3" 
                        src="/img/reviews/edensmore.png" 
                        alt="Wedding Review 2024" 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="card-footer">
                    PRICE: $2,750
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