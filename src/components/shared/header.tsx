'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#demos', label: 'Demos' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

// Custom AK Logo Component - COMMENTED OUT (Using image instead)
/*
const AKLogo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5B51D8" />
        <stop offset="50%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    
    <path
      d="M 150 500 L 250 100 L 350 500 L 300 500 L 280 420 L 220 420 L 200 500 Z M 240 350 L 260 350 L 250 270 Z"
      fill="url(#logoGradient)"
    />
    
    <g>
      <path
        d="M 330 100 L 330 500 L 380 500 L 380 100 Z"
        fill="url(#logoGradient)"
      />
      <path
        d="M 380 100 L 550 100 L 380 300 L 430 340 L 600 100 L 600 100 Z"
        fill="url(#logoGradient)"
      />
      <path
        d="M 380 340 L 550 500 L 600 500 L 400 300 Z"
        fill="url(#logoGradient)"
      />
    </g>
  </svg>
);
*/

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300
        ${isScrolled ? 'border-b border-border bg-background/80 backdrop-blur-lg' : 'bg-transparent'}`}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center group">
          <Image
            src="/aklogo2.png"
            alt="AK MultiVision Logo"
            width={70}
            height={70}
            className="object-contain -mr-2"
          />
          <span className="font-bold font-headline text-foreground text-lg">
            AKMULTIVISION
          </span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button asChild className="hidden sm:inline-flex font-semibold rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </motion.div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-background/90 backdrop-blur-lg border-r">
              <Link href="/" className="mr-6 flex items-center" onClick={closeSheet}>
                <Image
                  src="/aklogo.png"
                  alt="AK MultiVision Logo"
                  width={44}
                  height={44}
                  className="object-contain -mr-1"
                />
                <span className="font-bold font-headline text-foreground">AKMULTIVISION</span>
              </Link>
              <div className="flex flex-col space-y-4 pt-6">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeSheet}
                    className="text-lg text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
