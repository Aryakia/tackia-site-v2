'use client';

import React, { useEffect, useState } from 'react';

type TodayData = { text: string; link?: string };

export default function TodayBanner() {
  const [data, setData] = useState<TodayData | null>(null);

  useEffect(() => {
    fetch('/today.json', { cache: 'no-store' })
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data) return null;

  const content = <><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#b8e34b]" />{data.text}</>;

  return (
    <div className="border-b border-white/10 bg-[#111] text-white">
      <div className="container py-2.5 text-center text-xs font-semibold tracking-wide text-white/70 sm:text-sm">
        {data.link ? <a href={data.link} className="hover:text-white">{content}</a> : content}
      </div>
    </div>
  );
}
