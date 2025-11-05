'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Megaphone, PenTool, Search } from 'lucide-react';
import { MotionDiv } from '@/components/shared/motion-div';

const services = [
  {
    icon: <Code className="h-10 w-10 text-blue-400" />,
    title: 'Web Design & Development',
    description: 'Creating responsive, high-performance websites with a modern UI/UX design that drives results and engages users.',
  },
  {
    icon: <PenTool className="h-10 w-10 text-blue-400" />,
    title: 'Graphic Design & Branding',
    description: 'From logos to complete brand identities, our creative designs communicate your message and make you stand out.',
  },
  {
    icon: <Megaphone className="h-10 w-10 text-blue-400" />,
    title: 'Social Media & Ad Management',
    description: 'We manage your social media channels and run targeted ad campaigns to boost your brand awareness and engagement.',
  },
  {
    icon: <Search className="h-10 w-10 text-blue-400" />,
    title: 'SEO & Content Strategy',
    description: 'Improve your search engine rankings and attract organic traffic with our data-driven SEO and content strategies.',
  }
];

export function Services() {
  const cardVariants = {
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
    <section id="services" className="py-20 md:py-32">
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
            What We Do
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
            Our agency provides a full suite of digital services to help your business succeed online. We focus on quality, innovation, and results.
          </p>
        </MotionDiv>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 mt-12">
          {services.map((service, index) => (
            <MotionDiv
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <Card className="group relative h-full overflow-hidden rounded-2xl border-white/10 bg-white/5 p-1 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_theme(colors.blue.500/0.4)]">
                <div className="absolute -z-10 h-full w-full rounded-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="h-full rounded-xl bg-background p-6">
                  <CardHeader className="gap-4 p-0">
                    <div className="p-3 bg-blue-500/10 rounded-xl w-fit transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {service.icon}
                    </div>
                    <CardTitle className="font-headline text-xl text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-gray-400">{service.description}</p>
                  </CardContent>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
