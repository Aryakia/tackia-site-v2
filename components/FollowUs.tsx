import React from 'react';

const photos = [
  ['/images/taco.jpg', 'Fresh Tackia tacos'],
  ['/images/nacho.jpg', 'Loaded Tackia nachos'],
  ['/images/hot-dog.jpg', 'Tackia Mexican-style hot dog'],
  ['/images/taco-2.jpg', 'Tackia taco close-up'],
];

export default function FollowUs() {
  return (
    <section id="follow-us" className="bg-[#fff8ef] py-24 text-[#171512] sm:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Follow the truck</p>
            <h2 className="display-title mt-4">Food, locations and what’s coming off the grill.</h2>
          </div>
          <a href="https://www.instagram.com/tac.kia/" target="_blank" rel="noopener noreferrer" className="btn-dark self-start md:self-auto">Follow @tac.kia</a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {photos.map(([src, alt]) => (
            <a key={src} href="https://www.instagram.com/tac.kia/" target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#efe5d7]">
              <img src={src} alt={alt} loading="lazy" className="food-image" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-xs font-black uppercase tracking-[0.16em] text-white opacity-0 transition group-hover:opacity-100">@tac.kia</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
