import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Tackia</h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Serving Vancouver with authentic Mexican street food from our mobile kitchen. We bring the flavours of Mexico to your neighbourhood and special events with fresh, delicious food made with love.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {emoji:'🌮', title:'Authentic Mexican Food', text:'Fresh street food with traditional recipes and the finest ingredients.'},
            {emoji:'🚚', title:'Mobile Food Truck', text:'Find us around the North Shore or book us for private events.'},
            {emoji:'🎉', title:'Event Catering', text:'Weddings, corporate events, festivals, and private parties.'},
          ].map((c,i)=>(
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary text-black flex items-center justify-center text-2xl">{c.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-neutral-300">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
