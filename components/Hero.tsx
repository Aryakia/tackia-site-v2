import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#FF007A26,transparent_45%),radial-gradient(circle_at_80%_20%,#00D1FF26,transparent_45%),radial-gradient(circle_at_30%_80%,#FFD60026,transparent_45%)]" />
        <img alt="Tackia tacos and nachos collage background" src="/images/taco.jpg" className="h-96 w-full object-cover opacity-20" />
      </div>
      <div className="container py-20 text-center">
        <p className="uppercase tracking-[0.25em] text-xs text-neutral-300">Mexican Street Food • Food Truck</p>
        <h1 className="mt-3 text-5xl md:text-7xl font-black leading-tight">
          Real <span className="text-primary">Mexican Flavour</span>,<br className="hidden sm:block" /> on Vancouver Wheels
        </h1>
        <p className="mt-4 text-neutral-300 max-w-3xl mx-auto">
          Tacos, nachos, hot dogs with a Mexican twist, and good vibes. Catch us at markets & events across the North Shore.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="btn-primary">See Menu</a>
          <a href="#catering" className="rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition">Book Catering</a>
        </div>
      </div>
    </section>
  );
}
