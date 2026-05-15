/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { StockCatalog } from './components/StockCatalog';
import { Pieces } from './components/Pieces';
import { Reservation } from './components/Reservation';
import { WhyOmar } from './components/WhyOmar';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-brand-text bg-brand-black min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <StockCatalog />
      <Pieces />
      <Reservation />
      <WhyOmar />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
