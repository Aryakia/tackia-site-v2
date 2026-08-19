import React from 'react';

const directions = 'https://www.google.com/maps/search/?api=1&query=Olympic+Village+Square+Vancouver+BC';

export default function HomeLocation() {
  return (
    <section className="bg-[#f7f0e5] py-20 text-[#171512] sm:py-24">
      <div className="container">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Find the truck</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Olympic Village</h2>
              <span className="rounded-full border border-[#b73b2b]/20 bg-[#b73b2b]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#b73b2b]">
                Schedule TBD
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="/locations" className="btn-dark">Schedule</a>
            <a href={directions} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">Google Maps</a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_24px_70px_rgba(57,43,26,0.10)]">
          <iframe
            title="Google Map of Olympic Village Square in Vancouver"
            src="https://www.google.com/maps?q=Olympic+Village+Square,+Vancouver,+BC&output=embed"
            className="min-h-[360px] w-full rounded-[1.5rem] sm:min-h-[430px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
