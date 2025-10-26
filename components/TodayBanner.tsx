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

  return (
    <div className="bg-brand text-black">
      <div className="container py-2 text-center text-sm font-semibold">
        {data.link ? <a href={data.link} className="underline">{data.text}</a> : data.text}
      </div>
    </div>
  );
}
