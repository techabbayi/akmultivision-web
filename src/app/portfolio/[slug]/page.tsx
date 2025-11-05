'use client';

import { useParams } from 'next/navigation';
import { ArrowLeft, ExternalLink, Code, Paintbrush, ShoppingCart, ImageIcon, Briefcase, Megaphone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const portfolioDetails = {
  'web-works': {
    title: 'Demo Works of AK',
    description: 'These are our previous works that showcase our expertise in creating stunning websites.',
    icon: <Code className="w-12 h-12 text-blue-400" />,
    content: (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'E-commerce Platform', url: 'https://example.com', thumbnail: 'https://picsum.photos/seed/ecom1/800/600', category: 'Online Store' },
            { name: 'Corporate Website', url: 'https://example.com', thumbnail: 'https://picsum.photos/seed/corp1/800/600', category: 'Business' },
            { name: 'Restaurant Website', url: 'https://example.com', thumbnail: 'https://picsum.photos/seed/resto1/800/600', category: 'Food & Beverage' },
            { name: 'Real Estate Portal', url: 'https://example.com', thumbnail: 'https://picsum.photos/seed/realestate1/800/600', category: 'Property' },
            { name: 'Healthcare Platform', url: 'https://example.com', thumbnail: 'https://picsum.photos/seed/health1/800/600', category: 'Medical' },
          ].map((demo, index) => (
            <Card key={index} className="group overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={demo.thumbnail}
                    alt={demo.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button variant="secondary" size="sm" asChild>
                      <a href={demo.url} target="_blank" rel="noopener noreferrer">
                        View Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-white mb-1">{demo.name}</h4>
                  <p className="text-sm text-gray-400">{demo.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-2">
            Still coming soon... demo works on various categories!
          </p>
          <p className="text-md text-gray-500">
            Have a great day! 🌟
          </p>
        </div>
      </>
    ),
  },
  'luxury-brand-design': {
    title: 'Logo Showcase Gallery',
    description: 'Explore our diverse collection of luxury brand logos. Each design tells a unique story of elegance and sophistication.',
    icon: <ImageIcon className="w-12 h-12 text-blue-400" />,
    content: (
      <>
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">Logo Showcase</h3>

        {/* Collage Style Layout */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
          {/* Large Horizontal - Spans 2 rows */}
          <div className="col-span-12 md:col-span-8 row-span-2 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-8 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-32 h-32 text-gray-400" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="currentColor" strokeWidth="3" />
              <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* Tall Vertical - Right side */}
          <div className="col-span-12 md:col-span-4 row-span-2 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-8 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-24 h-32 text-gray-400" fill="none" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="60" height="100" stroke="currentColor" strokeWidth="3" fill="none" />
              <circle cx="40" cy="60" r="20" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* Medium Square */}
          <div className="col-span-6 md:col-span-4 row-span-1 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,15 90,85 10,85" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          {/* Wide Horizontal */}
          <div className="col-span-6 md:col-span-8 row-span-1 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-40 h-16 text-gray-400" fill="none" viewBox="0 0 160 60" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="80" cy="30" rx="70" ry="20" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          {/* Tall Vertical - Left side */}
          <div className="col-span-6 md:col-span-3 row-span-2 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-20 h-32 text-gray-400" fill="none" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 10 L70 50 L40 90 L10 50 Z" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          {/* Medium Horizontal */}
          <div className="col-span-6 md:col-span-5 row-span-1 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-32 h-20 text-gray-400" fill="none" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="40" r="30" stroke="currentColor" strokeWidth="3" fill="none" />
              <circle cx="60" cy="40" r="15" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* Small Square */}
          <div className="col-span-6 md:col-span-4 row-span-1 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 50 L50 20 L80 50 L50 80 Z" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          {/* Extra Wide Horizontal */}
          <div className="col-span-12 md:col-span-7 row-span-1 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-48 h-16 text-gray-400" fill="none" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="180" height="40" rx="20" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          {/* Medium Square */}
          <div className="col-span-6 md:col-span-5 row-span-1 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          {/* Wide Landscape */}
          <div className="col-span-12 md:col-span-6 row-span-1 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-36 h-20 text-gray-400" fill="none" viewBox="0 0 140 80" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 40 L70 10 L120 40 L70 70 Z" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </div>

          {/* Small Square */}
          <div className="col-span-6 md:col-span-6 row-span-1 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-6 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none" />
              <path d="M50 25 L50 75 M25 50 L75 50" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </>
    ),
  },
  'digital-marketing-campaign': {
    title: 'Social Media Ads Showcase',
    description: 'Stunning ad creatives designed for maximum impact across all major platforms and devices. See how we create scroll-stopping content that converts.',
    icon: <Megaphone className="w-12 h-12 text-blue-400" />,
    content: (
      <>
        {/* Device Mockups Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">Multi-Device Mockups</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* iPhone Mockup - Instagram Stories */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="mx-auto w-[280px]">
                    {/* iPhone Frame */}
                    <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                      <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden">
                        <Image src="https://picsum.photos/seed/iphone-ig/1080/1920" alt="Instagram Stories" fill className="object-cover" />
                        <div className="absolute top-4 left-4 right-4 flex items-center gap-2 text-white">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                          <span className="text-sm font-semibold">Instagram Stories</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-center mt-4 text-sm text-gray-400">iPhone 15 Pro - Instagram</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Android Mockup - Facebook */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="mx-auto w-[280px]">
                    {/* Android Frame */}
                    <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border-4 border-gray-700">
                      <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden bg-white">
                        <Image src="https://picsum.photos/seed/android-fb/1080/1920" alt="Facebook Feed" fill className="object-cover" />
                        <div className="absolute top-3 left-3 right-3 bg-white p-2 rounded-lg shadow-md">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                            <span className="text-xs font-semibold text-gray-800">Facebook</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center mt-4 text-sm text-gray-400">Android - Facebook Feed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* iPad Mockup - Twitter/X */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="mx-auto w-[320px]">
                    {/* iPad Frame */}
                    <div className="relative bg-gray-800 rounded-[2rem] p-3 shadow-2xl border-4 border-gray-700">
                      <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-black">
                        <Image src="https://picsum.photos/seed/ipad-twitter/1024/768" alt="Twitter/X Ad" fill className="object-cover" />
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full">
                          <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">𝕏</div>
                          <span className="text-xs font-semibold text-white">Twitter/X</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-center mt-4 text-sm text-gray-400">iPad Pro - Twitter/X</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Desktop Mockup - LinkedIn */}
            <div className="relative md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="mx-auto">
                    {/* Desktop Frame */}
                    <div className="relative bg-gray-900 rounded-t-xl p-2 shadow-2xl border-4 border-gray-700">
                      <div className="relative aspect-[16/9] rounded-t-lg overflow-hidden bg-white">
                        <Image src="https://picsum.photos/seed/desktop-linkedin/1920/1080" alt="LinkedIn Campaign" fill className="object-cover" />
                        <div className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 p-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white text-sm font-bold">in</div>
                            <span className="text-sm font-semibold text-gray-800">LinkedIn Sponsored</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-800 h-2 rounded-b-xl border-4 border-t-0 border-gray-700"></div>
                    <p className="text-center mt-4 text-sm text-gray-400">Desktop - LinkedIn Campaign</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Laptop Mockup - Google Ads */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-3xl blur-xl"></div>
              <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="mx-auto w-[300px]">
                    {/* Laptop Frame */}
                    <div className="relative bg-gray-800 rounded-t-lg p-2 shadow-2xl border-4 border-gray-700">
                      <div className="relative aspect-[16/10] rounded-t-md overflow-hidden bg-white">
                        <Image src="https://picsum.photos/seed/laptop-google/1440/900" alt="Google Display Ad" fill className="object-cover" />
                        <div className="absolute top-2 left-2 right-2 bg-white rounded shadow-sm p-2 flex items-center gap-2">
                          <div className="text-xl">G</div>
                          <span className="text-xs text-gray-600">Google Display Ad</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-700 h-1 rounded-b"></div>
                    <div className="flex justify-center">
                      <div className="bg-gray-700 w-20 h-1 rounded-b-lg"></div>
                    </div>
                    <p className="text-center mt-4 text-sm text-gray-400">MacBook - Google Ads</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Platform-Specific Ads */}
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">Platform-Specific Creative</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { platform: 'Instagram Feed', specs: '1080x1080 • Square Post', image: 'https://picsum.photos/seed/ig-feed/1080/1080', color: 'from-purple-500 to-pink-500' },
              { platform: 'Facebook Carousel', specs: '1080x1080 • Multi-Image', image: 'https://picsum.photos/seed/fb-carousel/1080/1080', color: 'from-blue-600 to-blue-400' },
              { platform: 'Twitter/X Promoted', specs: '1200x675 • Landscape', image: 'https://picsum.photos/seed/twitter-ad/1200/675', color: 'from-black to-gray-700' },
              { platform: 'LinkedIn Sponsored', specs: '1200x627 • Professional', image: 'https://picsum.photos/seed/linkedin-ad/1200/627', color: 'from-blue-700 to-blue-500' },
              { platform: 'Google Display', specs: '970x250 • Banner', image: 'https://picsum.photos/seed/google-display/970/250', color: 'from-red-500 to-yellow-500' },
              { platform: 'Meta Stories', specs: '1080x1920 • Vertical', image: 'https://picsum.photos/seed/meta-story/1080/1920', color: 'from-indigo-500 to-purple-500' },
            ].map((ad, index) => (
              <Card key={index} className="group overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={ad.image}
                      alt={`${ad.platform} mockup`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r ${ad.color} text-white text-xs font-semibold`}>
                      {ad.platform.split(' ')[0]}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-white mb-1">{ad.platform}</h4>
                    <p className="text-xs text-gray-400">{ad.specs}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-2">
            More creative mockups coming soon across additional platforms!
          </p>
          <p className="text-md text-gray-500">
            Ready to elevate your brand? 🚀
          </p>
        </div>
      </>
    ),
  },
};

// Fallback data for other slugs
const defaultContent = {
  title: 'Portfolio Project',
  description: 'Detailed information about this project, showcasing our skills and the value delivered to the client.',
  icon: <Briefcase className="w-12 h-12 text-blue-400" />,
  content: <p className="text-gray-400">This is a placeholder for the project details. More content will be added soon.</p>,
};

export default function PortfolioPage() {
  const params = useParams();
  const slug = params.slug as string;
  const details = portfolioDetails[slug as keyof typeof portfolioDetails] || defaultContent;

  return (
    <div className="min-h-screen bg-background text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <div className="inline-block p-4 bg-white/5 rounded-2xl mb-6">
            {details.icon}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
            {details.title}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
            {details.description}
          </p>
        </header>

        <main>
          {details.content}
        </main>
      </div>
    </div>
  );
}
