'use client';
import { Mail, Phone, Pin } from 'lucide-react';
import { ContactForm } from './contact-form';
import { MotionDiv } from '../shared/motion-div';

export function Contact() {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <MotionDiv
      id="contact"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 md:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold uppercase tracking-wide sm:text-5xl font-headline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-[600px] text-gray-400 md:text-xl/relaxed">
              Have a project in mind? We'd love to hear from you. Fill out the form or contact us directly.
            </p>
            <div className="mt-8 space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-blue-400" />
                <a href="mailto:contact@akmultivision.digital" className="hover:text-blue-400 transition-colors">
                  srssltd@protonmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-blue-400" />
                <a href="tel:+919666072642" className="hover:text-blue-400 transition-colors">
                  +91 96660 72642
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Pin className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300">Murkumbattu, Chittoor</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            <ContactForm />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
