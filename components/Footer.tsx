import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="container grid gap-10 md:grid-cols-[1.3fr_.7fr_.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo-tackia.jpg" alt="Tackia" className="h-10 w-auto rounded-md" />
            <div>
              <div className="font-black tracking-[0.18em]">TACKIA</div>
              <div className="text-xs text-white/40">Mexican street food • Vancouver</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/45">Fresh street food, mobile service and catering for markets, festivals and private events across Vancouver and the North Shore.</p>
        </div>

        <div>
          <h3 className="text-sm font-bold">Explore</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/50">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#findus" className="hover:text-white">Find Us</a>
            <a href="#catering" className="hover:text-white">Catering</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold">Connect</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/50">
            <a href="tel:+12368585373" className="hover:text-white">236-858-5373</a>
            <a href="mailto:catering@tackia.ca" className="hover:text-white">catering@tackia.ca</a>
            <a href="https://www.instagram.com/tac.kia/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="container mt-12 border-t border-white/10 pt-6 text-xs text-white/30">© {new Date().getFullYear()} Tackia. All rights reserved.</div>
    </footer>
  );
}
