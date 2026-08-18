import React from 'react';

const FAQS = [
  {
    q: 'Do you cater private events?',
    a: 'Yes. Tackia is available for private parties, corporate events, festivals and other gatherings across Vancouver and the North Shore.',
  },
  {
    q: 'Can you customize the menu for an event?',
    a: 'Yes. Menu scope and service format can be adjusted based on guest count, event timing and dietary needs. Contact us with the event details and we will recommend an approach.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Earlier is better for weekends and event season. If your date is coming up soon, contact us anyway and we will confirm availability.',
  },
  {
    q: 'Where can I find the truck?',
    a: 'Our schedule changes with markets and events. Follow @tac.kia on Instagram for the latest location and service updates.',
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#f8f2e8] py-24 text-[#171717] sm:py-28">
      <div className="container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b53722]">Good to know</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Frequently asked questions.</h2>
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-black">
                {item.q}
                <span className="text-2xl font-light transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-7 text-black/60">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
