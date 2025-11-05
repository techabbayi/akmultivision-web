
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-20 w-20 block">
        <path d="M16.75 13.96c.25.13.43.2.5.33.08.13.12.28.12.48 0 .2-.04.38-.12.53s-.18.28-.3.4a1.86 1.86 0 0 1-.55.33c-.23.1-.48.16-.75.16-.33 0-.66-.05-1-.15-.4-.1-.8-.28-1.15-.5-.4-.23-.8-.5-1.15-.8-.4-.3-.7-.68-1-.95-.3-.3-.5-.6-.7-.9-.2-.3-.3-.6-.4-.9 0-.2.04-.4.1-.6.1-.2.2-.3.4-.5.1-.1.2-.14.3-.2.1-.04.2-.08.3-.12.1-.03.2-.06.2-.1.1 0 .2-.02.3-.02.1 0 .2 0 .3.03.1 0 .2.04.3.08.1.04.2.1.2.15.1.08.1.2.1.3l-.1.5c-.1.2-.1.4-.2.5l-.2.4c-.1.1-.1.2 0 .3.1.1.2.2.3.3.2.2.4.4.7.6.3.2.6.3.9.4.1.01.2 0 .3-.02.1-.02.2-.05.3-.1l.4-.5c.1-.1.3-.2.5-.2h.4c.2 0 .4 0 .5.1.2.1.3.2.4.4l.1.5c.1.2.1.4.1.6.1.2 0 .4-.1.6zM12 2a10 10 0 0 0-8.9 14.3l-1.1 4.7 4.8-1.1A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.3-1.2l-.3-.2-3.2.8.8-3.1-.2-.3A8 8 0 1 1 12 20z"></path>
    </svg>
);

const services = [
    'Web Design & Development',
    'Graphic Design',
    'Social Media & Ads',
    'SEO & Content Strategy',
    'Other'
];

export function WhatsappWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState('');
    const [requirements, setRequirements] = useState('');
    const [name, setName] = useState('');

    const businessNumber = '9666072642'; // Replace with your business WhatsApp number

    const handleInitialClick = () => {
        const message = encodeURIComponent('Hi');
        window.open(`https://wa.me/${businessNumber}?text=${message}`, '_blank');
    };

    const handleServiceSelect = (service: string) => {
        setSelectedService(service);
        setStep(3);
    };

    const sendEnquiry = () => {
        const message = `Hello, my name is ${name}.\n\nI'm interested in the following service: *${selectedService}*.\n\nMy requirements are:\n${requirements}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${businessNumber}?text=${encodedMessage}`, '_blank');
        // Reset state
        setIsOpen(false);
        setStep(1);
        setSelectedService('');
        setRequirements('');
        setName('');
    };


    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <button
                    type="button"
                    aria-label="Open WhatsApp"
                    className="fixed bottom-6 right-6 h-14 w-14 p-0 rounded-full shadow-lg flex items-center justify-center bg-[#25D366] text-white z-[100] hover:scale-105 transition-transform duration-200"
                >
                    {/* Render only white handset over full green button so circle is fully green */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="44" height="44" className="block" aria-hidden="true">
                        <path fill="#ffffff" d="M16.8 14.9c-.3-.15-1.8-.9-2.1-1.02-.3-.12-.5-.18-.7.15-.2.33-.8 1.02-1 1.22-.2.2-.4.22-.7.07-.3-.15-1.2-.44-2.3-1.41-.85-.74-1.42-1.65-1.59-1.95-.17-.3-.02-.46.13-.62.13-.13.3-.34.45-.5.15-.15.2-.25.3-.4.1-.15.05-.28-.03-.4-.08-.12-.7-1.66-.96-2.3-.25-.6-.5-.52-.7-.53l-.6-.01c-.2 0-.52.07-.8.32-.28.25-1.06 1.03-1.06 2.5 0 1.47 1.09 2.9 1.24 3.1.15.2 2.14 3.37 5.18 4.73 3.04 1.36 3.04 0.92 3.58 0.86.54-.07 1.8-.73 2.06-1.44.26-.7.26-1.3.18-1.44-.08-.14-.28-.2-.58-.35z" />
                    </svg>
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 mr-4 mb-2" side="top" align="end">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Chat with us!</h4>
                        <p className="text-sm text-muted-foreground">
                            How can we help you today?
                        </p>
                    </div>

                    {step === 1 && (
                        <div className="grid gap-2">
                            <Button onClick={handleInitialClick}>Start a chat</Button>
                            <Button variant="outline" onClick={() => setStep(2)}>Service Enquiry</Button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="grid gap-2">
                            <Label htmlFor="service-select">Choose a service</Label>
                            <Select onValueChange={handleServiceSelect}>
                                <SelectTrigger id="service-select">
                                    <SelectValue placeholder="Select a service..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {services.map(service => (
                                        <SelectItem key={service} value={service}>{service}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="grid gap-2">
                            <Label>Service: {selectedService}</Label>
                            <div className="grid gap-1.5">
                                <Label htmlFor="name">Your Name</Label>
                                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
                            </div>
                            <div className="grid gap-1.5">
                                <Label htmlFor="requirements">Your Requirements</Label>
                                <Textarea id="requirements" value={requirements} onChange={(e) => setRequirements(e.target.value)} placeholder="e.g., I need a 5-page website for my business..." />
                            </div>
                            <Button onClick={sendEnquiry}>Send Enquiry</Button>
                            <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
                        </div>
                    )}

                </div>
            </PopoverContent>
        </Popover>
    );
}
