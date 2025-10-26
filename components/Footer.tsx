import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950">
      <div className="container py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-black text-brand">Tackia</div>
          <p className="mt-2 text-sm text-neutral-300">North Vancouver, BC</p>
          <p className="mt-4 text-sm text-neutral-400">© {new Date().getFullYear()} Tackia. All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>📧 <a className="underline decoration-brand/40 underline-offset-4" href="mailto:catering@tackia.ca">catering@tackia.ca</a></li>
            <li>📱 (604) 555-TACKIA</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li><a href="#menu" className="hover:text-brand">Menu</a></li>
            <li><a href="#findus" className="hover:text-brand">Find Us</a></li>
            <li><a href="#catering" className="hover:text-brand">Catering</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
