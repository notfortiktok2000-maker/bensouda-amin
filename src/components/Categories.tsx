import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FadeUp } from './ui/FadeUp';

const cats = [
  { title: "Motos", emoji: "🏍️", desc: "Adventure, Touring, Sport" },
  { title: "Scooters", emoji: "🛵", desc: "Urbains & Pratiques" },
  { title: "Quads", emoji: "🏎️", desc: "Loisir & Tout-terrain" },
];

export const Categories = () => {
  return (
    <section className="py-24 bg-brand-black border-t border-brand-border" id="categories">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cats.map((c, i) => (
            <FadeUp key={c.title} delay={i * 0.1}>
              <a href="#stock" className="block bg-brand-card border border-brand-border p-6 text-center transition-all hover:border-brand-red group card-hover h-full flex flex-col justify-center">
                <div className="text-4xl mb-3 grayscale group-hover:grayscale-0 transition-all">{c.emoji}</div>
                <h3 className="font-heading text-xl font-bold uppercase text-white group-hover:text-brand-red transition-colors mb-2">{c.title}</h3>
                <p className="text-brand-muted text-xs uppercase tracking-widest">{c.desc}</p>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
