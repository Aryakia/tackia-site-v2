'use client';

import React, { useEffect, useState } from 'react';

const links = [
  ['Menu', '/menu'],
  ['Locations', '/locations'],
  ['Catering', '/catering'],
  ['Reviews', '/#reviews'],
  ['Follow Us', '/#follow-us'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 text-white backdrop-blur-xl supports-[backdrop-filter]:bg-black/70">
      <div className="container flex h-20 items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3" aria-label="Tackia home">
          <img src="/images/logo-tackia.jpg" alt="Tackia" className="h-10 w-auto rounded-md" />
          <div className="hidden sm:block">
            <div className="text-sm font-black tracking-[0.18em]">TACKIA</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">Mexican Street Food</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-white/70 transition hover:text-white">{label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/#order" className="btn-primary hidden sm:inline-flex">Order online</a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className="text-xl" aria-hidden="true">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <nav className="container flex flex-col py-3" aria-label="Mobile navigation">
            <a href="/" onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-semibold text-white">Home</a>
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-semibold text-white">{label}</a>
            ))}
            <a href="/#order" onClick={() => setOpen(false)} className="py-4 font-semibold text-[#ffc857]">Order online</a>
          </nav>
        </div>
      )}
    </header>
  );
}
