import React from 'react';
import Header from '../../components/Header';
import PageHero from '../../components/PageHero';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import MobileActionBar from '../../components/MobileActionBar';

export const metadata = {
  title: 'Menu | Tackia Mexican Food Truck Vancouver',
  description: 'Explore Tackia tacos, loaded nachos, hot dogs, vegetarian options, new bowls and drinks. Download the menu PDF or scan the live menu QR code.',
  alternates: { canonical: '/menu' },
};

export default function MenuPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHero kicker="Tackia menu" title="Street-food favourites, made for the truck." text="Tacos, loaded nachos, a Mexican-inspired hot dog, vegetarian choices and new bowl options. Simple, bold and built for fast service." image="/images/taco-2.jpg" />
      <Menu />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
