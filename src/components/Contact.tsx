import React from 'react';
import { FadeUp } from './ui/FadeUp';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-black border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 slash-heading">Nous Trouver</h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeUp delay={0.1}>
            <div className="bg-brand-card border border-brand-border p-8 md:p-10 flex flex-col gap-8 h-full">
              <div className="flex items-start gap-4">
                <div className="text-brand-red mt-1"><MapPin size={24} /></div>
                <div>
                  <h4 className="text-brand-muted text-xs uppercase tracking-widest font-bold mb-1">Adresse</h4>
                  <p className="text-white text-lg">Tanger Centre, Maroc</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-brand-red mt-1"><Phone size={24} /></div>
                <div>
                  <h4 className="text-brand-muted text-xs uppercase tracking-widest font-bold mb-1">Téléphone / WhatsApp</h4>
                  <p className="text-white text-lg mb-4">+212 600 00 00 00</p>
                  <a href="https://wa.me/212600000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold font-heading uppercase text-sm px-6 py-3 hover:bg-[#1EBE5C] transition-colors rounded-none">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Écrire sur WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-brand-red mt-1"><Mail size={24} /></div>
                <div>
                  <h4 className="text-brand-muted text-xs uppercase tracking-widest font-bold mb-1">Email</h4>
                  <p className="text-white text-lg">contact@motoomarboutique.ma</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-brand-red mt-1"><Clock size={24} /></div>
                <div>
                  <h4 className="text-brand-muted text-xs uppercase tracking-widest font-bold mb-1">Horaires</h4>
                  <p className="text-white">Lun–Sam : 9h00 – 19h00</p>
                  <p className="text-white">Dimanche : 10h00 – 14h00</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Map */}
          <FadeUp delay={0.2} className="h-[400px] lg:h-auto min-h-[400px]">
            <div className="w-full h-full bg-brand-dark border border-brand-border overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103504.60637156934!2d-5.898713919865611!3d35.76325992013898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTangier%2C%20Morocco!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-brand-border"></div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
