'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Code } from 'lucide-react';
import { MotionDiv } from '@/components/shared/motion-div';
import { Badge } from '../ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const demoProjects = [
  {
    id: 'demo-starter',
    plan: 'Starter',
    description: 'A clean, professional single-page website, perfect for showcasing your business.',
    url: '#',
    tech: ['Responsive Design', 'Fast Loading', 'SEO Friendly'],
    image: PlaceHolderImages.find(img => img.id === 'demo-starter-image'),
  },
  {
    id: 'demo-pro',
    plan: 'Pro',
    description: 'A multi-page website with a blog and CMS integration for dynamic content.',
    url: '#',
    recommended: true,
    tech: ['CMS', 'Responsive Design', 'SEO'],
    image: PlaceHolderImages.find(img => img.id === 'demo-pro-image'),
  },
  {
    id: 'demo-advance',
    plan: 'Advance',
    description: 'A full-featured e-commerce store with advanced functionalities and custom branding.',
    url: '#',
    tech: ['E-commerce', 'Payment Gateway', 'SEO'],
    image: PlaceHolderImages.find(img => img.id === 'demo-advance-image'),
  },
];

export function WebDemos() {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="demos" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold uppercase tracking-wide sm:text-5xl font-headline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
            Web Experiences We Built
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
            Explore web design examples based on our plans. See what we can build for you.
          </p>
        </MotionDiv>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {demoProjects.map((item, index) => {
            const isThirdCardOnTablet = index === 2;
            return (
              <MotionDiv
                key={item.id}
                variants={variants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`block group ${isThirdCardOnTablet ? 'sm:col-span-2 lg:col-span-1 flex justify-center' : ''}`}
              >
                <div className="w-full max-w-md sm:max-w-none">
                  <Link href={item.url} target="_blank" rel="noopener noreferrer">
                    <Card className={`rounded-2xl border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 h-full relative shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden ${item.recommended ? 'border-2 border-blue-500 shadow-[0_0_20px_theme(colors.blue.500/0.5)]' : 'hover:border-white/20'}`}>
                      {item.recommended && (
                        <Badge variant="default" className="absolute top-4 right-4 shadow-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white z-20">
                          Most Popular
                        </Badge>
                      )}
                      <CardContent className="p-0 flex flex-col h-full items-center text-center">
                        <div className="relative w-full aspect-video">
                          {item.image && (
                            <Image
                              src={item.image.imageUrl}
                              alt={item.description}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={item.image.imageHint}
                            />
                          )}
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                          <div>
                            <p className="text-lg font-semibold text-white">{item.plan} Plan Demo</p>
                            <p className="text-sm text-white/80 mt-1">
                              {item.description}
                            </p>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2 items-center justify-center">
                            <Code className="w-4 h-4 text-gray-400" />
                            {item.tech.map(t => (
                              <Badge key={t} variant="outline" className="text-xs text-gray-300 border-gray-600">{t}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
