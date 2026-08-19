import React from 'react';

export default function MobileActionBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-[#fff8ef]/95 px-3 pb-[calc(.6rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_35px_rgba(0,0,0,.12)] backdrop-blur md:hidden" aria-label="Quick actions">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2 text-center text-xs font-black">
        <a href="/menu" className="rounded-full bg-white px-3 py-3 shadow-sm">Menu</a>
        <a href="/locations" className="rounded-full bg-white px-3 py-3 shadow-sm">Find Us</a>
        <a href="/catering" className="rounded-full bg-[#171512] px-3 py-3 text-white shadow-sm">Book Truck</a>
      </div>
    </nav>
  );
}
