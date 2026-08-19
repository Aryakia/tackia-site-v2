import "./../styles/globals.css";
import React from "react";

export const metadata = {
  metadataBase: new URL('https://tackia.ca'),
  title: {
    default: 'Tackia | Mexican Food Truck & Catering in Vancouver',
    template: '%s | Tackia',
  },
  description: 'Tackia serves tacos, loaded nachos, new bowl options and Mexican-inspired street food across Vancouver. Find the truck, order online or book food-truck catering.',
  keywords: ['Mexican food truck Vancouver', 'Vancouver tacos', 'Olympic Village food truck', 'food truck catering Vancouver', 'Mexican catering Vancouver', 'Tackia'],
  alternates: { canonical: '/' },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Tackia | Mexican Food Truck & Catering in Vancouver',
    description: 'Fresh street food, rotating locations, events and catering across Vancouver.',
    url: 'https://tackia.ca',
    siteName: 'Tackia',
    images: [{ url: '/images/taco.jpg', width: 1200, height: 630, alt: 'Fresh Tackia tacos' }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tackia | Mexican Food Truck & Catering in Vancouver',
    description: 'Mexican-inspired street food, rotating locations and event catering in Vancouver.',
    images: ['/images/taco.jpg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['FoodEstablishment', 'LocalBusiness'],
  name: 'Tackia',
  url: 'https://tackia.ca',
  image: [
    'https://tackia.ca/images/taco.jpg',
    'https://tackia.ca/images/nacho.jpg',
    'https://tackia.ca/images/hot-dog.jpg',
  ],
  telephone: '+1-236-858-5373',
  email: 'catering@tackia.ca',
  priceRange: '$$',
  servesCuisine: ['Mexican', 'Street Food'],
  areaServed: ['Vancouver', 'North Vancouver', 'North Shore'],
  hasMenu: 'https://tackia.ca/menu',
  sameAs: ['https://www.instagram.com/tac.kia/'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '22',
    bestRating: '5',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
