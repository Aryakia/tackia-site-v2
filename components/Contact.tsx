'use client';

import React, { FormEvent } from 'react';

export default function Contact() {
  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const phone = String(form.get('phone') || '');
    const eventInfo = String(form.get('event') || '');
    const message = String(form.get('message') || '');
    const subject = encodeURIComponent(`Tackia catering inquiry${name ? ` — ${name}` : ''}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent: ${eventInfo}\n\n${message}`);
    window.location.href = `mailto:catering@tackia.ca?subject=${subject}&body=${body}`;
  };

  return (
    <section id="catering" className="border-t border-white/10 bg-[#f8f2e8] py-24 text-[#171717] sm:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b53722]">Catering & contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Bring Tackia to your next event.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">Tell us the date, location and approximate guest count. We’ll help you shape a food-truck service that fits the occasion.</p>

            <div id="contact" className="mt-10 space-y-5 border-t border-black/10 pt-8 text-sm">
              <div><span className="block text-black/45">Phone</span><a href="tel:+12368585373" className="mt-1 block text-xl font-black">236-858-5373</a></div>
              <div><span className="block text-black/45">Email</span><a href="mailto:catering@tackia.ca" className="mt-1 block text-xl font-black">catering@tackia.ca</a></div>
              <div><span className="block text-black/45">Instagram</span><a href="https://www.instagram.com/tac.kia/" target="_blank" rel="noopener noreferrer" className="mt-1 block text-xl font-black">@tac.kia</a></div>
              <div><span className="block text-black/45">Service area</span><span className="mt-1 block text-xl font-black">Vancouver & North Shore</span></div>
            </div>
          </div>

          <form onSubmit={submitInquiry} className="rounded-[2rem] bg-black p-6 text-white shadow-2xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm"><span className="mb-2 block text-white/55">Name *</span><input name="name" required className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 outline-none focus:border-[#ffc857]" /></label>
              <label className="text-sm"><span className="mb-2 block text-white/55">Email *</span><input name="email" required type="email" className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 outline-none focus:border-[#ffc857]" /></label>
              <label className="text-sm"><span className="mb-2 block text-white/55">Phone</span><input name="phone" className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 outline-none focus:border-[#ffc857]" /></label>
              <label className="text-sm"><span className="mb-2 block text-white/55">Event date / location</span><input name="event" className="w-full rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 outline-none focus:border-[#ffc857]" /></label>
            </div>
            <label className="mt-4 block text-sm"><span className="mb-2 block text-white/55">Tell us about your event</span><textarea name="message" rows={5} className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 outline-none focus:border-[#ffc857]" /></label>
            <button type="submit" className="mt-5 w-full rounded-full bg-[#ffc857] px-6 py-4 font-black text-black transition hover:bg-white">Prepare email inquiry</button>
            <p className="mt-3 text-center text-xs leading-5 text-white/35">This opens your email app with the inquiry pre-filled, so you can review it before sending.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
