import React from 'react';

const values = [
  ['Made fresh', 'Street-food favourites prepared for flavour, texture and speed.'],
  ['Built for events', 'A mobile kitchen designed for festivals, private parties and corporate gatherings.'],
  ['Local energy', 'Serving Vancouver and the North Shore with a colourful, welcoming food-truck experience.'],
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="section-kicker">The Tackia story</p>
          <h2 className="display-title mt-4 max-w-3xl">Street food should feel like an occasion.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Tackia brings bold Mexican-inspired street food to Vancouver from a mobile kitchen built for busy markets and memorable events. Our focus is simple: fresh food, generous toppings, fast service and a fun experience from the first order to the last bite.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map(([title, text]) => (
              <div key={title} className="glass-card p-5">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <figure className="group col-span-2 overflow-hidden rounded-[2rem] border border-white/10">
            <img src="/images/nacho.jpg" alt="Tackia loaded nachos" className="h-72 w-full object-cover sm:h-80" />
          </figure>
          <figure className="group overflow-hidden rounded-[2rem] border border-white/10">
            <img src="/images/taco-2.jpg" alt="Tackia tacos" className="h-56 w-full object-cover" />
          </figure>
          <figure className="group overflow-hidden rounded-[2rem] border border-white/10">
            <img src="/images/hot-dog.jpg" alt="Tackia hot dog" className="h-56 w-full object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
}
