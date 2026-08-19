import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-14 text-white">
      <div className="container grid gap-10 md:grid-cols-[1.3fr_.7fr_.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo-tackia.jpg" alt="Tackia" className="h-10 w-auto rounded-md" />
            <div><div className="font-black tracking-[0.18em]">TACKIA</div><div className="text-xs text-white/40">Mexican street food • Vancouver</div></div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/45">Fresh street food, rotating locations and food-truck catering for markets, festivals and private events across Vancouver.</p>
          <a href="/catering" className="mt-6 inline-flex rounded-full bg-[#ffc857] px-5 py-3 text-sm font-black text-black transition hover:bg-white">Book the truck</a>
        </div>
        <div>
          <h3 className="text-sm font-bold">Explore</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/50">
            <a href="/menu" className="hover:text-white">Menu</a>
            <a href="/locations" className="hover:text-white">Locations</a>
            <a href="/catering" className="hover:text-white">Catering</a>
            <a href="/#reviews" className="hover:text-white">Google Reviews</a>
            <a href="/#follow-us" className="hover:text-white">Follow Us</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold">Connect</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/50">
            <a href="tel:+12368585373" className="hover:text-white">236-858-5373</a>
            <a href="mailto:catering@tackia.ca" className="hover:text-white">catering@tackia.ca</a>
            <a href="https://www.instagram.com/tac.kia/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram @tac.kia</a>
            <a href="/Tackia_Menu.pdf" className="hover:text-white">Download Menu PDF</a>
          </div>
        </div>
      </div>
      <div className="container mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Tackia. All rights reserved.</span>
        <span>Vancouver, British Columbia</span>
      </div>
    </footer>
  );
}
