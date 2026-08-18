import React from "react";
import Header from "../components/Header";
import TodayBanner from "../components/TodayBanner";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import OrderOnline from "../components/OrderOnline";
import Events from "../components/Events";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <TodayBanner />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <OrderOnline />
      <Events />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
