'use client';

import React, { FormEvent } from 'react';

export default function CateringForm() {
  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = [
      ['Name', form.get('name')],
      ['Email', form.get('email')],
      ['Phone', form.get('phone')],
      ['Event type', form.get('eventType')],
      ['Event date', form.get('date')],
      ['Location / venue', form.get('location')],
      ['Guest count', form.get('guests')],
      ['Service window', form.get('serviceWindow')],
      ['Estimated budget', form.get('budget')],
      ['Organizer / company', form.get('organizer')],
      ['Dietary needs', form.get('dietary')],
      ['Power / setup notes', form.get('setup')],
      ['Additional notes', form.get('message')],
    ].map(([label, value]) => `${label}: ${String(value || '')}`);

    const name = String(form.get('name') || '');
    const eventType = String(form.get('eventType') || 'event');
    const subject = encodeURIComponent(`Tackia catering inquiry — ${eventType}${name ? ` — ${name}` : ''}`);
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:catering@tackia.ca?subject=${subject}&body=${body}`;
  };

  const input = 'w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 outline-none transition focus:border-[#b73b2b] focus:ring-2 focus:ring-[#b73b2b]/15';

  return (
    <form onSubmit={submitInquiry} className="page-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">Name *<input name="name" required className={`${input} mt-2 font-normal`} /></label>
        <label className="text-sm font-bold">Email *<input name="email" type="email" required className={`${input} mt-2 font-normal`} /></label>
        <label className="text-sm font-bold">Phone<input name="phone" type="tel" className={`${input} mt-2 font-normal`} /></label>
        <label className="text-sm font-bold">Event type *
          <select name="eventType" required className={`${input} mt-2 font-normal`} defaultValue="">
            <option value="" disabled>Select event type</option>
            <option>Private party / birthday</option>
            <option>Corporate event / staff lunch</option>
            <option>Wedding / celebration</option>
            <option>Festival / market</option>
            <option>School / university / community</option>
            <option>Event organizer / venue booking</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-sm font-bold">Event date *<input name="date" type="date" required className={`${input} mt-2 font-normal`} /></label>
        <label className="text-sm font-bold">Location / venue<input name="location" placeholder="City, venue or address" className={`${input} mt-2 font-normal`} /></label>
        <label className="text-sm font-bold">Guest count<input name="guests" type="number" min="1" placeholder="Approximate number" className={`${input} mt-2 font-normal`} /></label>
        <label className="text-sm font-bold">Service window<input name="serviceWindow" placeholder="e.g. 12:00–2:00 PM" className={`${input} mt-2 font-normal`} /></label>
        <label className="text-sm font-bold">Estimated budget<input name="budget" placeholder="Optional" className={`${input} mt-2 font-normal`} /></label>
        <label className="text-sm font-bold">Organizer / company<input name="organizer" placeholder="Optional" className={`${input} mt-2 font-normal`} /></label>
      </div>
      <label className="mt-5 block text-sm font-bold">Dietary needs<textarea name="dietary" rows={2} placeholder="Vegetarian, allergies, other requirements" className={`${input} mt-2 resize-none font-normal`} /></label>
      <label className="mt-5 block text-sm font-bold">Power / setup notes<textarea name="setup" rows={2} placeholder="Organizer details, power access, vendor load-in, service space" className={`${input} mt-2 resize-none font-normal`} /></label>
      <label className="mt-5 block text-sm font-bold">Anything else?<textarea name="message" rows={4} className={`${input} mt-2 resize-none font-normal`} /></label>
      <button type="submit" className="btn-dark mt-6 w-full">Prepare catering request</button>
      <p className="mt-3 text-center text-xs leading-5 text-black/40">This opens your email app with the request pre-filled so you can review it before sending to catering@tackia.ca.</p>
    </form>
  );
}
