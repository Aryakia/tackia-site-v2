import React from 'react';

export default function CateringCTA() {
  return (
    <section className="bg-[#b73b2b] py-20 text-white sm:py-24">
      <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-white/65">Bring the truck</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.035em] sm:text-5xl">Planning a party, festival, wedding or company event?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">Our dedicated catering page lets you choose the event type, guest count, date, service location and organizer details so we can quote the right setup.</p>
        </div>
        <a href="/catering" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#ffc857] px-7 py-4 font-black text-black transition hover:bg-white">Book Tackia</a>
      </div>
    </section>
  );
}
