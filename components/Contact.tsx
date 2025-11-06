'use client';
import React, { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-endpoint'; // replace after creating your form

export default function Contact() {
  const [ok, setOk] = useState(false);

  return (
    <section id="catering" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Catering & Contact</h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Weddings, corporate lunches, festivals & parties. We’ll bring the truck!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={()=>setOk(true)} className="grid gap-4 text-sm">
              <input name="name" required placeholder="Name" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none" />
              <input name="email" required placeholder="Email" type="email" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none" />
              <input name="phone" placeholder="Phone" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none" />
              <input name="event" placeholder="Event date / location" className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none" />
              <textarea name="message" placeholder="Tell us about your event" rows={4} className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none" />
              <button className="btn-primary" type="submit">Send</button>
              {ok && <p className="text-xs text-neutral-400">Submitted — you’ll see a confirmation page from Formspree.</p>}
            </form>
            <p className="mt-3 text-xs text-neutral-400">
              Tip: Replace FORMSPREE_ENDPOINT in components/Contact.tsx with your unique URL after creating a project on formspree.io.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Reach us</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>📍 North Vancouver, BC</li>
              <li>📧 <a className="underline decoration-secondary/40 underline-offset-4" href="mailto:catering@tackia.ca">catering@tackia.ca</a></li>
              <li>📱 (604) 555-TACKIA</li>
              <li>📸 Instagram: <a href="#" className="underline">tackia.ca</a></li>
            </ul>
            <img src="/images/logo-tackia.jpg" alt="Tackia cactus logo with sombrero" className="mt-6 rounded-xl border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
