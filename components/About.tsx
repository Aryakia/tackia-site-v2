import React from 'react';

const values = [
  ['Made fresh', 'Street-food favourites prepared for flavour, texture and speed.'],
  ['Built for events', 'A mobile kitchen designed for festivals, private parties and corporate gatherings.'],
  ['Local energy', 'Serving Vancouver and the North Shore with a colourful, welcoming food-truck experience.'],
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f7f0e5] py-24 text-[#171512] sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#d9a441]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-44 bottom-0 h-80 w-80 rounded-full bg-[#607b3d]/10 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <p className="section-kicker">The Tackia story</p>
          <h2 className="display-title mt-4 max-w-3xl">Street food should feel like an occasion.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
            Tackia brings bold Mexican-inspired street food to Vancouver from a mobile kitchen built for busy markets and memorable events. Our focus is simple: fresh food, generous toppings, fast service and a fun experience from the first order to the last bite.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map(([title, text], index) => (
              <div key={title} className="rounded-[1.5rem] border border-black/10 bg-[#fffaf2]/85 p-5 shadow-[0_18px_50px_rgba(63,46,24,0.07)]">
                <span className="text-xs font-black text-[#b73b2b]">0{index + 1}</span>
                <h3 className="mt-3 font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <figure className="group col-span-2 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_70px_rgba(57,43,26,0.12)]">
            <img src="/images/nacho.jpg" alt="Tackia loaded nachos" loading="lazy" className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-80" />
          </figure>
          <figure className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_18px_50px_rgba(57,43,26,0.10)]">
            <img src="/images/taco-2.jpg" alt="Tackia tacos" loading="lazy" className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
          </figure>
          <figure className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_18px_50px_rgba(57,43,26,0.10)]">
            <img src="/images/hot-dog.jpg" alt="Tackia hot dog" loading="lazy" className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
          </figure>
        </div>
      </div>
    </section>
  );
}
