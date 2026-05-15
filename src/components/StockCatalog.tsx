import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STOCK } from '../data';
import { FadeUp } from './ui/FadeUp';
import { X } from 'lucide-react';

const Modal = ({ vehicle, onClose }: { vehicle: any, onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!vehicle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-brand-card border-t-2 border-brand-red w-full max-w-lg rounded-[3px] p-8 relative shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-brand-muted hover:text-white transition-colors" aria-label="Close">
          <X size={28} />
        </button>
        <div className="text-6xl text-center mb-6">{vehicle.category === "Motos" ? "🏍️" : vehicle.category === "Scooters" ? "🛵" : "🏎️"}</div>
        <h3 className="text-3xl font-heading font-black tracking-tight text-white mb-1 uppercase text-center">{vehicle.name}</h3>
        <p className="text-brand-red text-2xl font-bold font-heading tracking-widest text-center mb-8 border-b border-brand-border pb-6">{vehicle.price} MAD</p>
        
        <table className="w-full text-left border-collapse mb-8">
          <tbody>
            <tr className="border-b border-brand-border/50">
              <th className="py-3 text-brand-muted font-normal text-sm tracking-wider uppercase">Catégorie</th>
              <td className="py-3 text-white font-bold">{vehicle.category}</td>
            </tr>
            <tr className="border-b border-brand-border/50">
              <th className="py-3 text-brand-muted font-normal text-sm tracking-wider uppercase">Année</th>
              <td className="py-3 text-white font-bold">{vehicle.year}</td>
            </tr>
            <tr className="border-b border-brand-border/50">
              <th className="py-3 text-brand-muted font-normal text-sm tracking-wider uppercase">Cylindrée</th>
              <td className="py-3 text-white font-bold">{vehicle.cc} cc</td>
            </tr>
            <tr>
              <th className="py-3 text-brand-muted font-normal text-sm tracking-wider uppercase">Disponibilité</th>
              <td className="py-3">
                <span className={`text-xs font-bold px-3 py-1 uppercase rounded-sm border ${vehicle.status === 'En Stock' ? 'bg-green-900/20 text-green-400 border-green-800/50' : 'bg-orange-900/20 text-orange-400 border-orange-800/50'}`}>
                  {vehicle.status}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className="flex gap-4">
           <button onClick={() => { onClose(); document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full bg-brand-red text-white font-bold py-4 text-center font-heading uppercase tracking-[0.2em] rounded-[3px] hover:bg-brand-red-bright transition-colors shadow-lg">
             Réserver maintenant
           </button>
        </div>
      </motion.div>
    </div>
  );
}

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
                <div className="w-full h-48 bg-gradient-to-br from-[#2a2a2a] to-[#0D0D0D] flex items-center justify-center mb-4 border border-brand-border/30">
                  <span className="text-6xl filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">{item.category === "Motos" ? "🏍️" : item.category === "Scooters" ? "🛵" : "🏎️"}</span>
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
        {selectedVehicle && <Modal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />}
      </AnimatePresence>
    </section>
  );
}
