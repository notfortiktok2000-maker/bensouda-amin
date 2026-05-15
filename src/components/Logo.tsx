import React from 'react';

export const Logo = () => (
  <svg width="160" height="40" viewBox="0 0 200 50" className="fill-white block">
    <path d="M5 20 L40 20 M10 28 L45 28 M15 36 L50 36" stroke="#CC0000" strokeWidth="4" strokeLinecap="round"/>
    <text x="55" y="32" className="font-heading" style={{ fontSize: '32px', fontWeight: 'bold', fill: '#FFFFFF' }}>omar</text>
    <text x="55" y="46" className="font-heading" style={{ fontSize: '10px', letterSpacing: '4px', fill: '#CC0000', textTransform: 'uppercase' }}>BOUTIQUE</text>
  </svg>
);
