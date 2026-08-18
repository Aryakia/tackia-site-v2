'use client';

import React, { useState } from 'react';

const links = [
  ['Menu', '#menu'],
  ['About', '#about'],
  ['Find Us', '#findus'],
  ['Catering', '#catering'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Tackia home">
          <img src="/images/logo-tackia.jpg" alt="Tackia" className="h-10 w-auto rounded-md" />
          <div className="hidden sm:block">
            <div className="text-sm font-black tracking-[0.18em]">TACKIA</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">Mexican Street Food</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-white/75 transition hover:text-white">{label}</a>
          ))}
          <a href="https://www.instagram.com/tac.kia/" target="_blank" rel="noopener noreferrer" className="text-white/75 transition hover:text-white">Instagram</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#menu" className="btn-primary hidden sm:inline-flex">View Menu</a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span className="text-xl">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <nav className="container flex flex-col py-4" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-semibold">{label}</a>
            ))}
            <a href="https://www.instagram.com/tac.kia/" target="_blank" rel="noopener noreferrer" className="py-4 font-semibold">Instagram</a>
          </nav>
        </div>
      )}
    </header>
  );
}
