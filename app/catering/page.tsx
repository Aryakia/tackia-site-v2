import React from 'react';
import Header from '../../components/Header';
import PageHero from '../../components/PageHero';
import CateringForm from '../../components/CateringForm';
import Footer from '../../components/Footer';
import MobileActionBar from '../../components/MobileActionBar';

export const metadata = {
  title: 'Catering & Event Booking | Tackia Food Truck Vancouver',
  description: 'Book Tackia for private parties, corporate events, weddings, festivals, markets, schools and community events across Vancouver.',
  alternates: { canonical: '/catering' },
};

const packages = [
  ['Private parties', 'Birthdays, celebrations and casual gatherings with food served directly from the truck.'],
  ['Corporate events', 'Staff lunches, office events, client gatherings and team celebrations.'],
  ['Weddings & celebrations', 'A colourful late-night, reception or casual food-truck service option.'],
  ['Festivals & markets', 'High-volume public service for organizers looking for a compact, approachable street-food menu.'],
];

export default function CateringPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHero kicker="Catering" title="Bring the Tackia truck to your event." text="Tell us the date, location, guest count and event format. We’ll shape the menu and service plan around the occasion." image="/images/nacho.jpg" />
      <section className="bg-[#fff8ef] py-20 sm:py-24">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {packages.map(([title, text]) => (<article key={title} className="page-card p-6"><span className="text-xs font-black uppercase tracking-[0.2em] text-[#607b3d]">Catering option</span><h2 className="mt-3 text-2xl font-black">{title}</h2><p className="mt-3 text-sm leading-6 text-black/55">{text}</p></article>))}
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="section-kicker">Request a quote</p><h2 className="mt-4 text-4xl font-black tracking-[-0.035em]">The details that help us quote accurately.</h2><p className="mt-5 text-lg leading-8 text-black/55">Guest count, service timing, event location, menu scope and organizer logistics can all change the best setup, so we keep catering pricing custom rather than publishing a one-size-fits-all package.</p>
              <div className="mt-8 rounded-[2rem] bg-[#171512] p-6 text-white"><p className="text-xs font-black uppercase tracking-[0.2em] text-[#ffc857]">Event organizers</p><h3 className="mt-3 text-2xl font-black">Festival, venue or public-event booking?</h3><p className="mt-3 text-sm leading-6 text-white/60">Choose “Event organizer / venue booking” in the form and include load-in timing, service window, expected attendance, vendor requirements, power access and any permit or insurance requirements.</p><a href="/Tackia_Menu.pdf" className="mt-5 inline-flex font-black text-[#ffc857]">Download organizer menu PDF →</a></div>
              <div className="mt-6 space-y-3 text-sm"><p><strong>Phone:</strong> <a href="tel:+12368585373" className="text-[#b73b2b]">236-858-5373</a></p><p><strong>Email:</strong> <a href="mailto:catering@tackia.ca" className="text-[#b73b2b]">catering@tackia.ca</a></p><p><strong>Service area:</strong> Vancouver & surrounding event locations</p></div>
            </div>
            <CateringForm />
          </div>
        </div>
      </section>
      <Footer />
      <MobileActionBar />
    </main>
  );
}
