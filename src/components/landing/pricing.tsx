'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ContactForm } from './contact-form';
import { motion } from 'framer-motion';
import { MotionDiv } from '../shared/motion-div';

const plans = [
  {
    name: 'Starter',
    price: '₹699/-',
    priceDescription: 'Per Project',
    features: ['1-3 Page Website', 'Basic SEO', 'Mobile Responsive', 'Pages: Home, About, Contact'],
    cta: 'Choose Starter',
    disclaimer: 'Domain and hosting not included',
  },
  {
    name: 'Pro',
    price: '₹999/-',
    priceDescription: 'Per Project',
    features: ['5 Custom Pages', 'SEO Optimized', 'Mobile Responsive', 'Priority Support'],
    cta: 'Choose Pro',
    recommended: true,
    disclaimer: 'Domain and hosting not included',
  },
  {
    name: 'Advance',
    price: '₹1,699/-',
    priceDescription: 'Per Project',
    features: ['8+ Pages', 'E-commerce', 'Branding (Free Logo)', '24/7 Support'],
    cta: 'Choose Advance',
    disclaimer: 'Domain and hosting not included',
  },
];

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleChoosePlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

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
    <section id="pricing" className="py-20 md:py-32">
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
            Our Pricing Plans
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
            Choose the perfect plan for your business. We offer flexible options to fit your needs and budget.
          </p>
        </MotionDiv>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-1 md:gap-8 lg:grid-cols-3 mt-12">
          {plans.map((plan, index) => (
            <MotionDiv
              key={plan.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative"
            >
              <Card
                className={`flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300
                  ${plan.recommended
                    ? 'bg-white/5 border-2 border-blue-500 shadow-[0_0_20px_theme(colors.blue.500/0.5)]'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'}`
                }
              >
                {plan.recommended && (
                  <Badge variant="default" className="absolute -top-3 right-4 shadow-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="z-10 p-6">
                  <CardTitle className="font-headline text-2xl text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">{plan.priceDescription}</CardDescription>
                  <div className="text-4xl font-bold text-white">{plan.price}</div>
                </CardHeader>
                <CardContent className="flex-1 z-10 p-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-blue-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.disclaimer && (
                    <p className="mt-6 text-xs text-gray-500 italic border-t border-white/10 pt-4">
                      * {plan.disclaimer}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="z-10 p-6 mt-auto">
                  <motion.div className="w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full font-semibold rounded-xl ${plan.recommended ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : ''}`}
                      variant={plan.recommended ? 'default' : 'outline'}
                      onClick={() => handleChoosePlan(plan.name)}
                    >
                      {plan.cta}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* Custom Plan Card - Full Width */}
        <MotionDiv
          custom={3}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -5, scale: 1.01 }}
          className="mx-auto max-w-5xl mt-8"
        >
          <Card className="bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-300">
            <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-6 p-8 items-center">
              <div className="text-center md:text-left">
                <CardTitle className="font-headline text-2xl text-white mb-2">Custom</CardTitle>
                <CardDescription className="text-gray-400 mb-3">Per Project</CardDescription>
                <div className="text-3xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
                  Based on Requirements
                </div>
              </div>

              <div className="px-4">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Custom Page Count</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">E-commerce Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Full Branding Package</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Marketing Campaign Setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">24/7 Priority Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Advanced Integrations</span>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-500 italic">
                  * Domain and hosting not included
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl px-8"
                    onClick={() => handleChoosePlan('Custom')}
                  >
                    Get Quote
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </MotionDiv>

        <div className="mt-16 text-center">
          <p className="text-2xl font-headline text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
            Your business deserves a digital home website @ just ₹699/- only
          </p>
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md w-full bg-background/80 backdrop-blur-md border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription className="text-gray-400">
              Please fill out the form below and we'll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <ContactForm selectedPlan={selectedPlan ?? undefined} onFormSubmit={() => setIsModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
}
