import React from 'react';

type Props = {
  kicker: string;
  title: string;
  text: string;
  image?: string;
};

export default function PageHero({ kicker, title, text, image = '/images/taco.jpg' }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-black py-24 text-white sm:py-28">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/45" />
      <div className="container">
        <p className="section-kicker-dark">{kicker}</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-0.045em] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{text}</p>
      </div>
    </section>
  );
}
