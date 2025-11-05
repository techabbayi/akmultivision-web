
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Triangle, Circle, Square, ArrowDown } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const headline = "Let’s Take Your Business to the Internet.".split(' ');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80" />
        <motion.div
          animate={{
            x: ['-20%', '20%', '-20%'],
            y: ['-20%', '30%', '-20%'],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            x: ['20%', '-20%', '20%'],
            y: ['20%', '-30%', '20%'],
          }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear', delay: 15 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-40"
        />
         <motion.div
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['10%', '-10%', '10%'],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear', delay: 25 }}
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full filter blur-3xl opacity-30"
        />
      </div>

      {/* Floating Shapes */}
       <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 90, 180] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] left-[10%] opacity-20"
      >
        <Triangle className="w-12 h-12 text-foreground/50 rotate-12" strokeWidth={1}/>
      </motion.div>
       <motion.div
        animate={{ y: [12, -12, 12], x: [-8, 8, -8], rotate: [0, -90, -180] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[20%] right-[15%] opacity-20"
      >
        <Square className="w-10 h-10 text-foreground/50 -rotate-12" strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [-18, 18, -18], x: [5, -5, 5] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-[50%] right-[10%] opacity-20"
      >
        <Circle className="w-8 h-8 text-foreground/50" strokeWidth={1} />
      </motion.div>


      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"
      >
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-blue-500"
        >
          {headline.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-4 max-w-md text-lg text-foreground/70 sm:text-xl md:mt-6 md:max-w-3xl"
        >
          Websites, social media branding, ads management, and everything your local business needs to grow online — all in one place. We help local shops, startups, and small businesses build stunning websites, strong branding, and a digital presence that drives results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 12px hsl(var(--primary) / 0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl"
          >
            <Button size="lg" asChild className="px-6 py-3 font-semibold text-primary-foreground rounded-xl bg-gradient-to-r from-primary to-accent">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="rounded-xl">
            <Button size="lg" variant="outline" className="bg-transparent backdrop-blur-sm" asChild>
              <Link href="#demos">Our Demo Works</Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0]}}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
            <Link href="#services" aria-label="Scroll to explore">
                <ArrowDown className="w-6 h-6 text-foreground/60"/>
            </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
