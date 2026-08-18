import React from 'react';

const tacoPrices = [
  ['1 Taco', '$5.99'],
  ['2 Tacos', '$10.99'],
  ['3 Tacos', '$14.99'],
  ['Special Taco', '$7.99'],
];

const menuCards = [
  {
    title: 'Tacos',
    image: '/images/taco-2.jpg',
    eyebrow: 'Choose beef, chicken, pork or veggie',
    rows: tacoPrices,
    note: 'Fresh toppings: olive, corn, red cabbage, onion & parsley, tomato.',
  },
  {
    title: 'Loaded Nachos',
    image: '/images/nacho.jpg',
    eyebrow: 'Crunchy, loaded, shareable',
    rows: [['Loaded Nachos', '$9.99'], ['Add Protein', '+$4.99'], ['Add Cheese', '+$1.99']],
    note: 'Black beans, olive, corn, red cabbage, onion & parsley, tomato, guacamole and sour cream.',
  },
  {
    title: 'Hot Dog',
    image: '/images/hot-dog.jpg',
    eyebrow: 'A Tackia street-food favourite',
    rows: [['Hot Dog', '$8.99'], ['Guacamole', '+$1.99']],
    note: 'Served with onion and parsley.',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="border-y border-white/10 bg-white/[0.025] py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Made for cravings</p>
            <h2 className="display-title mt-4">The menu.</h2>
          </div>
          <p className="max-w-xl text-white/55 md:text-right">Simple choices, bold toppings and fresh food made to order. Ask us about today’s special.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {menuCards.map((card) => (
            <article key={card.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] shadow-2xl shadow-black/20">
              <div className="h-64 overflow-hidden">
                <img src={card.image} alt={card.title} className="food-image" />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b8e34b]">{card.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-black">{card.title}</h3>
                <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  {card.rows.map(([label, price]) => (
                    <div key={label} className="flex items-center justify-between gap-4 py-3 text-sm">
                      <span className="text-white/70">{label}</span>
                      <strong className="text-[#ffc857]">{price}</strong>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-white/50">{card.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-3 sm:p-8">
          <div><span className="text-sm text-white/45">Veggie</span><strong className="mt-1 block text-xl">Black Beans · $4.99</strong></div>
          <div><span className="text-sm text-white/45">Pop</span><strong className="mt-1 block text-xl">$2.50</strong><span className="text-xs text-white/40">Coke, Coke Zero, Fanta, Ginger Ale</span></div>
          <div><span className="text-sm text-white/45">Water</span><strong className="mt-1 block text-xl">$1.50</strong></div>
        </div>
      </div>
    </section>
  );
}
