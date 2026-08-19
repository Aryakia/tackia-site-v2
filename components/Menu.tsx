import React from 'react';

const tacos = [
  ['Beef Taco', 'Ground beef', '$5.99', ''],
  ['Chicken Taco', 'Shredded chicken', '$5.99', ''],
  ['Pork Taco', 'Pulled pork', '$5.99', ''],
  ['Veggie Taco', 'Black beans', '$4.99', 'Vegetarian'],
  ['2 Tacos', 'Choose your favourites', '$10.99', ''],
  ['3 Tacos', 'Choose your favourites', '$14.99', ''],
  ['Special Taco', "Ask about today's special", '$7.99', ''],
];

const sides = [
  ['Loaded Nachos', 'Black beans, olive, corn, red cabbage, onion & parsley, tomato, guacamole and sour cream.', '$9.99'],
  ['Add Protein', 'Beef, chicken or pork.', '+$4.99'],
  ['Add Cheese', 'Extra cheese.', '+$1.99'],
  ['Extra Guacamole', 'Extra guacamole.', '+$1.99'],
];

export default function Menu() {
  return (
    <section className="bg-[#fff8ef] py-20 text-[#171512] sm:py-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="page-card overflow-hidden">
            <div className="relative h-72 overflow-hidden">
              <img src="/images/taco-2.jpg" alt="Tackia tacos" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 text-white">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffc857]">Tacos</p>
                <h2 className="mt-2 text-3xl font-black">Build your order.</h2>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="divide-y divide-black/10 border-y border-black/10">
                {tacos.map(([name, description, price, badge]) => (
                  <div key={name} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-black">{name}</h3>
                        {badge && <span className="rounded-full bg-[#607b3d]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#607b3d]">{badge}</span>}
                      </div>
                      <p className="mt-1 text-sm text-black/50">{description}</p>
                    </div>
                    <strong className="text-[#b73b2b]">{price}</strong>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-black/50">Toppings: olive, corn, red cabbage, onion & parsley, tomato. Ask about available sauces and today's special.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="page-card p-6 sm:p-8">
              <p className="section-kicker">Loaded Nachos</p>
              <h2 className="mt-3 text-3xl font-black">Crunchy. Loaded. Shareable.</h2>
              <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
                {sides.map(([name, description, price]) => (
                  <div key={name} className="flex items-start justify-between gap-5 py-4">
                    <div><h3 className="font-black">{name}</h3><p className="mt-1 text-sm leading-6 text-black/50">{description}</p></div>
                    <strong className="shrink-0 text-[#b73b2b]">{price}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#607b3d] p-6 text-white shadow-xl sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/65">New</p>
              <h2 className="mt-3 text-3xl font-black">Tackia Bowls</h2>
              <p className="mt-4 leading-7 text-white/80">A fresh bowl option built with Tackia flavours. Ask about today's protein and vegetarian bowl choices. Availability and pricing may vary by service.</p>
              <span className="mt-5 inline-flex rounded-full bg-white/15 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em]">Vegetarian option available</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="page-card overflow-hidden sm:grid sm:grid-cols-[.8fr_1.2fr]">
            <img src="/images/hot-dog.jpg" alt="Tackia Mexican-style hot dog" className="h-56 w-full object-cover sm:h-full" />
            <div className="p-6 sm:p-8">
              <p className="section-kicker">Hot Dog</p>
              <h2 className="mt-3 text-2xl font-black">Mexican-style street favourite</h2>
              <div className="mt-6 flex items-center justify-between border-y border-black/10 py-4"><span className="font-black">Hot Dog</span><strong className="text-[#b73b2b]">$8.99</strong></div>
              <p className="mt-4 text-sm text-black/50">Served with onion and parsley.</p>
            </div>
          </div>

          <div className="page-card p-6 sm:p-8">
            <p className="section-kicker">Drinks</p>
            <div className="mt-5 divide-y divide-black/10 border-y border-black/10">
              <div className="flex items-start justify-between gap-5 py-4"><div><strong>Pop</strong><p className="mt-1 text-sm text-black/50">Coke, Coke Zero, Fanta, Ginger Ale</p></div><strong className="text-[#b73b2b]">$2.50</strong></div>
              <div className="flex items-center justify-between gap-5 py-4"><strong>Water</strong><strong className="text-[#b73b2b]">$1.50</strong></div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-8 rounded-[2rem] bg-[#171512] p-6 text-white shadow-2xl sm:p-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffc857]">Take it with you</p>
            <h2 className="mt-3 text-3xl font-black">Scan or download the Tackia menu.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">The QR code opens this live menu. The downloadable PDF is designed for phones, event organizers and easy sharing.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/Tackia_Menu.pdf" download className="btn-primary">Download menu PDF</a>
              <a href="/catering" className="btn-secondary">Plan an event</a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-3 text-center text-black">
            <img src="/images/qr-menu.png" alt="QR code for Tackia online menu" className="h-32 w-32" />
            <span className="mt-2 block text-[10px] font-black uppercase tracking-[0.16em]">Scan menu</span>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-black/40">Delivery-platform prices and availability may differ from the truck menu.</p>
      </div>
    </section>
  );
}
