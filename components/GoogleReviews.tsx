import React from 'react';

const googleUrl = 'https://www.google.com/maps/search/?api=1&query=Tackia&query_place_id=ChIJXcTxTCdvhlQR-OvI5XmqgvA';
const reviews = [
  '“Perfect tacos, amazing sauces, and super friendly staff.”',
  '“Friendly service, fast, and full of authentic Mexican taste.”',
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="bg-[#171512] py-24 text-white sm:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <p className="section-kicker-dark">Google reviews</p>
            <div className="mt-5 flex items-end gap-3">
              <strong className="text-6xl font-black tracking-[-0.05em]">4.5</strong>
              <div className="pb-2"><div className="text-xl text-[#ffc857]">★★★★★</div><p className="mt-1 text-sm text-white/45">22 Google reviews</p></div>
            </div>
            <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex font-black text-[#ffc857] transition hover:text-white">Read reviews & see customer photos on Google →</a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map(review => (
              <blockquote key={review} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 text-xl font-bold leading-8 shadow-xl">
                {review}
                <footer className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-white/35">Google review</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
