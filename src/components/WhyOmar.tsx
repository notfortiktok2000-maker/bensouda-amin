import React from 'react';
import { FadeUp } from './ui/FadeUp';
import { Shield, DollarSign, Wrench, Truck } from 'lucide-react';

const reasons = [
  { icon: <Shield size={40} />, title: "Marques Certifiées", desc: "Distributeur officiel: Honda, Yamaha, CFMoto, Kymco." },
  { icon: <DollarSign size={40} />, title: "Prix Imbattables", desc: "Le meilleur rapport qualité/prix garanti sur Tanger et région." },
  { icon: <Wrench size={40} />, title: "SAV & Entretien", desc: "Atelier dédié, équipe professionnelle pour votre tranquillité." },
  { icon: <Truck size={40} />, title: "Livraison Maroc", desc: "Où que vous soyez, on livre votre moto devant votre porte." },
];

export const WhyOmar = () => {
  return (
    <section className="py-24 bg-brand-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 slash-heading">Pourquoi Choisir Moto Omar ?</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <FadeUp key={r.title} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center p-6 gap-4 border border-brand-border/30 hover:border-brand-red transition-all duration-300 card-hover bg-brand-card">
                <div className="w-20 h-20 bg-brand-black border border-brand-red flex items-center justify-center text-brand-red mb-2 red-glow">
                  {r.icon}
                </div>
                <h3 className="text-xl font-heading font-bold uppercase text-white tracking-wide">{r.title}</h3>
                <p className="text-brand-muted leading-relaxed text-sm">{r.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
