import React from 'react';
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

// Define testimonial interface
interface Testimonial {
  image: string;
  name: string;
  quote: string;
  date: string;
}

// Testimonial data
const testimonials: Testimonial[] = [
  {
    image: '/img/reviews/clongo.png',
    name: 'Christina L.',
    quote: 'Ryan was absolutely amazing to work with! He kept us organized, on track, and calm throughout the entire process. His attention to detail and ability to understand our vision made our day perfect.',
    date: 'September 2023'
  },
  {
    image: '/img/reviews/cmeredith.png',
    name: 'Chelsea M.',
    quote: 'I cannot recommend Beyond Events enough! Ryan and his team went above and beyond to make our wedding day stress-free and beautiful. The day-of coordination was flawless.',
    date: 'July 2023'
  },
  {
    image: '/img/reviews/speterson.png',
    name: 'Sarah P.',
    quote: 'We hired Ryan for day-of coordination and it was the best decision we made. He took care of every detail, communicated with all our vendors, and made sure everything ran smoothly.',
    date: 'August 2023'
  },
  {
    image: '/img/reviews/edensmore.png',
    name: 'Emily D.',
    quote: 'Beyond Events truly lived up to their name! Ryan\'s creative vision and organizational skills are unmatched. Our guests are still raving about how beautiful and seamless our wedding was.',
    date: 'October 2023'
  },
  {
    image: '/img/reviews/hmoore.png',
    name: 'Hannah M.',
    quote: 'As someone who was overwhelmed by wedding planning, I can\'t express how grateful I am that we found Ryan. His calming presence and expertise made the entire process enjoyable.',
    date: 'June 2023'
  },
  {
    image: '/img/reviews/esipka.png',
    name: 'Elizabeth S.',
    quote: 'Working with Beyond Events was a dream! Ryan understood our style perfectly and created a wedding day that was even better than we imagined. His vendor recommendations were spot on.',
    date: 'May 2023'
  }
];

export default function TestimonialsPage() {
  return (
    <Layout
      title="Testimonials - Beyond Events"
      description="Read what our clients have to say about their experience working with Beyond Events for their special day."
    >
      <div className="container py-3">
        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col">
            <div className="card card-dark border-dark">
              <div className="card-body text-center">
                <div className="h1 text-white">
                  Client Testimonials
                </div>
                <hr />
                <div className="h4 text-white">
                  Hear what our amazing couples have to say about their experience with Beyond Events
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4 my-3">
          {testimonials.map((testimonial, index) => (
            <div className="col" key={index}>
              <div className="card h-100 border-dark">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="position-relative" style={{ height: '200px' }}>
                        <Image 
                          src={testimonial.image} 
                          alt={`${testimonial.name} Testimonial`} 
                          className="rounded-circle"
                          fill
                          style={{ objectFit: 'cover', borderRadius: '50%' }}
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <blockquote>
                        {testimonial.quote}
                      </blockquote>
                      <div className="text-end mt-3">
                        <strong>{testimonial.name}</strong>
                        <br />
                        <small>{testimonial.date}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 mb-5">
          <div className="card border-dark p-4">
            <h2>Ready to start planning your dream wedding?</h2>
            <p className="mb-4">
              Contact us today to schedule a consultation and see how we can help make your wedding vision a reality.
            </p>
            <div className="d-inline-block">
              <Link href="/contact" className="button-56">
                <span>Schedule Your Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}