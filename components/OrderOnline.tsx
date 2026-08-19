import React from 'react';

const uberUrl = 'https://www.ubereats.com/ca/store/tackia-2070-marine-dr/EdZDkWEFR12-CKE3RwztMg';

export default function OrderOnline() {
  return (
    <section id="order" className="bg-[#ef5b2a] py-20 text-[#161411] sm:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em]">Order online</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] sm:text-5xl lg:text-6xl">Tackia, your way.</h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-7 text-black/65">Uber Eats has a public Tackia storefront. We did not find reliable public Tackia links for DoorDash or Skip, so those buttons stay inactive until the direct storefront links are confirmed.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href={uberUrl} target="_blank" rel="noopener noreferrer" className="group rounded-[1.5rem] bg-[#171411] p-5 text-white shadow-xl transition hover:-translate-y-1 hover:bg-black">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-white/45">Uber Eats</span>
              <p className="mt-3 min-h-16 text-sm leading-6 text-white/65">Open Tackia’s public Uber Eats storefront for current delivery or pickup availability.</p>
              <span className="mt-6 inline-flex items-center gap-2 font-black text-[#ffc857]">Open Uber Eats <span aria-hidden="true">→</span></span>
            </a>
            {['DoorDash', 'Skip'].map(platform => (
              <div key={platform} className="rounded-[1.5rem] border border-black/15 bg-white/35 p-5 text-black/55" aria-disabled="true">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-black/45">{platform}</span>
                <p className="mt-3 min-h-16 text-sm leading-6">Direct Tackia storefront link pending confirmation.</p>
                <span className="mt-6 inline-flex font-black text-black/45">Link coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
