import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { useRouter } from 'next/router';
import ContactForm from '@/components/Forms/ContactForm';

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  // Form submission handler
  const handleFormSubmit = async (formData: any) => {
    setIsSubmitting(true);
    setFormError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form. Please try again.');
      }

      // Redirect to confirmation page on success
      router.push('/confirm');
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Contact - Beyond Events"
      description="Contact our team to start planning your dream wedding. Let us help bring your vision to life."
    >
      <div className="container py-3">
        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col">
            <div className="card card-dark border-dark">
              <div className="card-body text-center">
                <div className="h1 text-white">
                  Contact Our Team
                </div>
                <hr />
                <div className="h4 text-white">
                  Please complete the provided form below, and we will get back to you as soon as possible.
                  Be sure to include your wedding date, location, and any other details you would like to share.
                  We look forward to working with you to make your dreams a reality!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 g-3 mx-auto my-auto">
          <div className="col">
            <div className="card border-dark">
              <div className="card-body text-center">
                <div className="h2">
                  Let&apos;s get started
                </div>
              </div>
              <div className="card-body d-block">
                {formError && (
                  <div className="alert alert-danger mb-4" role="alert">
                    {formError}
                  </div>
                )}
                <ContactForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}