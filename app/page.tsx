import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HomeLocation from '../components/HomeLocation';
import About from '../components/About';
import MenuPreview from '../components/MenuPreview';
import GoogleReviews from '../components/GoogleReviews';
import OrderOnline from '../components/OrderOnline';
import Gallery from '../components/Gallery';
import FollowUs from '../components/FollowUs';
import CateringCTA from '../components/CateringCTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import MobileActionBar from '../components/MobileActionBar';

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <HomeLocation />
      <About />
      <MenuPreview />
      <GoogleReviews />
      <OrderOnline />
      <Gallery />
      <FollowUs />
      <CateringCTA />
      <FAQ />
      <Footer />
      <MobileActionBar />
    </main>
  );
}
