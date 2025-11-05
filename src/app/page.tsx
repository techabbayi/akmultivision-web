'use client';
import { Hero } from '@/components/landing/hero';
import { Services } from '@/components/landing/services';
import { Pricing } from '@/components/landing/pricing';
import { Portfolio } from '@/components/landing/portfolio';
import { Contact } from '@/components/landing/contact';
import { WebDemos } from '@/components/landing/web-demos';
import { MotionDiv } from '@/components/shared/motion-div';

export default function Home() {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col">
      <Hero />
      <MotionDiv
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col"
      >
        <Services />
        {/* <Portfolio /> */}
        <Pricing />
        <WebDemos />
        <Contact />
      </MotionDiv>
    </div>
  );
}
