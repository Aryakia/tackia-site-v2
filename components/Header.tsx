'use client';
import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-neutral-950/70">
      <div className="container py-4 flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="text-2xl font-black tracking-tight text-brand">Tackia</span>
          <span className="text-xs text-neutral-300">Vancouver</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#menu" className="hover:text-brand transition">Menu</a>
          <a href="#findus" className="hover:text-brand transition">Find Us</a>
          <a href="#businesscard" className="hover:text-brand transition">Business Card</a>
          <a href="#catering" className="hover:text-brand transition">Catering</a>
          <a href="#contact" className="hover:text-brand transition">Contact</a>
        </nav>
        <a href="#menu" className="rounded-full bg-brand text-black px-4 py-2 font-semibold shadow hover:shadow-brand/30 transition">
          Order / Menu
        </a>
      </div>
    </header>
  );
}
