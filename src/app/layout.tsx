import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { WhatsappWidget } from '@/components/shared/whatsapp-widget';

export const metadata: Metadata = {
  title: 'AKMultiVision Digital',
  description: 'A modern digital agency for web, graphics, and social media.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&family=Urbanist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Prefetch common routes for faster navigation */}
        <link rel="prefetch" href="/privacy" />
        <link rel="prefetch" href="/terms" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://placehold.co" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsappWidget />
        <Toaster />
      </body>
    </html>
  );
}
