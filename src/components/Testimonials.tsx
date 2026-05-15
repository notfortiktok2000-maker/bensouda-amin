import React from 'react';
import { FadeUp } from './ui/FadeUp';
import { Star } from 'lucide-react';

const reviews = [
  { name: "Youssef M.", text: "J'ai acheté mon Honda ADV ici, service top, prix honnête. Je recommande à tous mes amis à Tanger !" },
  { name: "Fatima Z.", text: "Scooter reçu en parfait état, livraison rapide à Casablanca. Très sérieux et professionnel." },
  { name: "Hamid K.", text: "Meilleur concessionnaire de Tanger. Omar connaît ses motos, il conseille vraiment et prend le temps." },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-dark border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 text-center slash-heading">Ils nous font confiance</h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-brand-card p-8 border border-brand-border hover:border-brand-red transition-all duration-300 card-hover relative h-full">
                <div className="text-6xl text-brand-red opacity-20 absolute top-4 right-6 font-heading">"</div>
                <div className="flex gap-1 text-brand-red mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">"{r.text}"</p>
                <div className="font-heading font-bold uppercase tracking-wider text-white mt-auto pt-4 border-t border-brand-border/50">
                  {r.name}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
