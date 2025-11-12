import React, { useState } from 'react';
import { TravelPreferences, TravelType, Duration, Budget, TravelGroup, TourStyle } from '../types';
import { ChevronRight, ChevronLeft, Sparkles, AlertCircle } from 'lucide-react';

interface PreferenceFormProps {
  onSubmit: (preferences: TravelPreferences) => void;
}

const PreferenceForm: React.FC<PreferenceFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuggestion, setShowSuggestion] = useState(false);
  
  const [formData, setFormData] = useState<TravelPreferences>({
    travelType: [],
    duration: '3-4',
    budget: 'moderate',
    travelGroup: 'solo',
    tourStyle: 'free-easy',
    interests: [],
    specialRequirements: ''
  });

  const travelTypes: { value: TravelType; label: string; icon: string }[] = [
    { value: 'leisure', label: 'Leisure & Relaxation', icon: '🌴' },
    { value: 'business', label: 'Business & Networking', icon: '💼' },
    { value: 'adventure', label: 'Adventure & Thrills', icon: '🎢' },
    { value: 'cultural', label: 'Cultural Exploration', icon: '🏛️' },
    { value: 'culinary', label: 'Culinary Journey', icon: '🍜' },
    { value: 'shopping', label: 'Shopping Paradise', icon: '🛍️' }
  ];

  const interests = [
    'Architecture', 'Street Food', 'Nightlife', 'Museums', 'Nature Parks',
    'Beaches', 'Photography', 'Local Markets', 'Fine Dining', 'Temples',
    'Modern Art', 'History', 'Wildlife', 'Rooftop Bars', 'Gardens'
  ];

  const handleTravelTypeToggle = (type: TravelType) => {
    setFormData(prev => ({
      ...prev,
      travelType: prev.travelType.includes(type)
        ? prev.travelType.filter(t => t !== type)
        : [...prev.travelType, type]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNext = () => {
    if (currentStep === 1 && formData.travelType.length === 0) {
      setShowSuggestion(true);
      return;
    }
    if (currentStep === 4 && formData.interests.length === 0) {
      setShowSuggestion(true);
      return;
    }
    setShowSuggestion(false);
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setShowSuggestion(false);
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const applySuggestion = () => {
    if (currentStep === 1) {
      setFormData(prev => ({ ...prev, travelType: ['leisure', 'cultural', 'culinary'] }));
    } else if (currentStep === 4) {
      setFormData(prev => ({ ...prev, interests: ['Street Food', 'Gardens', 'Architecture', 'Local Markets'] }));
    }
    setShowSuggestion(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 ${
                  currentStep >= step 
                    ? 'border-[#05FFA1] bg-[#05FFA1] text-black neon-border' 
                    : 'border-gray-600 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 5 && (
                  <div className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    currentStep > step ? 'bg-[#05FFA1]' : 'bg-gray-700'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-[#01CDFE] text-sm tracking-wider">
            STEP {currentStep} OF 5
          </p>
        </div>

        {/* Form content */}
        <div className="retro-card p-8 md:p-12 vhs-effect">
          {/* Step 1: Travel Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold vaporwave-text-gradient mb-2">
                What brings you to Singapore?
              </h2>
              <p className="text-gray-400 mb-8">Select all that apply</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {travelTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => handleTravelTypeToggle(type.value)}
                    className={`p-6 border-2 transition-all duration-300 text-left ${
                      formData.travelType.includes(type.value)
                        ? 'border-[#FF71CE] bg-[#FF71CE]/10 neon-border'
                        : 'border-gray-700 hover:border-[#01CDFE]'
                    }`}
                  >
                    <div className="text-4xl mb-3">{type.icon}</div>
                    <div className="text-lg font-bold text-[#05FFA1]">{type.label}</div>
                  </button>
                ))}
              </div>

              {showSuggestion && (
                <div className="mt-6 p-4 border-2 border-[#B967FF] bg-[#B967FF]/10 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#B967FF] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#B967FF] font-bold mb-2">Need help deciding?</p>
                    <p className="text-sm text-gray-300 mb-3">
                      We recommend starting with Leisure, Cultural, and Culinary experiences for first-time visitors!
                    </p>
                    <button
                      onClick={applySuggestion}
                      className="px-4 py-2 bg-[#B967FF] text-black font-bold text-sm hover:bg-[#FF71CE] transition-colors"
                    >
                      Apply Suggestion
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Duration & Budget */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold vaporwave-text-gradient mb-2">
                  How long will you stay?
                </h2>
                <p className="text-gray-400 mb-6">Choose your duration</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(['1-2', '3-4', '5-7', '7+'] as Duration[]).map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setFormData(prev => ({ ...prev, duration: dur }))}
                      className={`p-6 border-2 transition-all duration-300 ${
                        formData.duration === dur
                          ? 'border-[#FF71CE] bg-[#FF71CE]/10 neon-border'
                          : 'border-gray-700 hover:border-[#01CDFE]'
                      }`}
                    >
                      <div className="text-2xl font-bold text-[#05FFA1]">{dur}</div>
                      <div className="text-sm text-gray-400 mt-1">days</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold vaporwave-text-gradient mb-2">
                  What's your budget style?
                </h2>
                <p className="text-gray-400 mb-6">Select your comfort level</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(['budget', 'moderate', 'luxury'] as Budget[]).map((bud) => (
                    <button
                      key={bud}
                      onClick={() => setFormData(prev => ({ ...prev, budget: bud }))}
                      className={`p-6 border-2 transition-all duration-300 ${
                        formData.budget === bud
                          ? 'border-[#FF71CE] bg-[#FF71CE]/10 neon-border'
                          : 'border-gray-700 hover:border-[#01CDFE]'
                      }`}
                    >
                      <div className="text-xl font-bold text-[#05FFA1] capitalize">{bud}</div>
                      <div className="text-sm text-gray-400 mt-2">
                        {bud === 'budget' && '$50-100/day'}
                        {bud === 'moderate' && '$100-250/day'}
                        {bud === 'luxury' && '$250+/day'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Travel Group */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold vaporwave-text-gradient mb-2">
                Who's traveling with you?
              </h2>
              <p className="text-gray-400 mb-8">Select your travel companions</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {([
                  { value: 'solo', label: 'Solo Traveler', icon: '🧳' },
                  { value: 'couple', label: 'Couple', icon: '💑' },
                  { value: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
                  { value: 'group', label: 'Group', icon: '👥' }
                ] as { value: TravelGroup; label: string; icon: string }[]).map((group) => (
                  <button
                    key={group.value}
                    onClick={() => setFormData(prev => ({ ...prev, travelGroup: group.value }))}
                    className={`p-6 border-2 transition-all duration-300 text-left ${
                      formData.travelGroup === group.value
                        ? 'border-[#FF71CE] bg-[#FF71CE]/10 neon-border'
                        : 'border-gray-700 hover:border-[#01CDFE]'
                    }`}
                  >
                    <div className="text-4xl mb-3">{group.icon}</div>
                    <div className="text-lg font-bold text-[#05FFA1]">{group.label}</div>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h2 className="text-3xl md:text-4xl font-bold vaporwave-text-gradient mb-2">
                  Tour preference?
                </h2>
                <p className="text-gray-400 mb-6">How do you like to explore?</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {([
                    { value: 'guided', label: 'Guided Tours', desc: 'Expert-led experiences' },
                    { value: 'free-easy', label: 'Free & Easy', desc: 'Explore at your pace' },
                    { value: 'mixed', label: 'Mixed', desc: 'Best of both worlds' }
                  ] as { value: TourStyle; label: string; desc: string }[]).map((style) => (
                    <button
                      key={style.value}
                      onClick={() => setFormData(prev => ({ ...prev, tourStyle: style.value }))}
                      className={`p-6 border-2 transition-all duration-300 ${
                        formData.tourStyle === style.value
                          ? 'border-[#FF71CE] bg-[#FF71CE]/10 neon-border'
                          : 'border-gray-700 hover:border-[#01CDFE]'
                      }`}
                    >
                      <div className="text-lg font-bold text-[#05FFA1] mb-2">{style.label}</div>
                      <div className="text-sm text-gray-400">{style.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Interests */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold vaporwave-text-gradient mb-2">
                What interests you most?
              </h2>
              <p className="text-gray-400 mb-8">Select your favorite activities</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`p-4 border-2 transition-all duration-300 text-sm ${
                      formData.interests.includes(interest)
                        ? 'border-[#FF71CE] bg-[#FF71CE]/10 text-[#FF71CE] neon-border'
                        : 'border-gray-700 text-gray-400 hover:border-[#01CDFE] hover:text-[#01CDFE]'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>

              {showSuggestion && (
                <div className="mt-6 p-4 border-2 border-[#B967FF] bg-[#B967FF]/10 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#B967FF] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[#B967FF] font-bold mb-2">Not sure what to choose?</p>
                    <p className="text-sm text-gray-300 mb-3">
                      Try these popular interests: Street Food, Gardens, Architecture, and Local Markets!
                    </p>
                    <button
                      onClick={applySuggestion}
                      className="px-4 py-2 bg-[#B967FF] text-black font-bold text-sm hover:bg-[#FF71CE] transition-colors"
                    >
                      Apply Suggestion
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 5: Special Requirements */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold vaporwave-text-gradient mb-2">
                Any special requirements?
              </h2>
              <p className="text-gray-400 mb-8">Tell us about dietary restrictions, accessibility needs, or other preferences</p>
              
              <textarea
                value={formData.specialRequirements}
                onChange={(e) => setFormData(prev => ({ ...prev, specialRequirements: e.target.value }))}
                placeholder="E.g., vegetarian options, wheelchair accessible venues, halal food..."
                className="w-full h-40 bg-black/50 border-2 border-gray-700 focus:border-[#01CDFE] p-4 text-white placeholder-gray-500 outline-none transition-colors"
              />

              <div className="mt-8 p-6 border-2 border-[#05FFA1] bg-[#05FFA1]/5">
                <h3 className="text-xl font-bold text-[#05FFA1] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Your Journey Summary
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><span className="text-[#FF71CE] font-bold">Travel Types:</span> {formData.travelType.join(', ') || 'Not specified'}</p>
                  <p><span className="text-[#FF71CE] font-bold">Duration:</span> {formData.duration} days</p>
                  <p><span className="text-[#FF71CE] font-bold">Budget:</span> {formData.budget}</p>
                  <p><span className="text-[#FF71CE] font-bold">Group:</span> {formData.travelGroup}</p>
                  <p><span className="text-[#FF71CE] font-bold">Style:</span> {formData.tourStyle}</p>
                  <p><span className="text-[#FF71CE] font-bold">Interests:</span> {formData.interests.join(', ') || 'Not specified'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-12">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 border-2 font-bold transition-all ${
                currentStep === 1
                  ? 'border-gray-700 text-gray-700 cursor-not-allowed'
                  : 'border-[#01CDFE] text-[#01CDFE] hover:bg-[#01CDFE] hover:text-black'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              BACK
            </button>

            {currentStep < 5 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 border-2 border-[#05FFA1] text-[#05FFA1] font-bold hover:bg-[#05FFA1] hover:text-black transition-all"
              >
                NEXT
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-8 py-3 vaporwave-gradient text-black font-bold hover:opacity-90 transition-all neon-border"
              >
                <Sparkles className="w-5 h-5" />
                DISCOVER SINGAPORE
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferenceForm;
