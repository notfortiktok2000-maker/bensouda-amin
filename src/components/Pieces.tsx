import React from 'react';
import { FadeUp } from './ui/FadeUp';
import { Shield, Wrench, Settings, Lightbulb, CircleDot, BatteryCharging } from 'lucide-react';

const pieces = [
  { title: "Casques & Protection", icon: <Shield size={32} />, desc: "Intégraux, modulables et jet." },
  { title: "Pièces Détachées", icon: <Settings size={32} />, desc: "Filtres, plaquettes, courroies." },
  { title: "Équipement Rider", icon: <Wrench size={32} />, desc: "Vestes, gants et bottes." },
  { title: "Éclairage & LED", icon: <Lightbulb size={32} />, desc: "Optiques et clignotants." },
  { title: "Pneus & Jantes", icon: <CircleDot size={32} />, desc: "Grip et performance max." },
  { title: "Batteries & Électrique", icon: <BatteryCharging size={32} />, desc: "Fiabilité toutes saisons." },
];

export const Pieces = () => {
  return (
    <section id="pieces" className="py-24 bg-brand-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 slash-heading">Pièces, Accessoires & Équipement</h2>
        </FadeUp>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pieces.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.1}>
              <div className="bg-brand-card border border-brand-border p-8 group card-hover h-full flex flex-col transition-all duration-300">
                <div className="text-brand-red mb-6 drop-shadow-[0_0_8px_rgba(204,0,0,0.5)] group-hover:scale-110 transition-transform origin-left">{p.icon}</div>
                <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide mb-3">{p.title}</h3>
                <p className="text-brand-muted text-sm uppercase tracking-widest">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        
        <FadeUp delay={0.4}>
          <div className="text-center">
            <a href="#contact" className="inline-block border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-heading font-bold uppercase tracking-[0.1em] px-8 py-4 transition-all">
              Contactez-nous pour disponibilité et prix →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
