import React from 'react';
import Header from '../../components/Header';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';
import MobileActionBar from '../../components/MobileActionBar';

export const metadata = {
  title: 'Locations & Schedule | Tackia Food Truck Vancouver',
  description: 'Find Tackia around Vancouver, including upcoming Olympic Village service dates, market appearances and event locations.',
  alternates: { canonical: '/locations' },
};

const directions = 'https://www.google.com/maps/search/?api=1&query=Olympic+Village+Square+Vancouver+BC';

export default function LocationsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHero kicker="Locations & schedule" title="Find Tackia around Vancouver." text="Our truck moves with markets, festivals and private events. Confirmed Olympic Village dates will be published here from the organizer schedule." image="/images/nacho.jpg" />
      <section className="bg-[#fff8ef] py-20 sm:py-24">
        <div className="container grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Olympic Village</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.035em]">Olympic Village Square / False Creek</h2>
            <p className="mt-5 text-lg leading-8 text-black/55">We are preparing Tackia’s confirmed Olympic Village dates from the schedule you provide. Once added, each date will show the service window and a direct map link.</p>
            <div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_55px_rgba(57,43,26,0.08)]">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b73b2b]">Confirmed Tackia dates</p>
              <div className="mt-5 rounded-2xl bg-[#f7f0e5] p-5"><strong>Schedule upload pending</strong><p className="mt-2 text-sm leading-6 text-black/50">The page is ready for the Olympic Village PDF/calendar dates. No dates are being guessed or published until they are confirmed.</p></div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3"><a href={directions} target="_blank" rel="noopener noreferrer" className="btn-dark">Directions in Google Maps</a><a href="https://www.instagram.com/tac.kia/" target="_blank" rel="noopener noreferrer" className="btn-outline-dark">Same-day updates</a></div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_24px_70px_rgba(57,43,26,0.12)]"><iframe title="Google Map of Olympic Village Square" src="https://www.google.com/maps?q=Olympic+Village+Square,+Vancouver,+BC&output=embed" className="min-h-[560px] w-full rounded-[1.5rem]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>
      <section className="bg-[#171512] py-20 text-white sm:py-24"><div className="container grid gap-6 md:grid-cols-3"><div className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffc857]">Markets</p><h3 className="mt-3 text-2xl font-black">Public service dates</h3><p className="mt-3 text-sm leading-6 text-white/55">Confirmed public dates will appear here with location, hours and directions.</p></div><div className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffc857]">Private events</p><h3 className="mt-3 text-2xl font-black">We also come to you</h3><p className="mt-3 text-sm leading-6 text-white/55">Private bookings are not shown publicly. Use the catering page to request your date.</p></div><div className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffc857]">Live updates</p><h3 className="mt-3 text-2xl font-black">Follow @tac.kia</h3><p className="mt-3 text-sm leading-6 text-white/55">Weather, event changes and sell-outs can affect a mobile schedule, so Instagram is the best same-day check.</p></div></div></section>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
