import React from 'react';
import { Palmtree, Sparkles, Plane } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full text-center space-y-8">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 vaporwave-gradient blur-2xl opacity-50 animate-pulse"></div>
            <Palmtree className="w-24 h-24 relative z-10 text-[#05FFA1] drop-shadow-[0_0_20px_#05FFA1]" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-black cinzel neon-glow mb-4">
          DISCOVER
        </h1>
        <h2 className="text-5xl md:text-7xl font-black vaporwave-text-gradient mb-8">
          SINGAPORE
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#01CDFE] max-w-2xl mx-auto leading-relaxed tracking-wide">
          Your personalized journey through the Lion City awaits. 
          <span className="block mt-2 text-[#FF71CE]">
            Experience the future of travel discovery.
          </span>
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <div className="retro-card p-6 pulse-glow">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-[#FF71CE]" />
            <h3 className="text-lg font-bold text-[#05FFA1] mb-2">PERSONALIZED</h3>
            <p className="text-sm text-gray-300">Tailored recommendations based on your unique preferences</p>
          </div>
          
          <div className="retro-card p-6 pulse-glow" style={{ animationDelay: '0.5s' }}>
            <Plane className="w-12 h-12 mx-auto mb-4 text-[#01CDFE]" />
            <h3 className="text-lg font-bold text-[#05FFA1] mb-2">CURATED</h3>
            <p className="text-sm text-gray-300">Handpicked experiences from local experts</p>
          </div>
          
          <div className="retro-card p-6 pulse-glow" style={{ animationDelay: '1s' }}>
            <Palmtree className="w-12 h-12 mx-auto mb-4 text-[#05FFA1]" />
            <h3 className="text-lg font-bold text-[#05FFA1] mb-2">IMMERSIVE</h3>
            <p className="text-sm text-gray-300">Dive deep into Singapore's vibrant culture</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <button
            onClick={onStart}
            className="group relative px-12 py-5 text-2xl font-bold bg-transparent border-4 border-[#FF71CE] text-[#FF71CE] hover:text-black transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              START YOUR JOURNEY
              <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 vaporwave-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Decorative text */}
        <p className="text-xs text-gray-500 mt-8 tracking-[0.3em]">
          ◆ POWERED BY VAPORWAVE AESTHETICS ◆
        </p>
      </div>
    </div>
  );
};

export default Hero;
