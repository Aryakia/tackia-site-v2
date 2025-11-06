import React from 'react';

const LOCATIONS = [
  {
    title: "Lonsdale Quay Market",
    date: "Every Friday",
    time: "11:00 AM - 8:00 PM",
    location: "123 Carrie Cates Ct, North Vancouver",
    description: "Find us at the iconic Lonsdale Quay with a full menu of fresh Mexican street food and stunning harbor views.",
    price: "Regular Menu"
  },
  {
    title: "Shipyards Night Market",
    date: "Saturdays (Summer)",
    time: "5:00 PM - 10:00 PM",
    location: "125 Victory Ship Way, North Vancouver",
    description: "Join us at North Vancouver's premier night market for tacos, nachos, and live entertainment under the lights.",
    price: "Regular Menu"
  },
  {
    title: "Private Event Catering",
    date: "Book Anytime",
    time: "Flexible Hours",
    location: "Your Event Location",
    description: "Book Tackia for weddings, corporate events, parties, and festivals. We bring our full kitchen to serve your guests fresh Mexican food.",
    price: "Custom Quote"
  }
];

export default function Events() {
  return (
    <section id="findus" className="py-20 border-y border-white/10 bg-white/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">Find Us & Book Catering</h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Follow our food truck around Vancouver or book us for your next event.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCATIONS.map((l, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-lg">
              <div className="text-lg font-semibold text-secondary">{l.title}</div>
              <div className="text-sm text-neutral-400 mt-1">{l.date} • {l.time}</div>
              <div className="text-sm text-neutral-400">📍 {l.location}</div>
              <p className="text-neutral-300 mt-4">{l.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-yellow">{l.price}</span>
                <a href="#catering" className="text-sm underline">Get Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
