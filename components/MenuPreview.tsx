import React from 'react';

const items = [
  { title: 'Tacos', text: 'Beef, chicken, pork or vegetarian black beans.', image: '/images/taco-2.jpg', badge: 'From $4.99' },
  { title: 'Loaded Nachos', text: 'Loaded with toppings, guacamole and sour cream.', image: '/images/nacho.jpg', badge: '$9.99' },
  { title: 'Tackia Bowls', text: 'New bowl options with protein and vegetarian choices.', image: '/images/logo-cactus.jpg', badge: 'New' },
  { title: 'Hot Dog', text: 'A Mexican-inspired Tackia street-food favourite.', image: '/images/hot-dog.jpg', badge: '$8.99' },
];

export default function MenuPreview() {
  return (
    <section className="border-y border-black/10 bg-[#fffaf2] py-24 text-[#171512] sm:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Made for cravings</p>
            <h2 className="display-title mt-4">A quick taste of Tackia.</h2>
          </div>
          <a href="/menu" className="btn-dark self-start md:self-auto">See full menu</a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(item => (
            <a key={item.title} href="/menu" className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_18px_55px_rgba(57,43,26,0.08)] transition hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(57,43,26,0.12)]">
              <div className="relative h-48 overflow-hidden bg-[#efe5d7]">
                <img src={item.image} alt={item.title} loading="lazy" className="food-image" />
                <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-black text-[#ffc857] backdrop-blur">{item.badge}</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/55">{item.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
