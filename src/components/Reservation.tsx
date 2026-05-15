import React, { useState } from 'react';
import { FadeUp } from './ui/FadeUp';
import { STOCK } from '../data';
import { CheckCircle2, Bike, DollarSign, MapPin } from 'lucide-react';

export const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <section id="reservation" className="py-24 bg-[#141414] border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 slash-heading">Réservez Votre Moto</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Processus simple, rapide et transparent.</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="flex flex-col gap-10">
            {[
              { num: 1, title: "Choisissez votre modèle", desc: "Parcourez notre stock et sélectionnez le véhicule de vos rêves.", icon: <Bike /> },
              { num: 2, title: "Versez un acompte de 2 000 MAD", desc: "Sécurisez votre réservation. Le solde est à payer à la livraison.", icon: <DollarSign /> },
              { num: 3, title: "Récupérez votre véhicule", desc: "En boutique à Tanger ou livraison partout au Maroc.", icon: <MapPin /> },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.15}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-brand-red/10 border border-brand-red text-brand-red flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-red/20 animate-pulse"></div>
                    <span className="font-heading font-bold text-2xl relative z-10">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold uppercase text-white mb-2">{step.title}</h3>
                    <p className="text-brand-muted">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Form */}
          <FadeUp delay={0.3}>
            <div className="bg-brand-card border border-brand-border p-8 relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[#4CAF50] mb-6 bg-[#4CAF50]/10 p-4 rounded-none">
                    <CheckCircle2 size={64} />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 uppercase">Demande envoyée !</h3>
                  <p className="text-brand-muted uppercase tracking-widest text-xs">On vous contacte sous 24h via WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-brand-muted text-xs font-bold uppercase tracking-wider mb-2">Nom complet *</label>
                    <input required type="text" className="w-full bg-brand-dark border border-brand-border text-white px-4 py-3 rounded-none focus:outline-none focus:border-brand-red transition-colors" placeholder="Omar Moto" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-muted text-xs font-bold uppercase tracking-wider mb-2">Téléphone (WhatsApp) *</label>
                      <input required type="tel" className="w-full bg-brand-dark border border-brand-border text-white px-4 py-3 rounded-none focus:outline-none focus:border-brand-red transition-colors" placeholder="+212 6..." />
                    </div>
                    <div>
                      <label className="block text-brand-muted text-xs font-bold uppercase tracking-wider mb-2">Ville *</label>
                      <input required type="text" className="w-full bg-brand-dark border border-brand-border text-white px-4 py-3 rounded-none focus:outline-none focus:border-brand-red transition-colors" placeholder="Tanger" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-brand-muted text-xs font-bold uppercase tracking-wider mb-2">Modèle souhaité *</label>
                    <select required className="w-full bg-brand-dark border border-brand-border text-white px-4 py-3 rounded-none focus:outline-none focus:border-brand-red transition-colors appearance-none">
                      <option value="">Sélectionnez un modèle</option>
                      {STOCK.map(s => <option key={s.id} value={s.name}>{s.name} - {s.price} MAD</option>)}
                      <option value="Autre">Autre / Sur Commande</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-brand-muted text-xs font-bold uppercase tracking-wider mb-2">Date souhaitée</label>
                    <input type="date" className="w-full bg-brand-dark border border-brand-border text-brand-muted px-4 py-3 rounded-none focus:outline-none focus:border-brand-red transition-colors css-date-icon-fix" />
                  </div>
                  <div>
                    <label className="block text-brand-muted text-xs font-bold uppercase tracking-wider mb-2">Message</label>
                    <textarea rows={3} className="w-full bg-brand-dark border border-brand-border text-white px-4 py-3 rounded-none focus:outline-none focus:border-brand-red transition-colors resize-none" placeholder="Une question ?"></textarea>
                  </div>
                  <div className="mt-2 text-center">
                    <button type="submit" className="w-full block bg-brand-red hover:bg-brand-red-bright text-white font-heading font-bold uppercase tracking-[0.15em] py-4 rounded-none transition-colors">
                      Envoyer la demande
                    </button>
                    <p className="inline-block mt-4 text-[10px] text-brand-muted uppercase tracking-widest border-b border-brand-border pb-1">
                      Acompte de 2 000 MAD pour confirmer. Solde à la livraison.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
