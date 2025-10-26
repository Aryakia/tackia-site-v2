import React from "react";
import Header from "../components/Header";
import TodayBanner from "../components/TodayBanner";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <TodayBanner />
      <Hero />
      <About />
      <Menu />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
