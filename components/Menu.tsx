import React from 'react';

export default function Menu() {
  return (
    <section id="menu" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold">Menu</h2>
          <span className="text-sm text-neutral-400">Prices include GST where applicable.</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <h3 className="text-xl font-bold">Tacos</h3>
            <p className="text-sm text-neutral-300">Corn tortillas, fresh toppings, salsa verde.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex justify-between"><span>1 Taco</span><span className="font-semibold">$5.49</span></li>
              <li className="flex justify-between"><span>2 Tacos</span><span className="font-semibold">$9.99</span></li>
              <li className="flex justify-between"><span>3 Tacos</span><span className="font-semibold">$13.99</span></li>
              <li className="pt-2 border-t border-white/10 flex justify-between"><span>Special Taco</span><span className="font-semibold">$7.99</span></li>
            </ul>
            <div className="mt-4 text-xs text-neutral-300">
              Proteins: Beef, Chicken, Pork, Veggie (Black Beans) <span className="font-semibold">+ $4.99</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <h3 className="text-xl font-bold">Nachos</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex justify-between"><span>Nachos</span><span className="font-semibold">$5.99</span></li>
              <li className="flex justify-between"><span>Loaded Nachos</span><span className="font-semibold">$9.99</span></li>
            </ul>
            <p className="mt-3 text-xs text-neutral-300">
              Toppings: Black Beans, Olive, Corn, Red Cabbage, Onion & Parsley, Tomato, Guacamole, Sour Cream.
            </p>
            <p className="mt-2 text-xs text-neutral-300">Add cheese +$1.99</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
            <h3 className="text-xl font-bold">Hot Dog</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex justify-between"><span>Onion & Parsley</span><span className="font-semibold">$8.99</span></li>
            </ul>
            <div className="mt-6 text-sm">
              <h4 className="font-semibold">Extras</h4>
              <ul className="mt-2 space-y-1 text-xs text-neutral-300">
                <li>Guacamole +$1.99</li>
              </ul>
            </div>
            <div className="mt-6 text-sm">
              <h4 className="font-semibold">Beverages</h4>
              <ul className="mt-2 space-y-1 text-xs text-neutral-300">
                <li>Pops (Coke, Coke Zero, Fanta, Ginger Ale) — $2.50</li>
                <li>Water — $1.50</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {src:'/images/taco-2.jpg', alt:'Tackia tacos', caption:'Tacos'},
            {src:'/images/nacho.jpg', alt:'Loaded nachos', caption:'Loaded Nachos'},
            {src:'/images/hot-dog.jpg', alt:'Mexican-style hot dog', caption:'Hot Dog'},
          ].map((g, i) => (
            <figure key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={g.src} alt={g.alt} className="w-full h-64 object-cover" />
              <figcaption className="p-3 text-center text-sm text-neutral-300">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
