
'use client';
import { Instagram, Linkedin, Mountain, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="w-full bg-background/50 text-gray-300 border-t border-white/10">
      <div className="container py-12">
        <div className="relative mb-8 h-[1px] w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-gradient-x" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6 text-blue-400" />
              <span className="font-bold font-headline text-lg text-white">AKMULTIVISION</span>
            </Link>
            <p className="text-sm text-gray-400">
              Your Vision, Our Creation. Crafting Digital Experiences That Inspire and Engage.
            </p>
          </div>

           <div className="flex flex-col items-start md:items-end gap-4">
              <p className="font-semibold font-headline text-white">Follow Us</p>
              <div className="flex items-center gap-2">
                <motion.div whileHover={{ scale: 1.2, y: -2 }}>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
                    </Link>
                  </Button>
                </motion.div>
                 <motion.div whileHover={{ scale: 1.2, y: -2 }}>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label="Instagram">
                      <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, y: -2 }}>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="#" aria-label="Twitter">
                      <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Revogen. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
