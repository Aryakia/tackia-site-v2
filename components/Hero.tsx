import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[82vh] overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-20">
        <img src="/images/taco.jpg" alt="Fresh Tackia tacos" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-black/20" />

      <div className="container flex min-h-[82vh] items-center py-24">
        <div className="max-w-4xl">
          <p className="section-kicker">Vancouver food truck • Events • Catering</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
            Big flavour.<br />Fresh off the truck.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            Tacos, loaded nachos and Mexican-inspired street food made for markets, celebrations and hungry crowds across Vancouver and the North Shore.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#menu" className="btn-primary">Explore the menu</a>
            <a href="#catering" className="btn-secondary">Book Tackia</a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-6 text-sm">
            <div><strong className="block text-lg text-white">Fresh</strong><span className="text-white/55">Made to order</span></div>
            <div><strong className="block text-lg text-white">Mobile</strong><span className="text-white/55">Markets & events</span></div>
            <div><strong className="block text-lg text-white">Local</strong><span className="text-white/55">Vancouver, BC</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
