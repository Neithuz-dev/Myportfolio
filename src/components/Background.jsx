import React from 'react';

export default function Background() {
  return (
    <>
      {/* Animated Mesh Background */}
      <div className="mesh-background">
        <div className="mesh-gradient mesh-gradient-1"></div>
        <div className="mesh-gradient mesh-gradient-2"></div>
        <div className="mesh-gradient mesh-gradient-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Technical Grid & Dotted Pattern Overlay */}
      <div className="bg-grid-pattern" aria-hidden="true"></div>
    </>
  );
}
