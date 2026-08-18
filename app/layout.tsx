import "./../styles/globals.css";
import React from "react";

export const metadata = {
  metadataBase: new URL('https://tackia.ca'),
  title: 'Tackia | Mexican Food Truck & Catering in Vancouver',
  description: 'Tackia serves fresh tacos, loaded nachos and Mexican-inspired street food across Vancouver and the North Shore. Find the truck or book Tackia for your next event.',
  keywords: ['Mexican food truck Vancouver', 'North Vancouver tacos', 'food truck catering Vancouver', 'Mexican catering Vancouver', 'Tackia'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Tackia | Mexican Food Truck & Catering in Vancouver',
    description: 'Fresh street food, markets, festivals and catering across Vancouver and the North Shore.',
    url: 'https://tackia.ca',
    siteName: 'Tackia',
    images: [{ url: '/images/taco.jpg', width: 1200, height: 630, alt: 'Fresh Tackia tacos' }],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tackia | Mexican Food Truck & Catering in Vancouver',
    description: 'Fresh Mexican street food and event catering across Vancouver and the North Shore.',
    images: ['/images/taco.jpg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Tackia',
  url: 'https://tackia.ca',
  image: 'https://tackia.ca/images/taco.jpg',
  telephone: '+1-236-858-5373',
  email: 'catering@tackia.ca',
  priceRange: '$$',
  servesCuisine: ['Mexican', 'Street Food'],
  areaServed: ['Vancouver', 'North Vancouver', 'North Shore'],
  sameAs: ['https://www.instagram.com/tac.kia/'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
