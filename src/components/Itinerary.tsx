import React, { useState } from 'react';
import { TravelPreferences, DayItinerary } from '../types';
import { Sunrise, Sun, Moon, MapPin, Clock, Lightbulb, ChevronDown, ChevronUp, Calendar, ExternalLink } from 'lucide-react';

interface ItineraryProps {
  preferences: TravelPreferences;
}

const Itinerary: React.FC<ItineraryProps> = ({ preferences }) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const generateItinerary = (): DayItinerary[] => {
    const durationMap: Record<string, number> = {
      '1-2': 2,
      '3-4': 4,
      '5-7': 5,
      '7+': 7
    };

    const days = durationMap[preferences.duration] || 4;

    const itineraries: DayItinerary[] = [
      {
        day: 1,
        theme: 'Iconic Singapore',
        morning: {
          time: '9:00 AM - 12:00 PM',
          title: 'Gardens by the Bay',
          description: 'Start your Singapore adventure at the futuristic Gardens by the Bay. Explore the Cloud Forest and Flower Dome, marvel at the Supertree Grove.',
          location: '18 Marina Gardens Dr',
          duration: '3 hours',
          tips: 'Arrive early to beat the crowds. Book tickets online for faster entry.',
          icon: '🌳',
          bookingUrl: 'https://viator.tpk.mx/Xc1Z4LAB'
        },
        afternoon: {
          time: '1:00 PM - 5:00 PM',
          title: 'Marina Bay Sands & ArtScience Museum',
          description: 'Visit the iconic Marina Bay Sands SkyPark for panoramic views. Explore the lotus-shaped ArtScience Museum with its innovative exhibitions.',
          location: '10 Bayfront Ave',
          duration: '4 hours',
          tips: 'The SkyPark observation deck offers stunning 360° views. Check museum exhibitions in advance.',
          icon: '🏙️'
        },
        night: {
          time: '7:00 PM - 10:00 PM',
          title: 'Marina Bay Light Show & Clarke Quay',
          description: 'Watch the spectacular Spectra light and water show at Marina Bay. Then head to Clarke Quay for riverside dining and nightlife.',
          location: 'Marina Bay Waterfront',
          duration: '3 hours',
          tips: 'Spectra shows at 8pm and 9pm. Clarke Quay has diverse dining options from budget to fine dining.',
          icon: '✨'
        }
      },
      {
        day: 2,
        theme: 'Cultural Heritage',
        morning: {
          time: '9:00 AM - 12:00 PM',
          title: 'Chinatown Heritage Centre',
          description: 'Immerse yourself in Singapore\'s Chinese heritage. Explore authentic shophouses, temples, and the vibrant streets of Chinatown.',
          location: '48 Pagoda St',
          duration: '3 hours',
          tips: 'Visit the Buddha Tooth Relic Temple. Try traditional breakfast at a local kopitiam.',
          icon: '🏮'
        },
        afternoon: {
          time: '1:00 PM - 5:00 PM',
          title: 'Little India & Arab Street',
          description: 'Experience the colorful streets of Little India with its temples and spice shops. Then explore the historic Arab Quarter and Sultan Mosque.',
          location: 'Little India & Kampong Glam',
          duration: '4 hours',
          tips: 'Dress modestly when visiting religious sites. Try authentic Indian and Middle Eastern cuisine.',
          icon: '🕌'
        },
        night: {
          time: '7:00 PM - 10:00 PM',
          title: 'Hawker Center Food Tour',
          description: 'Experience authentic Singaporean street food at Maxwell Food Centre or Lau Pa Sat. Try chicken rice, laksa, satay, and more!',
          location: 'Maxwell Food Centre',
          duration: '3 hours',
          tips: 'Come hungry! Each stall specializes in specific dishes. Cash is preferred at most stalls.',
          icon: '🍜'
        }
      },
      {
        day: 3,
        theme: 'Nature & Adventure',
        morning: {
          time: '9:00 AM - 12:00 PM',
          title: 'Singapore Botanic Gardens',
          description: 'Explore the UNESCO World Heritage Site. Visit the National Orchid Garden, rainforest trails, and serene lakes.',
          location: '1 Cluny Rd',
          duration: '3 hours',
          tips: 'Entry to gardens is free, but Orchid Garden requires a ticket. Bring water and sunscreen.',
          icon: '🌺'
        },
        afternoon: {
          time: '1:00 PM - 6:00 PM',
          title: 'Sentosa Island Adventure',
          description: 'Take the cable car to Sentosa. Visit S.E.A. Aquarium, relax at Siloso Beach, or enjoy thrilling activities at Mega Adventure Park.',
          location: 'Sentosa Island',
          duration: '5 hours',
          tips: 'Get a Sentosa Fun Pass for multiple attractions. Beach clubs offer day passes with facilities.',
          icon: '🏖️'
        },
        night: {
          time: '7:00 PM - 10:00 PM',
          title: 'Wings of Time Show',
          description: 'End your day with the spectacular Wings of Time outdoor night show featuring water, laser, and fire effects.',
          location: 'Siloso Beach, Sentosa',
          duration: '3 hours',
          tips: 'Book tickets in advance. Arrive 30 minutes early for good seats. Show starts at 7:40pm.',
          icon: '🎆'
        }
      },
      {
        day: 4,
        theme: 'Modern Singapore',
        morning: {
          time: '9:00 AM - 12:00 PM',
          title: 'Orchard Road Shopping',
          description: 'Explore Singapore\'s premier shopping district. Visit ION Orchard, Takashimaya, and luxury boutiques along the boulevard.',
          location: 'Orchard Road',
          duration: '3 hours',
          tips: 'Many malls open at 10am. Look for Great Singapore Sale if visiting June-July.',
          icon: '🛍️'
        },
        afternoon: {
          time: '1:00 PM - 5:00 PM',
          title: 'National Gallery & Civic District',
          description: 'Visit Southeast Asia\'s largest visual arts museum. Explore the historic Civic District including City Hall and Supreme Court.',
          location: '1 St Andrew\'s Rd',
          duration: '4 hours',
          tips: 'Free admission for permanent collections. The rooftop offers great city views.',
          icon: '🎨'
        },
        night: {
          time: '7:00 PM - 11:00 PM',
          title: 'Rooftop Bars & Night Views',
          description: 'Experience Singapore\'s skyline from rooftop bars like 1-Altitude, CÉ LA VI, or Lantern Bar. Enjoy cocktails with panoramic views.',
          location: 'Various CBD locations',
          duration: '4 hours',
          tips: 'Dress code applies (smart casual). Book reservations for popular venues. Happy hour deals available.',
          icon: '🍸'
        }
      },
      {
        day: 5,
        theme: 'Hidden Gems',
        morning: {
          time: '9:00 AM - 12:00 PM',
          title: 'Tiong Bahru & Local Markets',
          description: 'Explore Singapore\'s hippest neighborhood with art deco architecture, indie cafes, and the historic Tiong Bahru Market.',
          location: 'Tiong Bahru',
          duration: '3 hours',
          tips: 'Try traditional breakfast at the market. Browse vintage shops and bookstores.',
          icon: '☕'
        },
        afternoon: {
          time: '1:00 PM - 5:00 PM',
          title: 'Pulau Ubin Island Escape',
          description: 'Take a bumboat to this rustic island. Cycle through kampong villages, mangroves, and Chek Jawa wetlands.',
          location: 'Pulau Ubin',
          duration: '4 hours',
          tips: 'Rent a bicycle at the island. Bring water and snacks. Last boat back is around 7pm.',
          icon: '🚴'
        },
        night: {
          time: '7:00 PM - 10:00 PM',
          title: 'East Coast Park Seafood',
          description: 'Enjoy fresh seafood at East Coast Lagoon Food Village. Take a sunset stroll along the beach promenade.',
          location: 'East Coast Park',
          duration: '3 hours',
          tips: 'Try chili crab and black pepper crab. Arrive before sunset for the best atmosphere.',
          icon: '🦀'
        }
      },
      {
        day: 6,
        theme: 'Entertainment & Thrills',
        morning: {
          time: '9:00 AM - 1:00 PM',
          title: 'Universal Studios Singapore',
          description: 'Experience thrilling rides and shows at Southeast Asia\'s only Universal Studios theme park.',
          location: 'Sentosa Island',
          duration: '4 hours',
          tips: 'Arrive at opening for shortest queues. Get Express Pass to skip lines on popular rides.',
          icon: '🎢'
        },
        afternoon: {
          time: '2:00 PM - 6:00 PM',
          title: 'Singapore Zoo or River Wonders',
          description: 'Visit the world-renowned Singapore Zoo with open-concept habitats, or explore River Wonders with its giant pandas.',
          location: '80 Mandai Lake Rd',
          duration: '4 hours',
          tips: 'Catch animal feeding times. Tram service available for easier navigation.',
          icon: '🦁'
        },
        night: {
          time: '7:00 PM - 10:00 PM',
          title: 'Night Safari',
          description: 'Experience the world\'s first nocturnal wildlife park. See over 2,500 animals in their natural nighttime habitat.',
          location: '80 Mandai Lake Rd',
          duration: '3 hours',
          tips: 'Book tickets online. Take the tram tour first, then explore walking trails.',
          icon: '🦉'
        }
      },
      {
        day: 7,
        theme: 'Relaxation & Farewell',
        morning: {
          time: '9:00 AM - 12:00 PM',
          title: 'Southern Ridges Walk',
          description: 'Hike the scenic Southern Ridges trail connecting parks via elevated walkways. Enjoy forest canopy views and Henderson Waves.',
          location: 'Mount Faber to Kent Ridge',
          duration: '3 hours',
          tips: 'Start early to avoid heat. Wear comfortable shoes. Bring water and sunscreen.',
          icon: '🥾'
        },
        afternoon: {
          time: '1:00 PM - 5:00 PM',
          title: 'Spa & Wellness',
          description: 'Relax with a traditional Asian spa treatment. Try a Peranakan-inspired spa or luxury hotel spa experience.',
          location: 'Various locations',
          duration: '4 hours',
          tips: 'Book in advance. Popular spas include Willow Stream, Auriga, and The Spa at Mandarin Oriental.',
          icon: '💆'
        },
        night: {
          time: '7:00 PM - 10:00 PM',
          title: 'Farewell Dinner at Jewel Changi',
          description: 'End your trip at Jewel Changi Airport. See the Rain Vortex, shop for last-minute souvenirs, and enjoy a farewell dinner.',
          location: 'Jewel Changi Airport',
          duration: '3 hours',
          tips: 'Light show at Rain Vortex every hour. Many dining options from casual to fine dining.',
          icon: '💎'
        }
      }
    ];

    return itineraries.slice(0, days);
  };

  const itinerary = generateItinerary();

  const getTimeIcon = (period: 'morning' | 'afternoon' | 'night') => {
    switch (period) {
      case 'morning':
        return <Sunrise className="w-6 h-6" />;
      case 'afternoon':
        return <Sun className="w-6 h-6" />;
      case 'night':
        return <Moon className="w-6 h-6" />;
    }
  };

  const getTimeColor = (period: 'morning' | 'afternoon' | 'night') => {
    switch (period) {
      case 'morning':
        return 'text-[#05FFA1]';
      case 'afternoon':
        return 'text-[#01CDFE]';
      case 'night':
        return 'text-[#B967FF]';
    }
  };

  const getTimeBorder = (period: 'morning' | 'afternoon' | 'night') => {
    switch (period) {
      case 'morning':
        return 'border-[#05FFA1]';
      case 'afternoon':
        return 'border-[#01CDFE]';
      case 'night':
        return 'border-[#B967FF]';
    }
  };

  const renderActivity = (activity: any, period: 'morning' | 'afternoon' | 'night') => {
    return (
      <div className={`border-l-4 ${getTimeBorder(period)} pl-6 pb-8 last:pb-0`}>
        <div className="flex items-start gap-4 mb-4">
          <div className={`${getTimeColor(period)} flex-shrink-0`}>
            {getTimeIcon(period)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{activity.icon}</span>
              <div className="flex-1">
                <h4 className={`text-xl font-bold ${getTimeColor(period)}`}>
                  {activity.title}
                </h4>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {activity.time}
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-3">{activity.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF71CE] flex-shrink-0 mt-1" />
                <div>
                  <span className="text-gray-500">Location:</span>
                  <p className="text-gray-300">{activity.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#FF71CE] flex-shrink-0 mt-1" />
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <p className="text-gray-300">{activity.duration}</p>
                </div>
              </div>
            </div>

            {/* Booking Button */}
            {activity.bookingUrl && (
              <a
                href={activity.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 mb-3 border-2 border-[#05FFA1] bg-[#05FFA1]/10 text-[#05FFA1] font-bold hover:bg-[#05FFA1] hover:text-black transition-all group"
              >
                <span>BOOK TICKETS NOW</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
            
            <div className="mt-3 p-3 bg-[#FF71CE]/5 border border-[#FF71CE]/20">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-[#FF71CE] flex-shrink-0 mt-1" />
                <div>
                  <span className="text-[#FF71CE] font-bold text-sm">Pro Tip:</span>
                  <p className="text-gray-400 text-sm">{activity.tips}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-black vaporwave-text-gradient mb-3 flex items-center justify-center gap-3">
          <Calendar className="w-10 h-10" />
          YOUR ITINERARY
        </h2>
        <p className="text-[#01CDFE] text-lg">
          {itinerary.length} days of unforgettable experiences
        </p>
      </div>

      {itinerary.map((day) => (
        <div key={day.day} className="retro-card overflow-hidden">
          {/* Day Header */}
          <button
            onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
            className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full vaporwave-gradient flex items-center justify-center">
                <span className="text-2xl font-black text-black">{day.day}</span>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-[#FF71CE] mb-1">
                  Day {day.day}
                </h3>
                <p className="text-[#01CDFE] text-sm tracking-wider uppercase">
                  {day.theme}
                </p>
              </div>
            </div>
            <div className="text-[#05FFA1]">
              {expandedDay === day.day ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </div>
          </button>

          {/* Day Content */}
          {expandedDay === day.day && (
            <div className="p-6 pt-0 border-t-2 border-gray-800">
              <div className="mt-6">
                {renderActivity(day.morning, 'morning')}
                {renderActivity(day.afternoon, 'afternoon')}
                {renderActivity(day.night, 'night')}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Summary Card */}
      <div className="retro-card p-6 bg-gradient-to-br from-[#FF71CE]/10 via-[#01CDFE]/10 to-[#05FFA1]/10">
        <h3 className="text-2xl font-bold text-[#05FFA1] mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6" />
          Essential Travel Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="text-[#FF71CE] font-bold">• Transportation:</span> Get an EZ-Link card for MRT and buses
            </p>
            <p className="text-gray-300">
              <span className="text-[#FF71CE] font-bold">• Weather:</span> Tropical climate, bring umbrella and sunscreen
            </p>
            <p className="text-gray-300">
              <span className="text-[#FF71CE] font-bold">• Dress Code:</span> Smart casual for upscale venues, modest for temples
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="text-[#FF71CE] font-bold">• Booking:</span> Reserve popular attractions online in advance
            </p>
            <p className="text-gray-300">
              <span className="text-[#FF71CE] font-bold">• Food:</span> Hawker centers are cash-preferred, cards elsewhere
            </p>
            <p className="text-gray-300">
              <span className="text-[#FF71CE] font-bold">• Timing:</span> Start early to avoid crowds and heat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
