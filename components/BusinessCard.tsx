'use client';
import React, { useEffect, useState } from 'react';

type Biz = {
  tagline: string;
  phone: string;
  email: string;
  instagram?: string;
  whatsapp?: string;
  qrImage?: string;
};

export default function BusinessCard() {
  const [biz, setBiz] = useState<Biz | null>(null);

  useEffect(() => {
    fetch('/business.json', { cache: 'no-store' })
      .then(r => r.json())
      .then(setBiz)
      .catch(() => setBiz(null));
  }, []);

  if (!biz) return null;

  const telHref = `tel:${biz.phone.replace(/\s+/g, '')}`;

  return (
    <section id="businesscard" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Info Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold">Business Card</h2>
            <p className="mt-3 text-neutral-300">{biz.tagline}</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              <a href={telHref} className="rounded-lg bg-brand text-black px-4 py-3 font-semibold text-center">
                📱 Call: {biz.phone}
              </a>
              <a href={`mailto:${biz.email}`} className="rounded-lg border border-white/20 px-4 py-3 font-semibold text-center hover:bg-white/10">
                ✉️ Email: {biz.email}
              </a>
              {biz.instagram && (
                <a href={biz.instagram} target="_blank" className="rounded-lg border border-white/20 px-4 py-3 font-semibold text-center hover:bg-white/10">
                  📸 Instagram
                </a>
              )}
              {biz.whatsapp && (
                <a href={biz.whatsapp} target="_blank" className="rounded-lg border border-white/20 px-4 py-3 font-semibold text-center hover:bg-white/10">
                  🟢 WhatsApp
                </a>
              )}
              <a href="/tackia.vcf" download className="rounded-lg border border-white/20 px-4 py-3 font-semibold text-center hover:bg-white/10">
                📇 Download vCard
              </a>
              <a href="#catering" className="rounded-lg border border-white/20 px-4 py-3 font-semibold text-center hover:bg-white/10">
                🎉 Book Catering
              </a>
            </div>
          </div>

          {/* QR */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex items-center justify-center">
            {biz.qrImage ? (
              <img
                src={biz.qrImage}
                alt="Tackia QR code (scan to view our links)"
                className="w-[320px] h-[320px] object-contain"
              />
            ) : (
              <div className="text-neutral-400 text-sm">
                Add a QR image at <code>/images/qr-tackia.png</code>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
