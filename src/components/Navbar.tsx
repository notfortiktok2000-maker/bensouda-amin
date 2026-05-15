import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Stock Motos', href: '#stock' },
    { name: 'Scooters', href: '#stock' },
    { name: 'Quads', href: '#stock' },
    { name: 'Pièces & Accessoires', href: '#pieces' },
    { name: 'Réservation', href: '#reservation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-border h-16' : 'bg-transparent h-20'}`}>
      <div className="w-full h-full px-4 lg:px-8 flex justify-between items-center">
        <a href="#accueil" className="flex-shrink-0"><Logo /></a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 font-sans font-bold text-xs uppercase tracking-widest">
          {links.map(l => (
            <a key={l.name} href={l.href} className="nav-link text-brand-muted transition-colors">
              {l.name}
            </a>
          ))}
          <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="bg-brand-red text-white px-5 py-2 rounded-sm font-bold text-xs tracking-tighter hover:bg-brand-red-bright transition-all ml-4 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            📲 WHATSAPP
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-card border-b border-brand-border py-4 px-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.name} href={l.href} onClick={() => setMobileMenu(false)} className="text-lg font-heading uppercase text-white hover:text-brand-red border-b border-brand-border/50 pb-2">
              {l.name}
            </a>
          ))}
          <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-brand-red text-white font-bold font-heading uppercase py-3 rounded-sm mt-2">
            📲 WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
