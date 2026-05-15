import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface ProductPageProps {
  vehicle: {
    id: number;
    name: string;
    brand: string;
    category: string;
    year: number;
    cc: number;
    price: string;
    status: string;
    images: string[];
  } | null;
  onClose: () => void;
  onReserve: () => void;
}

export const ProductPage = ({ vehicle, onClose, onReserve }: ProductPageProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Scroll lock & keyboard nav & Meta tags
  useEffect(() => {
    if (vehicle) {
      document.body.style.overflow = 'hidden';
      
      const originalTitle = document.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      const originalDescription = metaDescription?.getAttribute('content') || '';

      document.title = `${vehicle.brand} ${vehicle.name} ${vehicle.year} — Moto Omar Boutique Tanger`;
      metaDescription?.setAttribute('content', `Achetez ${vehicle.brand} ${vehicle.name} ${vehicle.year} à Tanger. ${vehicle.cc}cc, ${vehicle.price} MAD. ${vehicle.status}. Réservation en ligne — Moto Omar Boutique.`);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        document.title = originalTitle;
        if (metaDescription) {
          metaDescription.setAttribute('content', originalDescription);
        }
      };
    }
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  const images = vehicle.images || [];

  const nextImage = () => {
    if (images.length <= 1) return;
    setActiveImage((i) => (i + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length <= 1) return;
    setActiveImage((i) => (i - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const delta = touchStart - touchEnd;
    if (delta > 50) nextImage();
    if (delta < -50) prevImage();
    setTouchStart(null);
  };

  const getMarketingPitch = (category: string) => {
    if (category.toUpperCase() === 'MOTOS') return "Dominez chaque route avec une machine taillée pour l'aventure. Performances, fiabilité et style — tout ce qu'un vrai rider recherche.";
    if (category.toUpperCase() === 'SCOOTERS') return "La liberté urbaine à portée de main. Économique, agile et élégant — le compagnon idéal pour Tanger et au-delà.";
    if (category.toUpperCase() === 'QUADS') return "La puissance brute pour conquérir tous les terrains. Sensations garanties, qualité certifiée.";
    return "";
  };

  const whatsappLink = `https://wa.me/212600000000?text=Bonjour, je suis intéressé par: ${encodeURIComponent(vehicle.brand + ' ' + vehicle.name)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 z-50 bg-[#0D0D0D] overflow-y-auto"
      style={{
         backgroundImage: 'repeating-linear-gradient(45deg, rgba(204, 0, 0, 0.03) 0px, rgba(204, 0, 0, 0.03) 1px, transparent 1px, transparent 10px)'
      }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#0D0D0D]/90 mix-blend-multiply pointer-events-none" />
        
        {/* Top Border */}
        <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#CC0000] z-50"></div>

        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="fixed top-4 right-4 z-50 bg-black/50 backdrop-blur-md p-2 rounded-full text-white hover:text-[#CC0000] transition-colors border border-white/10 shadow-xl"
        >
          <X size={24} />
        </button>

        <div 
          className="min-h-screen relative z-10 flex flex-col pb-24 lg:pb-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main Layout Area */}
          <div className="flex-1 flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto py-12 px-4 lg:px-12 gap-12 lg:gap-24 relative">
            
            {/* Watermark */}
            <div className="hidden lg:block absolute right-0 top-1/4 select-none pointer-events-none text-white opacity-[0.03] text-[8rem] font-heading font-black pr-12 overflow-hidden whitespace-nowrap z-0 max-w-full">
              {vehicle.category.toUpperCase()}
            </div>

            {/* Left Column - Gallery */}
            <div className="w-full lg:w-[55%] flex flex-col z-10 relative">
              {/* Badges */}
              <div className="flex justify-between items-center mb-6 z-20 relative">
                 <div className="bg-[#CC0000] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  {vehicle.category}
                </div>
                 <div className={`text-[10px] font-bold px-3 py-1 uppercase tracking-widest ${vehicle.status === 'En Stock' ? 'bg-[#4CAF50] text-[#0D0D0D]' : 'bg-orange-500 text-[#0D0D0D]'}`}>
                  {vehicle.status}
                </div>
              </div>

              {/* Main Image */}
              <div 
                className="w-full bg-[#111] relative border border-white/10 group aspect-[16/10] overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                   {images.length > 0 ? (
                      <motion.img 
                        key={activeImage}
                        src={images[activeImage]} 
                        alt={`${vehicle.name} view ${activeImage + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                   ) : (
                     <motion.div 
                        key="placeholder"
                        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#0D0D0D]"
                     >
                       <span className="text-8xl opacity-30 grayscale">{vehicle.category === "Motos" ? "🏍️" : vehicle.category === "Scooters" ? "🛵" : "🏎️"}</span>
                     </motion.div>
                   )}
                </AnimatePresence>

                {/* Arrows */}
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur hover:bg-[#CC0000] text-white rounded-full opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all z-20"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur hover:bg-[#CC0000] text-white rounded-full opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all z-20"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                 <div className="flex gap-4 mt-4 overflow-x-auto pb-4 snap-x hide-scrollbar">
                    {images.map((img, idx) => (
                       <button
                         key={idx}
                         onClick={() => setActiveImage(idx)}
                         className={`relative flex-shrink-0 w-24 h-16 border-2 transition-all snap-start ${activeImage === idx ? 'border-[#CC0000] opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
                       >
                         <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                       </button>
                    ))}
                 </div>
              )}
            </div>

            {/* Right Column - Info */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center z-10 pt-4 lg:pt-8">
               <div className="mb-2 text-[#CC0000] text-[11px] font-bold uppercase tracking-[0.2em]">{vehicle.category} · TANGER</div>
               <div className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-heading">{vehicle.brand}</div>
               <h1 className="text-white font-heading font-black text-[clamp(2rem,5vw,3.5rem)] uppercase leading-none mb-6 relative">
                 {vehicle.name}
               </h1>
               
               <div className="h-[1px] w-full bg-[#CC0000] opacity-50 mb-8" />

               <div className="mb-10">
                 <div className="text-[#CC0000] font-heading font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight mb-1 leading-none">
                    {vehicle.price} <span className="text-2xl">MAD</span>
                 </div>
                 <div className="text-gray-500 text-sm flex items-center gap-3">
                   Prix TTC · Livraison disponible Maroc
                 </div>
               </div>

               {/* Specs */}
               <div className="flex flex-col gap-0 mb-10 border-l-4 border-[#CC0000] pl-6 bg-white/5 py-4">
                  <div className="group flex justify-between items-center py-2 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#777]">Année</span>
                    <span className="text-[14px] text-white font-bold">{vehicle.year}</span>
                  </div>
                  <div className="group flex justify-between items-center py-2 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#777]">Cylindrée</span>
                    <span className="text-[14px] text-white font-bold">{vehicle.cc}cc</span>
                  </div>
                  <div className="group flex justify-between items-center py-2 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#777]">Catégorie</span>
                    <span className="text-[14px] text-white font-bold">{vehicle.category}</span>
                  </div>
                  <div className="group flex justify-between items-center py-2 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#777]">Disponibilité</span>
                    <span className="text-[14px] text-white font-bold flex items-center gap-2">
                       {vehicle.status === 'En Stock' ? <span className="w-2 h-2 rounded-full bg-green-500" /> : <span className="w-2 h-2 rounded-full bg-orange-500" />}
                       {vehicle.status}
                    </span>
                  </div>
               </div>

               {/* Marketing Pitch */}
               <div className="mb-10 text-[#aaa] text-[14px] leading-[1.7]">
                 <p>{getMarketingPitch(vehicle.category)}</p>
               </div>

               {/* Desktop CTAs */}
               <div className="hidden lg:flex flex-col gap-4">
                  <button 
                    onClick={() => { onClose(); onReserve(); }}
                    className="w-full bg-[#CC0000] hover:bg-[#aa0000] text-white font-heading font-bold uppercase h-[56px] flex items-center justify-center tracking-widest text-sm rounded-[2px] transition-colors"
                  >
                    Réserver ce véhicule →
                  </button>
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full border border-[#CC0000] hover:bg-[#CC0000] text-[#CC0000] hover:text-white font-heading font-bold uppercase h-[56px] flex items-center justify-center gap-2 tracking-widest text-sm rounded-[2px] transition-colors"
                  >
                    <MessageCircle size={18} /> Contacter sur WhatsApp
                  </a>
               </div>
            </div>
          </div>
          <div className="block lg:hidden flex-1" /> {/* Spacer for bottom bar mobile */}
        </div>
        
        {/* Reservation Strip (Bottom) */}
        <div 
           className="bg-[#161616] border-t border-white/10 w-full py-4 px-4 lg:px-12 fixed bottom-0 left-0 right-0 z-50 flex flex-col lg:flex-row items-center justify-between gap-4"
           onClick={(e) => e.stopPropagation()}
        >
           <div className="flex-1 w-full text-center lg:text-left">
              <div className="text-white font-heading font-bold uppercase flex items-center justify-center lg:justify-start gap-2 text-sm lg:text-base">
                 <span>🔒</span> Réservez avec seulement 2 000 MAD d'acompte
              </div>
              <div className="text-[#777] text-xs lg:text-sm">
                 Votre véhicule est bloqué pendant 7 jours
              </div>
           </div>
           
           <div className="flex w-full lg:w-auto gap-4 lg:hidden">
              <button 
                  onClick={() => { onClose(); onReserve(); }}
                  className="flex-1 bg-[#CC0000] hover:bg-[#aa0000] text-white font-heading font-bold uppercase h-[48px] flex items-center justify-center tracking-widest text-xs rounded-[2px] transition-colors"
               >
                  Réserver →
               </button>
               <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-[48px] flex items-center justify-center border border-[#CC0000] text-[#CC0000] hover:bg-[#CC0000] hover:text-white rounded-[2px] transition-colors"
               >
                  <MessageCircle size={18} />
               </a>
           </div>

           <div className="hidden lg:flex">
              <button 
                  onClick={() => { onClose(); onReserve(); }}
                  className="px-8 bg-[#CC0000] hover:bg-[#aa0000] text-white font-heading font-bold uppercase h-[48px] flex items-center justify-center tracking-widest text-sm rounded-[2px] transition-colors"
               >
                  Réserver maintenant →
               </button>
           </div>
        </div>
      </motion.div>
  );
};
