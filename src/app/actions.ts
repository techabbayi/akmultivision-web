
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  plan: z.string().optional(),
});

type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  values: z.infer<typeof formSchema>
): Promise<ContactFormState> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }
  
  const { name, email, phone, message, plan } = validatedFields.data;

  // --- Email Sending Logic using Nodemailer ---
  // To send an email, you'll need to use an email service provider (like Gmail, Outlook, etc.)
  // and provide the credentials in environment variables.
  //
  // 1. Create a `.env.local` file in your project's root directory.
  // 2. Add the following variables to the `.env.local` file:
  //
  //    EMAIL_SERVER_HOST="smtp.example.com"
  //    EMAIL_SERVER_PORT=587
  //    EMAIL_SERVER_USER="your-email@example.com"
  //    EMAIL_SERVER_PASSWORD="your-email-password"
  //    EMAIL_TO="your-receiving-email@example.com"
  //
  //    Replace the values with your actual email server details. For Gmail, you might need to
  //    generate an "App Password".
  
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: process.env.EMAIL_SERVER_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_SERVER_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Plan:</strong> ${plan || 'Not specified'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    console.log('Email sent successfully!');

    return {
      success: true,
      message: 'Form submitted successfully!',
    };

  } catch (error) {
     console.error('Email sending error:', error);
     return { success: false, message: 'Failed to send message.' };
  }
}
