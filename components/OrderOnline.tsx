import React from 'react';

const options = [
  {
    title: 'Call Tackia',
    description: 'Questions, pickup coordination or event planning.',
    href: 'tel:+12368585373',
    action: '236-858-5373',
  },
  {
    title: 'Catering',
    description: 'Bring the Tackia truck to your party, festival or corporate event.',
    href: '#catering',
    action: 'Request a quote',
  },
  {
    title: 'Instagram',
    description: 'Follow locations, service updates and what is coming off the grill.',
    href: 'https://www.instagram.com/tac.kia/',
    action: '@tac.kia',
    external: true,
  },
];

export default function OrderOnline() {
  return (
    <section id="order" className="bg-[#ef5b2a] py-20 text-[#161411] sm:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em]">Ready when you are</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Tackia, your way.</h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-7 text-black/65">Order options are being expanded as our delivery-platform storefronts come online. In the meantime, reach us directly or book the truck for your event.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {options.map((option) => (
              <a
                key={option.title}
                href={option.href}
                target={option.external ? '_blank' : undefined}
                rel={option.external ? 'noopener noreferrer' : undefined}
                className="group rounded-[1.5rem] bg-[#171411] p-5 text-white shadow-xl transition hover:-translate-y-1 hover:bg-black"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/45">{option.title}</span>
                <p className="mt-3 min-h-16 text-sm leading-6 text-white/65">{option.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-black text-[#ffc857]">{option.action}<span aria-hidden="true" className="transition group-hover:translate-x-1">→</span></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
