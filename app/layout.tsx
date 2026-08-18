export const metadata = {
  metadataBase: new URL('https://tackia.ca'),
  title: 'Tackia | Mexican Food Truck & Catering in Vancouver',
  description: 'Tackia serves tacos, loaded nachos and Mexican-inspired street food across Vancouver and the North Shore. Find the truck or book Tackia for your next event.',
  keywords: ['Mexican food truck Vancouver', 'North Vancouver tacos', 'food truck catering Vancouver', 'Mexican catering Vancouver', 'Tackia'],
  openGraph: {
    title: 'Tackia | Mexican Food Truck & Catering in Vancouver',
    description: 'Fresh street food, markets, festivals and catering across Vancouver and the North Shore.',
    url: 'https://tackia.ca',
    siteName: 'Tackia',
    images: ['/images/taco.jpg'],
    locale: 'en_CA',
    type: 'website',
  },
};

import "./../styles/globals.css";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
