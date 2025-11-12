import React, { useState } from 'react';
import Hero from './components/Hero';
import PreferenceForm from './components/PreferenceForm';
import Results from './components/Results';
import { TravelPreferences } from './types';

function App() {
  const [step, setStep] = useState<'hero' | 'form' | 'results'>('hero');
  const [preferences, setPreferences] = useState<TravelPreferences | null>(null);

  const handleStart = () => {
    setStep('form');
  };

  const handleSubmitPreferences = (prefs: TravelPreferences) => {
    setPreferences(prefs);
    setStep('results');
  };

  const handleReset = () => {
    setStep('hero');
    setPreferences(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 grid-bg opacity-30"></div>
      
      {/* Scan line effect */}
      <div className="scan-line fixed inset-0 pointer-events-none"></div>
      
      {/* Gradient orbs */}
      <div className="fixed top-20 left-20 w-96 h-96 bg-[#FF71CE] rounded-full blur-[120px] opacity-20 float-animation"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-[#01CDFE] rounded-full blur-[120px] opacity-20 float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-[#05FFA1] rounded-full blur-[120px] opacity-20 float-animation" style={{ animationDelay: '4s' }}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {step === 'hero' && <Hero onStart={handleStart} />}
        {step === 'form' && <PreferenceForm onSubmit={handleSubmitPreferences} />}
        {step === 'results' && preferences && <Results preferences={preferences} onReset={handleReset} />}
      </div>
    </div>
  );
}

export default App;
