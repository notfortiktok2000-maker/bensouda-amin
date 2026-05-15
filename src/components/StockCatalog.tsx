import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STOCK } from '../data';
import { FadeUp } from './ui/FadeUp';
import { ProductPage } from './ProductPage';

export const StockCatalog = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  const tabs = ['ALL', 'MOTOS', 'SCOOTERS', 'QUADS'];
  const filteredStock = filter === 'ALL' ? STOCK : STOCK.filter(s => s.category.toUpperCase() === filter);

  return (
    <section id="stock" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 slash-heading">Notre Stock Disponible</h2>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-brand-border">
            {tabs.map(t => (
              <button 
                key={t} 
                onClick={() => setFilter(t)}
                className={`px-6 py-2 tracking-widest font-heading text-sm uppercase rounded-[3px] transition-all ${filter === t ? 'bg-brand-red text-white font-bold' : 'bg-transparent text-brand-muted hover:text-white border-transparent'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredStock.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id} 
                className="bg-brand-card border border-brand-border p-5 relative overflow-hidden group mb-6 hover:border-brand-red transition-all duration-300 card-hover"
              >
                {/* Image Placeholder */}
                <div className="absolute top-3 left-3 bg-brand-red text-[10px] font-bold px-2 py-1 uppercase z-10 shadow-md">
                  {item.category}
                </div>
                <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-1 uppercase z-10 ${item.status === 'En Stock' ? 'bg-[#4CAF50] text-[#0D0D0D]' : 'bg-orange-500 text-[#0D0D0D]'}`}>
                  {item.status}
                </div>
                <div className="w-full h-48 relative bg-gradient-to-br from-[#2a2a2a] to-[#0D0D0D] flex items-center justify-center mb-4 border border-brand-border/30 overflow-hidden">
                  {item.images && item.images.length > 0 ? (
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  ) : (
                    <span className="text-6xl filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">{item.category === "Motos" ? "🏍️" : item.category === "Scooters" ? "🛵" : "🏎️"}</span>
                  )}
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-2xl mb-1 uppercase text-white">{item.brand} {item.name}</h3>
                <p className="text-xs text-gray-400 mb-4 font-sans uppercase tracking-widest">{item.cc}cc | {item.year}</p>
                
                <div className="flex justify-between items-end mt-4 pt-4 border-t border-brand-border/50">
                  <div className="font-heading text-3xl text-brand-red">{item.price} <span className="text-sm">MAD</span></div>
                  <div className="flex gap-2">
                    <button onClick={() => setSelectedVehicle(item)} className="bg-brand-border hover:bg-brand-muted text-white text-[10px] font-black px-4 py-3 uppercase tracking-widest transition-colors">
                      Détails
                    </button>
                    <button onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white hover:bg-brand-red hover:text-white text-brand-black text-[10px] font-black px-4 py-3 uppercase tracking-widest transition-colors">
                      Réserver
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedVehicle && (
          <ProductPage 
            vehicle={selectedVehicle} 
            onClose={() => setSelectedVehicle(null)} 
            onReserve={() => {
              setSelectedVehicle(null);
              document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
