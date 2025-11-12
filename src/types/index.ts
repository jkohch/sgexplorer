export type TravelType = 'leisure' | 'business' | 'adventure' | 'cultural' | 'culinary' | 'shopping';
export type Duration = '1-2' | '3-4' | '5-7' | '7+';
export type Budget = 'budget' | 'moderate' | 'luxury';
export type TravelGroup = 'solo' | 'couple' | 'family' | 'group';
export type TourStyle = 'guided' | 'free-easy' | 'mixed';

export interface TravelPreferences {
  travelType: TravelType[];
  duration: Duration;
  budget: Budget;
  travelGroup: TravelGroup;
  tourStyle: TourStyle;
  interests: string[];
  specialRequirements: string;
}

export interface Suggestion {
  id: string;
  title: string;
  description: string;
  popularity: number;
  tips: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  details: {
    location: string;
    openingHours: string;
    entryFee: string;
    duration: string;
    bestTime: string;
    accessibility: string;
    highlights: string[];
  };
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  matchScore: number;
  suggestions: Suggestion[];
  attractions: Attraction[];
  detailedInfo: {
    location: string;
    openingHours: string;
    bestTimeToVisit: string;
    averageDuration: string;
    priceRange: string;
  };
}

export interface Activity {
  time: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  tips: string;
  icon: string;
  bookingUrl?: string;
}

export interface DayItinerary {
  day: number;
  theme: string;
  morning: Activity;
  afternoon: Activity;
  night: Activity;
}
