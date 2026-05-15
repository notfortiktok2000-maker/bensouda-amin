import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';
import { FadeUp } from './ui/FadeUp';

const Counter = ({ end, suffix, label }: { end: number, suffix: string, label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-5xl font-heading text-brand-red font-bold tracking-tight">{count}{suffix}</div>
      <div className="text-xs md:text-sm text-brand-muted uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Heavy Red Slash Background */}
      <div className="diagonal-slash"></div>
      
      <main className="relative z-10 w-full h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-12 max-w-none">
        
        {/* Left Side Content */}
        <section className="col-span-1 md:col-span-12 lg:col-span-8 flex flex-col justify-center px-6 lg:pl-16 lg:pr-8 h-full pt-12 lg:pt-0">
          <div className="mb-4 border-l-4 border-brand-red pl-4">
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm md:text-base">Tanger's #1 Shop</span>
          </div>
          
          <FadeUp>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-[0.85] mb-6 font-black uppercase text-white drop-shadow-2xl">
              MOTO OMAR<br/><span className="text-brand-red">BOUTIQUE</span>
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="font-sans text-lg md:text-xl text-brand-muted max-w-xl leading-relaxed mb-8">
              Stock disponible, prix transparents, réservation en ligne à Tanger et livraison dans tout le Maroc. Entrez dans la course.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.3}>
            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#stock" className="bg-brand-red text-white px-8 py-4 font-heading text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all border border-brand-red shadow-[0_0_15px_rgba(204,0,0,0.3)]">
                Voir le Stock
              </a>
              <a href="#reservation" className="border border-brand-red text-brand-red px-8 py-4 font-heading text-xl uppercase tracking-wider hover:bg-brand-red hover:text-white transition-all backdrop-blur-sm">
                Réserver une Moto
              </a>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-brand-dark/20 backdrop-blur-md p-6 border-t md:border-none md:border-l md:pl-4 border-brand-border md:-mx-4 mt-auto">
              <div className="border-l border-brand-border pl-4">
                <Counter end={500} suffix="+" label="Clients Satisfaits" />
              </div>
              <div className="border-l border-brand-border pl-4">
                <Counter end={200} suffix="+" label="Motos Vendues" />
              </div>
              <div className="border-l border-brand-border pl-4">
                <Counter end={10} suffix="+" label="Marques" />
              </div>
              <div className="border-l border-brand-border pl-4">
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-heading text-brand-red font-bold tracking-tight">MAROC</div>
                  <div className="text-[10px] text-brand-muted uppercase tracking-[0.2em] mt-1">Livraison</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>
        
        {/* We keep the original layout space here and let it flow into the standard container logic for remaining sections */}
      </main>
    </section>
  );
}
