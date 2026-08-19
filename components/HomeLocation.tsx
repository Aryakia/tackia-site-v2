import React from 'react';

const directions = 'https://www.google.com/maps/search/?api=1&query=Olympic+Village+Square+Vancouver+BC';

export default function HomeLocation() {
  return (
    <section className="bg-[#f7f0e5] py-24 text-[#171512] sm:py-28">
      <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col justify-center">
          <p className="section-kicker">Find the truck</p>
          <h2 className="display-title mt-4">Olympic Village dates are coming to the schedule.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">Tackia serves rotating markets and events. Our Olympic Village availability will be published here from the confirmed organizer schedule, with dates, service windows and one-tap directions.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/locations" className="btn-dark">View locations & schedule</a>
            <a href={directions} target="_blank" rel="noopener noreferrer" className="btn-outline-dark">Open Google Maps</a>
          </div>
          <p className="mt-6 text-sm leading-6 text-black/45">For same-day changes, follow <a href="https://www.instagram.com/tac.kia/" target="_blank" rel="noopener noreferrer" className="font-black text-[#b73b2b]">@tac.kia</a>.</p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_24px_70px_rgba(57,43,26,0.12)]">
          <iframe
            title="Google Map of Olympic Village Square in Vancouver"
            src="https://www.google.com/maps?q=Olympic+Village+Square,+Vancouver,+BC&output=embed"
            className="min-h-[430px] w-full rounded-[1.5rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
