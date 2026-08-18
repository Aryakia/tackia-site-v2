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
    <section id="menu" className="border-y border-black/10 bg-[#fffaf2] py-24 text-[#171512] sm:py-32">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Made for cravings</p>
            <h2 className="display-title mt-4">The menu.</h2>
          </div>
          <p className="max-w-xl text-black/55 md:text-right">Simple choices, bold toppings and fresh food made to order. Ask us about today’s special.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {menuCards.map((card) => (
            <article key={card.title} className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_22px_65px_rgba(57,43,26,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(57,43,26,0.14)]">
              <div className="h-64 overflow-hidden bg-[#efe5d7]">
                <img src={card.image} alt={card.title} loading="lazy" className="food-image" />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#607b3d]">{card.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-black">{card.title}</h3>
                <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
                  {card.rows.map(([label, price]) => (
                    <div key={label} className="flex items-center justify-between gap-4 py-3 text-sm">
                      <span className="text-black/65">{label}</span>
                      <strong className="text-[#b73b2b]">{price}</strong>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-black/50">{card.note}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-[2rem] border border-black/10 bg-[#f4eadb] p-6 shadow-[0_18px_55px_rgba(57,43,26,0.06)] sm:grid-cols-3 sm:p-8">
          <div><span className="text-sm text-black/45">Veggie taco</span><strong className="mt-1 block text-xl">Black Beans · $4.99</strong></div>
          <div><span className="text-sm text-black/45">Pop</span><strong className="mt-1 block text-xl">$2.50</strong><span className="text-xs text-black/40">Coke, Coke Zero, Fanta, Ginger Ale</span></div>
          <div><span className="text-sm text-black/45">Water</span><strong className="mt-1 block text-xl">$1.50</strong></div>
        </div>
      </div>
    </section>
  );
}
