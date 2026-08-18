import React from 'react';

const PHOTOS = [
  { src: '/images/taco.jpg', alt: 'Fresh Tackia tacos with colourful toppings', label: 'Tacos' },
  { src: '/images/nacho.jpg', alt: 'Tackia loaded nachos', label: 'Loaded Nachos' },
  { src: '/images/hot-dog.jpg', alt: 'Tackia Mexican-style hot dog', label: 'Hot Dog' },
  { src: '/images/taco-2.jpg', alt: 'Tackia taco close-up', label: 'Made Fresh' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#11100e] py-24 text-white sm:py-32">
      <div className="container">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ffc857]">From the truck</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Food that looks as good as it tastes.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/50">Real Tackia food, prepared for markets, events and private catering across Vancouver and the North Shore.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
          {PHOTOS.map((photo, index) => (
            <figure
              key={photo.src}
              className={`group relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 ${index === 0 ? 'md:col-span-7 md:row-span-2 md:min-h-[620px]' : index === 1 ? 'md:col-span-5' : 'md:col-span-5'}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-6 text-lg font-black">{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
