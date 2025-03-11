import React from 'react';
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <Layout
            title="About - Beyond Events"
            description="Meet your wedding coordinator and learn about our passion for creating unforgettable wedding experiences."
        >
        <div className="container">
            <div className="row row-cols-1 g-3 mx-auto my-auto">
                <div className="col">
                    <div className="card card-dark border-dark">
                        <div className="card-body text-center">
                            <div className="h1 text-white">
                                Meet Your Coordinator
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 g-3 mx-auto my-auto">
                <div className="col">
                    <div className="card border-dark">
                        <div className="card-body text-center">
                            <div className="h2 text-dark">
                                <strong>Ryan Bergstrom</strong>
                            </div>
                            <hr />
                            <div className="h4 text-dark">
                                Proudly Serving the Greater Midwest Region. 
                                International Planning and Coordination Available.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="row row-cols-1 row-cols-lg-2 g-3 mx-auto mt-1 mb-3">
                <div className="col">
                    <div className="card decor-card border-dark h-100">
                        <div className="card-body text-center">
                            <div className="h5">
                                Background
                            </div>
                            <div className="position-relative my-2" style={{ width: '100%', height: '300px' }}>
                                <Image 
                                    src="/img/headshot.png" 
                                    alt="Ryan Bergstrom" 
                                    className="headshot" 
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <hr />
                            <div className="card-text">
                                As we embark on the journey of planning your wedding, we will also be building a wonderful friendship! So, allow us to share a bit about our owner and head coordinator, Ryan Bergstrom. Ryan&apos;s passion for event planning ignited during his college years when he founded an Art Gallery and served as a chair member of the Providence Art Association. He found joy in hosting gala events to spotlight artists from New England. 
                            <br />
                            <br />
                                Ryan&apos;s career took an exciting turn when he became a Chief Steward on super yachts, even being offered a role on the hit show, Below Deck! For about 4-5 years, he meticulously planned every detail of his guests&apos; once-in-a-lifetime experiences. After orchestrating events in 15 different countries, Ryan felt the call to return to the beautiful Midwest.
                                Since settling on land in 2022, Ryan has planned over 100 weddings and private events, contributing to his overall tally of more than 250 events worldwide.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card decor-card border-dark h-100">
                        <div className="card-body text-center">
                            <div className="h5 mb-2">
                                Going above...
                            </div>
                            <div className="gallery py-3 mx-2">
                                <div className="position-relative" style={{ height: '200px' }}>
                                    <Image 
                                    src="/img/weddings/white-wedding.jpg" 
                                    alt="Wedding Decor" 
                                    fill
                                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                                    />
                                </div>
                                <div className="position-relative" style={{ height: '200px' }}>
                                    <Image 
                                    src="/img/weddings/ryan-flwrs.jpg" 
                                    alt="Wedding Decor" 
                                    fill
                                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                                    />
                                </div>
                                <div className="position-relative" style={{ height: '200px' }}>
                                    <Image 
                                    src="/img/weddings/florals-green.png" 
                                    alt="Wedding Decor" 
                                    fill
                                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                                    />
                                </div>
                                <div className="position-relative" style={{ height: '200px' }}>
                                    <Image 
                                    src="/img/weddings/cake.png" 
                                    alt="Wedding Decor" 
                                    fill
                                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                                    />
                                </div>
                            </div>
                            <div className="h5 mt-2">
                                ... and beyond
                            </div>
                            <hr />
                            <div className="card-text text-justify">
                                As your wedding coordinator or planner, our team promise to manage every detail and navigate any obstacles with utmost precision throughout both the planning stages and on your special day. We promise to provide an enjoyable, stress-free planning journey. We promise to turn the anticipation leading up to your wedding into a fun and exciting experience.
                                <br />
                                <br />
                                Our commitment extends beyond just working with you at every stage of the journey. We will also collaborate closely with your vendors, both the day before and on your wedding day. Our aim is to foster a harmonious environment where we all work together to ensure every moment is flawless. By establishing a rapport with each vendor prior to your event, we ensure a comfortable and familiar atmosphere upon arrival, for both you and the entire team.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    );
}