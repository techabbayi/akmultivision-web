'use client';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowUpRight, Code, Megaphone, Paintbrush } from 'lucide-react';
import { MotionDiv } from '@/components/shared/motion-div';
import { Button } from '../ui/button';

const portfolioItems = [
  {
    slug: 'web-works',
    category: 'Website Design',
    title: 'Web Works',
    icon: <Code className="w-12 h-12 text-blue-400" />
  },
  {
    slug: 'luxury-brand-design',
    category: 'Branding',
    title: 'Luxury Brand Identity',
    icon: <Paintbrush className="w-12 h-12 text-blue-400" />
  },
  {
    slug: 'digital-marketing-campaign',
    category: 'Ad Campaign',
    title: 'Social Media Ads',
    icon: <Megaphone className="w-12 h-12 text-blue-400" />
  },
];

export function Portfolio() {
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
    <section id="portfolio" className="py-20 md:py-32">
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
            Our Digital Creations
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
            Check out some of our recent projects. We take pride in delivering high-quality work that exceeds expectations.
          </p>
        </MotionDiv>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {portfolioItems.map((item, index) => (
            <MotionDiv
              key={item.slug}
              variants={variants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="block group"
            >
              <Link href={`/portfolio/${item.slug}`}>
                <Card className="group relative h-full overflow-hidden rounded-2xl border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_theme(colors.blue.500/0.4)] flex flex-col items-center text-center">
                  <div className="p-4 bg-white/10 rounded-full mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.category}</p>
                  <div className="absolute top-3 right-3 transform-gpu opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-[-45deg]">
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                </Card>
              </Link>
            </MotionDiv>
          ))}
        </div>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg md:text-xl text-gray-400 mb-4">
            Like what you see? Let’s make your brand next.
          </p>
          <Button size="lg" asChild className="px-8 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
