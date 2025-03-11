import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit: (formData: ContactFormData) => void;
  isSubmitting: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    location: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="weddingDate" className="form-label">Wedding Date</label>
        <input
          type="date"
          className="form-control"
          id="weddingDate"
          name="weddingDate"
          value={formData.weddingDate}
          onChange={handleChange}
        />
        <div className="form-text">If you don&apos;t have a specific date yet, that&apos;s okay!</div>
      </div>

      <div className="mb-3">
        <label htmlFor="location" className="form-label">Wedding Location</label>
        <input
          type="text"
          className="form-control"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="City, State or Venue Name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your vision or any questions you have"
          required
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="button-56 w-100" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;