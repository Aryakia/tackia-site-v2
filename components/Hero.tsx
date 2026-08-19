import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[84vh] overflow-hidden border-b border-black/10 text-white">
      <div className="absolute inset-0 -z-20">
        <img src="/images/taco.jpg" alt="Fresh Tackia tacos" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/82 to-black/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-black/20" />

      <div className="container flex min-h-[84vh] items-center py-24">
        <div className="max-w-4xl">
          <p className="section-kicker-dark">Vancouver food truck • Events • Catering</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Big flavour.<br />Fresh off the truck.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            Tacos, loaded nachos, new bowl options and Mexican-inspired street food for markets, celebrations and hungry crowds across Vancouver.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="/menu" className="btn-primary">View the menu</a>
            <a href="/locations" className="btn-secondary">Find the truck</a>
            <a href="/catering" className="btn-secondary">Book Tackia</a>
          </div>

          <div className="mt-12 grid max-w-3xl gap-3 border-t border-white/15 pt-6 text-sm sm:grid-cols-3">
            <div><strong className="block text-lg text-white">4.5 ★</strong><span className="text-white/55">22 Google reviews</span></div>
            <div><strong className="block text-lg text-white">Vegetarian</strong><span className="text-white/55">Black-bean option</span></div>
            <div><strong className="block text-lg text-white">Mobile</strong><span className="text-white/55">Markets & private events</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
