// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>,
// ) {
//   res.status(200).json({ name: "John Doe" });
// }


import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactData = {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Extract form data from request body
    const { name, email, phone, weddingDate, location, message }: ContactData = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format email body
    const formattedWeddingDate = weddingDate ? new Date(weddingDate).toLocaleDateString() : 'Not specified';

    // Email to business owner
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Wedding Inquiry from ${name}`,
      html: `
        <h2>New Wedding Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Wedding Date:</strong> ${formattedWeddingDate}</p>
        <p><strong>Location:</strong> ${location || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank You for Contacting Beyond Events',
      html: `
        <h2>Thank You for Contacting Beyond Events</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us. We've received your inquiry and will get back to you within 24-48 hours.</p>
        <p>Here's a summary of the information you provided:</p>
        <ul>
          <li><strong>Wedding Date:</strong> ${formattedWeddingDate}</li>
          <li><strong>Location:</strong> ${location || 'Not provided'}</li>
        </ul>
        <p>We look forward to helping you create your perfect wedding day!</p>
        <p>Best regards,</p>
        <p>The Beyond Events Team</p>
      `,
    });

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending contact form:', error);
    return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
}