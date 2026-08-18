import React from 'react';

const options = [
  {
    title: 'Find the truck',
    label: 'Follow our schedule',
    text: 'Our location changes with markets and events. Check the live banner above and Instagram for the latest service location and hours.',
    action: 'Follow @tac.kia',
    href: 'https://www.instagram.com/tac.kia/',
  },
  {
    title: 'Private catering',
    label: 'We bring the kitchen',
    text: 'Birthdays, weddings, company events and community gatherings — Tackia can serve directly from the truck at your venue.',
    action: 'Request catering',
    href: '#catering',
  },
  {
    title: 'Festivals & markets',
    label: 'Built for busy crowds',
    text: 'Looking for a colourful food vendor with fast service and an approachable menu? Invite Tackia to your market, festival or public event.',
    action: 'Contact us',
    href: '#contact',
  },
];

export default function Events() {
  return (
    <section id="findus" className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="section-kicker">Where to find us</p>
          <h2 className="display-title mt-4">From the curb to your celebration.</h2>
          <p className="mt-6 text-lg leading-8 text-white/60">Tackia is mobile by design. Catch us around Vancouver or bring the full food-truck experience to your own event.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {options.map((item, i) => (
            <article key={item.title} className="glass-card flex min-h-[330px] flex-col p-7 sm:p-8">
              <span className="text-sm font-black text-[#ffc857]">0{i + 1}</span>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-white/40">{item.label}</p>
              <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-white/55">{item.text}</p>
              <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="mt-8 font-bold text-[#b8e34b] hover:text-white">{item.action} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
