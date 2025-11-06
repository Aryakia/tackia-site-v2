'use client';
import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-ink/80">
      <div className="container py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/logo-tackia.jpg"
            alt="Tackia logo with colorful sombrero"
            className="h-8 w-auto rounded-sm"
          />
          <span className="sr-only">Tackia — Vancouver</span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#menu" className="hover:text-primary transition">Menu</a>
          <a href="#findus" className="hover:text-primary transition">Find Us</a>
          <a href="#businesscard" className="hover:text-primary transition">Business Card</a>
          <a href="#catering" className="hover:text-primary transition">Catering</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
          <a
            href="https://www.instagram.com/tac.kia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
            aria-label="Tackia Instagram"
          >
            📸 Instagram
          </a>
        </nav>
        <a href="#menu" className="btn-primary">Order / Menu</a>
      </div>
    </header>
  );
}
