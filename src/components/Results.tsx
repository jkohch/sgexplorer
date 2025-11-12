import React, { useState } from 'react';
import { TravelPreferences, Destination } from '../types';
import { MapPin, Clock, DollarSign, Users, Star, ExternalLink, RefreshCw, Calendar, ChevronDown, ChevronUp, TrendingUp, Sparkles, Info, Accessibility } from 'lucide-react';
import Itinerary from './Itinerary';

interface ResultsProps {
  preferences: TravelPreferences;
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({ preferences, onReset }) => {
  const [activeTab, setActiveTab] = useState<'destinations' | 'itinerary'>('destinations');
  const [expandedDestination, setExpandedDestination] = useState<string | null>(null);
  const [selectedAttraction, setSelectedAttraction] = useState<string | null>(null);

  // Generate personalized destinations based on preferences
  const generateDestinations = (): Destination[] => {
    const allDestinations: Destination[] = [
      {
        id: '1',
        name: 'Gardens by the Bay',
        description: 'Futuristic garden featuring the iconic Supertree Grove, Cloud Forest, and Flower Dome. A must-visit architectural marvel.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
        category: 'Nature & Architecture',
        matchScore: 95,
        suggestions: [
          {
            id: '1-1',
            title: 'Visit the Supertree Grove at sunset',
            description: 'Experience the magical Garden Rhapsody light and sound show at 7:45 PM and 8:45 PM daily',
            popularity: 98,
            tips: 'Arrive 30 minutes early to secure a good viewing spot on the lawn'
          },
          {
            id: '1-2',
            title: 'Explore the Cloud Forest Dome',
            description: 'Walk through the world\'s tallest indoor waterfall and discover rare plants from tropical highlands',
            popularity: 95,
            tips: 'Start from the top and work your way down for the best experience'
          },
          {
            id: '1-3',
            title: 'Stroll through the Flower Dome',
            description: 'Marvel at exotic plants from Mediterranean and semi-arid regions in the world\'s largest glass greenhouse',
            popularity: 92,
            tips: 'Visit during seasonal flower displays for extra spectacular views'
          },
          {
            id: '1-4',
            title: 'Walk the OCBC Skyway',
            description: 'Take an elevated walkway 22 meters high connecting the Supertrees for panoramic views',
            popularity: 88,
            tips: 'Best visited during golden hour for stunning photography'
          }
        ],
        attractions: [
          {
            id: '1-a1',
            name: 'Cloud Forest',
            description: 'A stunning conservatory featuring the world\'s tallest indoor waterfall at 35 meters, surrounded by lush mountain vegetation and rare plants from tropical highlands around the world.',
            image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600',
            category: 'Conservatory',
            details: {
              location: 'Gardens by the Bay, 18 Marina Gardens Drive',
              openingHours: '9:00 AM - 9:00 PM daily',
              entryFee: 'S$28 (Adult), S$15 (Child 3-12 years)',
              duration: '1-1.5 hours',
              bestTime: 'Morning (9-11 AM) to avoid crowds',
              accessibility: 'Wheelchair accessible, elevators available',
              highlights: [
                'Cloud Walk - elevated walkway through the mist',
                'Lost World - featuring stalactites and stalagmites',
                'Crystal Mountain - 9-meter tall structure',
                'Secret Garden - interactive educational displays'
              ]
            }
          },
          {
            id: '1-a2',
            name: 'Flower Dome',
            description: 'The world\'s largest glass greenhouse housing exotic plants from Mediterranean and semi-arid regions, featuring seasonal floral displays and themed gardens.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
            category: 'Conservatory',
            details: {
              location: 'Gardens by the Bay, 18 Marina Gardens Drive',
              openingHours: '9:00 AM - 9:00 PM daily',
              entryFee: 'S$28 (Adult), S$15 (Child 3-12 years)',
              duration: '1-1.5 hours',
              bestTime: 'Late afternoon (4-6 PM) for softer lighting',
              accessibility: 'Fully wheelchair accessible',
              highlights: [
                'Baobabs and Bottle Trees collection',
                'Succulent Garden with over 400 species',
                'Olive Grove with 100-year-old trees',
                'Seasonal floral displays (changes quarterly)'
              ]
            }
          },
          {
            id: '1-a3',
            name: 'Supertree Observatory',
            description: 'Ascend to the top of the 50-meter tall Supertree for breathtaking 360-degree views of the Gardens and Marina Bay skyline.',
            image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600',
            category: 'Observation Deck',
            details: {
              location: 'Supertree Grove, Gardens by the Bay',
              openingHours: '9:00 AM - 9:00 PM daily',
              entryFee: 'S$14 (Adult), S$10 (Child 3-12 years)',
              duration: '30-45 minutes',
              bestTime: 'Sunset (6:30-7:30 PM) for spectacular views',
              accessibility: 'Elevator access available',
              highlights: [
                'Panoramic city and bay views',
                'Photo opportunities with Marina Bay Sands',
                'Garden Rhapsody viewing from above',
                'Outdoor observation deck'
              ]
            }
          }
        ],
        detailedInfo: {
          location: '18 Marina Gardens Drive',
          openingHours: '5:00 AM - 2:00 AM daily',
          bestTimeToVisit: 'Evening for light show',
          averageDuration: '3-4 hours',
          priceRange: 'S$28-53 (conservatories)'
        }
      },
      {
        id: '2',
        name: 'Marina Bay Sands',
        description: 'Iconic integrated resort with infinity pool, luxury shopping, fine dining, and breathtaking city views from the SkyPark.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800',
        category: 'Luxury & Entertainment',
        matchScore: 92,
        suggestions: [
          {
            id: '2-1',
            title: 'Visit the SkyPark Observation Deck',
            description: 'Enjoy 360-degree views of Singapore from 57 floors up, including the iconic infinity pool view',
            popularity: 96,
            tips: 'Book tickets online to skip the queue, best at sunset'
          },
          {
            id: '2-2',
            title: 'Shop at The Shoppes',
            description: 'Explore over 170 luxury boutiques and flagship stores in this premium shopping destination',
            popularity: 89,
            tips: 'Don\'t miss the indoor canal with sampan rides'
          },
          {
            id: '2-3',
            title: 'Dine at celebrity chef restaurants',
            description: 'Experience world-class dining at restaurants by Gordon Ramsay, Wolfgang Puck, and more',
            popularity: 91,
            tips: 'Make reservations weeks in advance for popular restaurants'
          },
          {
            id: '2-4',
            title: 'Watch the Spectra light show',
            description: 'Free nightly water and light show at the Event Plaza with stunning visual effects',
            popularity: 85,
            tips: 'Shows at 8 PM and 9 PM daily, arrive early for front-row spots'
          }
        ],
        attractions: [
          {
            id: '2-a1',
            name: 'SkyPark Observation Deck',
            description: 'Located 200 meters above ground on the 57th floor, offering unparalleled 360-degree views of Singapore\'s skyline, Marina Bay, and beyond.',
            image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600',
            category: 'Observation Deck',
            details: {
              location: 'Marina Bay Sands, Tower 3, Level 57',
              openingHours: '10:00 AM - 10:00 PM daily (last entry 9:30 PM)',
              entryFee: 'S$26 (Adult), S$20 (Child 2-12 years), S$23 (Senior 65+)',
              duration: '1-1.5 hours',
              bestTime: 'Sunset (6:30-7:30 PM) or night for city lights',
              accessibility: 'Wheelchair accessible via elevators',
              highlights: [
                'Panoramic views of Marina Bay and city skyline',
                'View of the iconic infinity pool from below',
                'Interactive digital displays about Singapore',
                'Photo opportunities with Gardens by the Bay'
              ]
            }
          },
          {
            id: '2-a2',
            name: 'ArtScience Museum',
            description: 'An iconic lotus-shaped museum featuring world-class exhibitions at the intersection of art, science, technology, and culture.',
            image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600',
            category: 'Museum',
            details: {
              location: 'Marina Bay Sands, 6 Bayfront Avenue',
              openingHours: '10:00 AM - 7:00 PM daily (last entry 6:00 PM)',
              entryFee: 'S$19-24 (varies by exhibition)',
              duration: '2-3 hours',
              bestTime: 'Weekday mornings (10 AM-12 PM) for fewer crowds',
              accessibility: 'Fully wheelchair accessible',
              highlights: [
                'Future World: immersive digital art installations',
                'Rotating international exhibitions',
                'Interactive technology experiences',
                'Unique lotus-inspired architecture'
              ]
            }
          },
          {
            id: '2-a3',
            name: 'The Shoppes at Marina Bay Sands',
            description: 'Luxury shopping destination with over 170 stores, featuring international brands, fine dining, and the iconic indoor canal with sampan rides.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
            category: 'Shopping Mall',
            details: {
              location: 'Marina Bay Sands, 2 Bayfront Avenue',
              openingHours: '10:30 AM - 11:00 PM daily (varies by store)',
              entryFee: 'Free entry (shopping costs vary)',
              duration: '2-4 hours',
              bestTime: 'Weekday afternoons (2-5 PM) for relaxed shopping',
              accessibility: 'Wheelchair accessible throughout',
              highlights: [
                'Luxury brands: Louis Vuitton, Chanel, Prada',
                'Sampan rides on indoor canal (S$10)',
                'Celebrity chef restaurants',
                'Digital Light Canvas - interactive art installation'
              ]
            }
          }
        ],
        detailedInfo: {
          location: '10 Bayfront Avenue',
          openingHours: '24/7 (varies by facility)',
          bestTimeToVisit: 'Sunset for SkyPark',
          averageDuration: '2-4 hours',
          priceRange: 'S$26 (SkyPark)'
        }
      },
      {
        id: '3',
        name: 'Chinatown Heritage Centre',
        description: 'Immerse yourself in Singapore\'s rich Chinese heritage through authentic shophouses and cultural exhibits.',
        image: 'https://images.unsplash.com/photo-1555217851-6141535bd771?w=800',
        category: 'Cultural',
        matchScore: 88,
        suggestions: [
          {
            id: '3-1',
            title: 'Tour the Heritage Centre Museum',
            description: 'Walk through recreated living quarters showing the harsh realities of early Chinese immigrants',
            popularity: 90,
            tips: 'Audio guide available in multiple languages for deeper understanding'
          },
          {
            id: '3-2',
            title: 'Visit Buddha Tooth Relic Temple',
            description: 'Explore this stunning 5-story Buddhist temple housing sacred relics and artifacts',
            popularity: 93,
            tips: 'Dress modestly, free admission but donations welcome'
          },
          {
            id: '3-3',
            title: 'Shop at Chinatown Street Market',
            description: 'Browse traditional Chinese goods, souvenirs, and handicrafts along Pagoda and Temple Streets',
            popularity: 87,
            tips: 'Bargaining is expected, aim for 30-40% off initial price'
          },
          {
            id: '3-4',
            title: 'Try traditional Chinese medicine',
            description: 'Experience authentic TCM consultation and herbal remedies at historic shops',
            popularity: 78,
            tips: 'Eu Yan Sang is a reputable chain for first-timers'
          }
        ],
        attractions: [
          {
            id: '3-a1',
            name: 'Buddha Tooth Relic Temple',
            description: 'A magnificent 5-story Tang dynasty-style Buddhist temple housing the sacred tooth relic of Buddha, featuring intricate architecture and extensive Buddhist art collection.',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600',
            category: 'Religious Site',
            details: {
              location: '288 South Bridge Road, Chinatown',
              openingHours: '7:00 AM - 7:00 PM daily',
              entryFee: 'Free (donations welcome)',
              duration: '1-1.5 hours',
              bestTime: 'Early morning (7-9 AM) for peaceful atmosphere',
              accessibility: 'Elevator available, modest dress required',
              highlights: [
                'Sacred Buddha Tooth Relic on 4th floor',
                'Hundred Dragons Hall with intricate carvings',
                'Buddhist Culture Museum',
                'Rooftop garden with prayer wheels'
              ]
            }
          },
          {
            id: '3-a2',
            name: 'Chinatown Heritage Centre',
            description: 'Step back in time through three restored shophouses showcasing the lives of early Chinese immigrants in Singapore during the 1950s.',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600',
            category: 'Museum',
            details: {
              location: '48 Pagoda Street, Chinatown',
              openingHours: '9:00 AM - 8:00 PM daily',
              entryFee: 'S$15 (Adult), S$10 (Child/Senior)',
              duration: '1-2 hours',
              bestTime: 'Morning (9-11 AM) for guided tours',
              accessibility: 'Limited accessibility due to historic building',
              highlights: [
                'Recreated living quarters of 1950s immigrants',
                'Tailor shop and traditional trades displays',
                'Audio guide in 8 languages',
                'Interactive exhibits on Chinese culture'
              ]
            }
          },
          {
            id: '3-a3',
            name: 'Sri Mariamman Temple',
            description: 'Singapore\'s oldest Hindu temple, built in 1827, featuring stunning Dravidian architecture and intricate gopuram tower with colorful deities.',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600',
            category: 'Religious Site',
            details: {
              location: '244 South Bridge Road, Chinatown',
              openingHours: '7:00 AM - 12:00 PM, 6:00 PM - 9:00 PM daily',
              entryFee: 'Free (S$3 for photography)',
              duration: '30-45 minutes',
              bestTime: 'Morning (7-9 AM) during prayer ceremonies',
              accessibility: 'Ground floor accessible, remove shoes required',
              highlights: [
                'Ornate gopuram with Hindu deities',
                'Annual Thimithi fire-walking festival',
                'Traditional Hindu prayer ceremonies',
                'Historic architecture dating to 1827'
              ]
            }
          }
        ],
        detailedInfo: {
          location: '48 Pagoda Street',
          openingHours: '9:00 AM - 8:00 PM',
          bestTimeToVisit: 'Morning to avoid crowds',
          averageDuration: '2-3 hours',
          priceRange: 'S$15 (museum entry)'
        }
      },
      {
        id: '4',
        name: 'Hawker Centers',
        description: 'Experience authentic Singaporean street food at Maxwell, Lau Pa Sat, or Tekka Centre. From chicken rice to laksa!',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
        category: 'Culinary',
        matchScore: 96,
        suggestions: [
          {
            id: '4-1',
            title: 'Try Hainanese Chicken Rice',
            description: 'Singapore\'s national dish - tender poached chicken with fragrant rice and chili sauce',
            popularity: 99,
            tips: 'Tian Tian at Maxwell is famous but expect long queues'
          },
          {
            id: '4-2',
            title: 'Sample Laksa',
            description: 'Spicy coconut curry noodle soup that\'s a perfect blend of Chinese and Malay flavors',
            popularity: 95,
            tips: 'Try both Katong and curry laksa to compare styles'
          },
          {
            id: '4-3',
            title: 'Enjoy Char Kway Teow',
            description: 'Stir-fried flat rice noodles with prawns, Chinese sausage, and bean sprouts',
            popularity: 94,
            tips: 'Order the version with extra "wok hei" (breath of wok) for best flavor'
          },
          {
            id: '4-4',
            title: 'Taste Satay',
            description: 'Grilled meat skewers with peanut sauce, a beloved Southeast Asian street food',
            popularity: 91,
            tips: 'Lau Pa Sat\'s Satay Street comes alive in the evening'
          }
        ],
        attractions: [
          {
            id: '4-a1',
            name: 'Maxwell Food Centre',
            description: 'Historic hawker center famous for Tian Tian Hainanese Chicken Rice, offering authentic local dishes in a bustling atmosphere.',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
            category: 'Hawker Center',
            details: {
              location: '1 Kadayanallur Street, Chinatown',
              openingHours: '8:00 AM - 10:00 PM (varies by stall)',
              entryFee: 'Free entry (food S$3-8 per dish)',
              duration: '1-1.5 hours',
              bestTime: 'Lunch (11 AM-1 PM) or dinner (6-8 PM)',
              accessibility: 'Ground level, wheelchair accessible',
              highlights: [
                'Tian Tian Hainanese Chicken Rice (Stall 10)',
                'China Street Fritters (carrot cake)',
                'Zhen Zhen Porridge',
                'Authentic local atmosphere'
              ]
            }
          },
          {
            id: '4-a2',
            name: 'Lau Pa Sat',
            description: 'Victorian-era market building turned hawker center, featuring Satay Street with outdoor BBQ grills and diverse local cuisine.',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
            category: 'Hawker Center',
            details: {
              location: '18 Raffles Quay, Downtown Core',
              openingHours: '24 hours (Satay Street: 7 PM - 3 AM)',
              entryFee: 'Free entry (food S$3-10 per dish)',
              duration: '1-2 hours',
              bestTime: 'Evening (7-10 PM) for Satay Street',
              accessibility: 'Fully accessible, outdoor seating available',
              highlights: [
                'Satay Street with 10+ satay stalls',
                'Historic octagonal architecture',
                'Wide variety of cuisines',
                'Central business district location'
              ]
            }
          },
          {
            id: '4-a3',
            name: 'Tekka Centre',
            description: 'Little India\'s premier hawker center offering authentic Indian, Malay, and Chinese cuisines alongside a vibrant wet market.',
            image: 'https://images.unsplash.com/photo-1585937421612-70e008356f33?w=600',
            category: 'Hawker Center',
            details: {
              location: '665 Buffalo Road, Little India',
              openingHours: '6:30 AM - 10:00 PM (varies by stall)',
              entryFee: 'Free entry (food S$3-8 per dish)',
              duration: '1-1.5 hours',
              bestTime: 'Lunch (12-2 PM) for fresh Indian food',
              accessibility: 'Elevator access, wheelchair friendly',
              highlights: [
                'Authentic Indian cuisine (biryani, roti prata)',
                'Fresh fish head curry',
                'Wet market on ground floor',
                'Cultural Little India experience'
              ]
            }
          }
        ],
        detailedInfo: {
          location: 'Multiple locations citywide',
          openingHours: 'Varies (typically 7 AM - 10 PM)',
          bestTimeToVisit: 'Lunch or dinner time',
          averageDuration: '1-2 hours',
          priceRange: 'S$3-8 per dish'
        }
      },
      {
        id: '5',
        name: 'Sentosa Island',
        description: 'Beach resort island with Universal Studios, S.E.A. Aquarium, beaches, and adventure activities for all ages.',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        category: 'Adventure & Leisure',
        matchScore: 90,
        suggestions: [
          {
            id: '5-1',
            title: 'Universal Studios Singapore',
            description: 'Southeast Asia\'s only Universal Studios theme park with 7 themed zones and 24 rides',
            popularity: 97,
            tips: 'Arrive at opening, do popular rides first, consider Express Pass'
          },
          {
            id: '5-2',
            title: 'S.E.A. Aquarium',
            description: 'One of the world\'s largest aquariums with over 100,000 marine animals',
            popularity: 92,
            tips: 'Visit during feeding times for the best experience'
          },
          {
            id: '5-3',
            title: 'Relax at Siloso Beach',
            description: 'Singapore\'s most popular beach with water sports, beach bars, and sunset views',
            popularity: 88,
            tips: 'Rent beach equipment from nearby shops, free beach access'
          },
          {
            id: '5-4',
            title: 'Wings of Time night show',
            description: 'Spectacular outdoor night show with water, laser, and fire effects',
            popularity: 86,
            tips: 'Book premium seats for best views, shows at 7:40 PM and 8:40 PM'
          }
        ],
        attractions: [
          {
            id: '5-a1',
            name: 'Universal Studios Singapore',
            description: 'Southeast Asia\'s first and only Universal Studios theme park featuring 7 themed zones with 24 rides and attractions based on blockbuster movies.',
            image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600',
            category: 'Theme Park',
            details: {
              location: '8 Sentosa Gateway, Resorts World Sentosa',
              openingHours: '12:00 PM - 7:00 PM (varies seasonally)',
              entryFee: 'S$81 (Adult), S$61 (Child 4-12 years)',
              duration: 'Full day (6-8 hours)',
              bestTime: 'Weekdays, arrive at opening for shorter queues',
              accessibility: 'Wheelchair accessible, rental available',
              highlights: [
                'Transformers: The Ride 3D',
                'Jurassic Park Rapids Adventure',
                'Battlestar Galactica roller coasters',
                'Shrek 4-D Adventure and Madagascar zone'
              ]
            }
          },
          {
            id: '5-a2',
            name: 'S.E.A. Aquarium',
            description: 'One of the world\'s largest aquariums featuring over 100,000 marine animals from 1,000 species across 50 different habitats.',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600',
            category: 'Aquarium',
            details: {
              location: '8 Sentosa Gateway, Resorts World Sentosa',
              openingHours: '10:00 AM - 5:00 PM daily',
              entryFee: 'S$40 (Adult), S$29 (Child 4-12 years)',
              duration: '2-3 hours',
              bestTime: 'Morning (10 AM-12 PM) or late afternoon',
              accessibility: 'Fully wheelchair accessible',
              highlights: [
                'Open Ocean Habitat with viewing panel',
                'Shark Seas with 200+ sharks',
                'Dolphin Island encounters (additional fee)',
                'Interactive touch pools'
              ]
            }
          },
          {
            id: '5-a3',
            name: 'Skyline Luge Sentosa',
            description: 'Thrilling gravity-powered ride down purpose-built tracks with scenic views, followed by a chairlift ride back to the top.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
            category: 'Adventure Activity',
            details: {
              location: '45 Siloso Beach Walk, Sentosa',
              openingHours: '10:00 AM - 9:30 PM daily',
              entryFee: 'S$22 (1 ride), S$30 (2 rides), S$38 (3 rides)',
              duration: '1-2 hours',
              bestTime: 'Late afternoon (4-6 PM) for cooler weather',
              accessibility: 'Minimum height 85cm, not wheelchair accessible',
              highlights: [
                '4 different tracks (Dragon, Jungle, Expedition, Kupu Kupu)',
                'Scenic Skyride chairlift',
                'Night luge experience',
                'Family-friendly adventure'
              ]
            }
          }
        ],
        detailedInfo: {
          location: 'Sentosa Island',
          openingHours: 'Varies by attraction',
          bestTimeToVisit: 'Weekdays to avoid crowds',
          averageDuration: 'Full day',
          priceRange: 'S$40-81 per attraction'
        }
      },
      {
        id: '6',
        name: 'Little India',
        description: 'Vibrant ethnic quarter filled with colorful temples, spice shops, textile stores, and authentic Indian cuisine.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
        category: 'Cultural & Shopping',
        matchScore: 85,
        suggestions: [
          {
            id: '6-1',
            title: 'Visit Sri Veeramakaliamman Temple',
            description: 'Historic Hindu temple dedicated to Goddess Kali, featuring intricate gopuram architecture',
            popularity: 89,
            tips: 'Remove shoes before entering, dress modestly, free admission'
          },
          {
            id: '6-2',
            title: 'Shop at Mustafa Centre',
            description: '24-hour shopping mall with everything from electronics to jewelry at bargain prices',
            popularity: 91,
            tips: 'Bring cash for best deals, can get crowded on weekends'
          },
          {
            id: '6-3',
            title: 'Explore Tekka Centre',
            description: 'Bustling wet market and hawker center offering authentic Indian cuisine',
            popularity: 87,
            tips: 'Try the fish head curry and various dosa varieties'
          },
          {
            id: '6-4',
            title: 'Browse Little India Arcade',
            description: 'Shop for traditional Indian goods, textiles, jewelry, and handicrafts',
            popularity: 83,
            tips: 'Great for souvenirs, bargaining is acceptable'
          }
        ],
        attractions: [
          {
            id: '6-a1',
            name: 'Sri Veeramakaliamman Temple',
            description: 'Historic Hindu temple built in 1881, dedicated to Goddess Kali, featuring stunning Dravidian architecture and vibrant gopuram tower.',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600',
            category: 'Religious Site',
            details: {
              location: '141 Serangoon Road, Little India',
              openingHours: '5:30 AM - 12:15 PM, 4:00 PM - 9:15 PM daily',
              entryFee: 'Free (donations welcome)',
              duration: '30-45 minutes',
              bestTime: 'Morning (6-8 AM) during prayer ceremonies',
              accessibility: 'Ground floor accessible, remove shoes required',
              highlights: [
                'Ornate gopuram with colorful deities',
                'Daily prayer ceremonies (puja)',
                'Traditional Hindu rituals',
                'Historic architecture from 1881'
              ]
            }
          },
          {
            id: '6-a2',
            name: 'Mustafa Centre',
            description: 'Iconic 24-hour shopping mall offering everything from electronics to jewelry, textiles, and groceries at competitive prices.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
            category: 'Shopping Mall',
            details: {
              location: '145 Syed Alwi Road, Little India',
              openingHours: '24 hours daily',
              entryFee: 'Free entry (shopping costs vary)',
              duration: '2-3 hours',
              bestTime: 'Late night (10 PM-12 AM) for fewer crowds',
              accessibility: 'Elevator access, wheelchair friendly',
              highlights: [
                'Electronics and gadgets at bargain prices',
                'Gold jewelry and watches',
                'Indian textiles and saris',
                'International groceries and spices'
              ]
            }
          },
          {
            id: '6-a3',
            name: 'Little India Arcade',
            description: 'Historic shopping arcade featuring traditional Indian goods, handicrafts, textiles, and authentic cultural experiences.',
            image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600',
            category: 'Shopping Arcade',
            details: {
              location: '48 Serangoon Road, Little India',
              openingHours: '9:00 AM - 10:00 PM daily',
              entryFee: 'Free entry (shopping costs vary)',
              duration: '1-2 hours',
              bestTime: 'Afternoon (2-5 PM) for relaxed browsing',
              accessibility: 'Ground level, wheelchair accessible',
              highlights: [
                'Traditional Indian textiles and saris',
                'Henna tattoo services',
                'Handicrafts and souvenirs',
                'Spice shops and incense'
              ]
            }
          }
        ],
        detailedInfo: {
          location: 'Serangoon Road area',
          openingHours: 'Varies (most shops 9 AM - 9 PM)',
          bestTimeToVisit: 'Morning or late afternoon',
          averageDuration: '2-3 hours',
          priceRange: 'Budget-friendly'
        }
      },
      {
        id: '7',
        name: 'Singapore Botanic Gardens',
        description: 'UNESCO World Heritage Site featuring the National Orchid Garden, rainforest, and serene walking trails.',
        image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
        category: 'Nature',
        matchScore: 87,
        suggestions: [
          {
            id: '7-1',
            title: 'National Orchid Garden',
            description: 'World\'s largest orchid display with over 1,000 species and 2,000 hybrids',
            popularity: 94,
            tips: 'Only paid section (S$5), best visited in morning when flowers are fresh'
          },
          {
            id: '7-2',
            title: 'Walk the Heritage Trees Trail',
            description: 'Discover ancient trees and learn about Singapore\'s botanical heritage',
            popularity: 85,
            tips: 'Free guided tours available on weekends'
          },
          {
            id: '7-3',
            title: 'Explore the Rainforest',
            description: 'Experience a 6-hectare patch of primary rainforest in the heart of the city',
            popularity: 88,
            tips: 'Wear comfortable shoes, bring insect repellent'
          },
          {
            id: '7-4',
            title: 'Picnic at Symphony Lake',
            description: 'Relax by the scenic lake, often featuring free outdoor concerts',
            popularity: 82,
            tips: 'Check schedule for Symphony in the Park performances'
          }
        ],
        attractions: [
          {
            id: '7-a1',
            name: 'National Orchid Garden',
            description: 'World\'s largest display of tropical orchids with over 1,000 species and 2,000 hybrids, including the VIP Orchid Garden featuring orchids named after dignitaries.',
            image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600',
            category: 'Garden',
            details: {
              location: 'Within Singapore Botanic Gardens, 1 Cluny Road',
              openingHours: '8:30 AM - 7:00 PM daily (last entry 6:00 PM)',
              entryFee: 'S$5 (Adult), Free (Child under 12, Senior 60+)',
              duration: '1-1.5 hours',
              bestTime: 'Early morning (8:30-10 AM) when flowers are fresh',
              accessibility: 'Wheelchair accessible with some slopes',
              highlights: [
                'VIP Orchid Garden with celebrity-named orchids',
                'Tan Hoon Siang Misthouse',
                'Burkill Hall colonial bungalow',
                'Seasonal orchid displays'
              ]
            }
          },
          {
            id: '7-a2',
            name: 'Rainforest',
            description: 'A 6-hectare patch of primary rainforest, one of only two rainforest areas in the city, featuring ancient trees and diverse tropical flora.',
            image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600',
            category: 'Nature Trail',
            details: {
              location: 'Within Singapore Botanic Gardens, 1 Cluny Road',
              openingHours: '5:00 AM - 12:00 AM daily',
              entryFee: 'Free',
              duration: '45 minutes - 1 hour',
              bestTime: 'Early morning (6-8 AM) for bird watching',
              accessibility: 'Natural terrain, limited wheelchair access',
              highlights: [
                'Primary rainforest ecosystem',
                'Heritage trees over 150 years old',
                'Diverse bird species',
                'Jungle Walk boardwalk'
              ]
            }
          },
          {
            id: '7-a3',
            name: 'Jacob Ballas Children\'s Garden',
            description: 'Asia\'s first children\'s garden designed for kids aged 12 and under, featuring interactive water play, treehouse, and educational plant exhibits.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
            category: 'Children\'s Garden',
            details: {
              location: 'Within Singapore Botanic Gardens, 1 Cluny Road',
              openingHours: '8:00 AM - 7:00 PM (Tue-Sun, closed Mon)',
              entryFee: 'Free',
              duration: '1.5-2 hours',
              bestTime: 'Morning (9-11 AM) before it gets too hot',
              accessibility: 'Wheelchair accessible, family-friendly',
              highlights: [
                'Water play area',
                'Treehouse and suspension bridge',
                'Interactive plant exhibits',
                'Adventure trail and maze'
              ]
            }
          }
        ],
        detailedInfo: {
          location: '1 Cluny Road',
          openingHours: '5:00 AM - 12:00 AM',
          bestTimeToVisit: 'Early morning',
          averageDuration: '2-3 hours',
          priceRange: 'Free (except Orchid Garden)'
        }
      },
      {
        id: '8',
        name: 'Clarke Quay',
        description: 'Riverside entertainment hub with restaurants, bars, clubs, and stunning night views along the Singapore River.',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
        category: 'Nightlife & Dining',
        matchScore: 89,
        suggestions: [
          {
            id: '8-1',
            title: 'Dine at riverside restaurants',
            description: 'Choose from diverse cuisines with al fresco seating overlooking the Singapore River',
            popularity: 92,
            tips: 'Make reservations for weekend dinners, happy hour deals available'
          },
          {
            id: '8-2',
            title: 'Take a river cruise',
            description: 'Enjoy a scenic bumboat ride along the historic Singapore River',
            popularity: 88,
            tips: 'Sunset cruises offer the best views and photo opportunities'
          },
          {
            id: '8-3',
            title: 'Experience the nightlife',
            description: 'Explore various bars and clubs, from rooftop lounges to dance clubs',
            popularity: 90,
            tips: 'Dress code enforced at most venues, arrive before 10 PM to avoid cover charges'
          },
          {
            id: '8-4',
            title: 'Visit G-MAX Reverse Bungy',
            description: 'Thrill ride that catapults you 60 meters into the air at 200 km/h',
            popularity: 79,
            tips: 'Not for the faint-hearted, secure all loose items'
          }
        ],
        attractions: [
          {
            id: '8-a1',
            name: 'Singapore River Cruise',
            description: 'Scenic 40-minute bumboat cruise along the historic Singapore River, passing iconic landmarks and learning about the city\'s heritage.',
            image: 'https://images.unsplash.com/photo-1567093322503-342d8a7a7b7d?w=600',
            category: 'River Cruise',
            details: {
              location: 'Clarke Quay Jetty, 3 River Valley Road',
              openingHours: '9:00 AM - 11:00 PM daily (departures every 15-20 min)',
              entryFee: 'S$25 (Adult), S$15 (Child 3-12 years)',
              duration: '40 minutes',
              bestTime: 'Sunset (6-7 PM) or night for city lights',
              accessibility: 'Wheelchair accessible with assistance',
              highlights: [
                'Pass by Marina Bay Sands and Merlion',
                'Historic shophouses and bridges',
                'Audio commentary in multiple languages',
                'Photo opportunities of skyline'
              ]
            }
          },
          {
            id: '8-a2',
            name: 'G-MAX Reverse Bungy',
            description: 'Extreme thrill ride that catapults riders 60 meters into the air at 200 km/h, offering an adrenaline-pumping experience.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
            category: 'Thrill Ride',
            details: {
              location: '3E River Valley Road, Clarke Quay',
              openingHours: '3:00 PM - 1:00 AM (Mon-Thu), 3:00 PM - 2:00 AM (Fri-Sun)',
              entryFee: 'S$45 per person',
              duration: '5 minutes (ride itself)',
              bestTime: 'Evening (7-9 PM) for night views',
              accessibility: 'Not wheelchair accessible, health restrictions apply',
              highlights: [
                'Launch to 60 meters at 200 km/h',
                'Panoramic views of Clarke Quay',
                'Video recording available for purchase',
                'Unique Singapore experience'
              ]
            }
          },
          {
            id: '8-a3',
            name: 'Riverside Point',
            description: 'Shopping and dining complex along the Singapore River featuring diverse restaurants, bars, and entertainment options with scenic waterfront views.',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
            category: 'Dining & Entertainment',
            details: {
              location: '30 Merchant Road, Clarke Quay',
              openingHours: '11:00 AM - late (varies by establishment)',
              entryFee: 'Free entry (dining costs vary)',
              duration: '2-3 hours',
              bestTime: 'Evening (6-10 PM) for dinner and nightlife',
              accessibility: 'Fully wheelchair accessible',
              highlights: [
                'Diverse international cuisines',
                'Rooftop bars with river views',
                'Live music venues',
                'Al fresco dining options'
              ]
            }
          }
        ],
        detailedInfo: {
          location: '3 River Valley Road',
          openingHours: 'Varies (most venues 11 AM - late)',
          bestTimeToVisit: 'Evening and night',
          averageDuration: '3-4 hours',
          priceRange: 'Moderate to expensive'
        }
      }
    ];

    // Filter and sort based on preferences
    return allDestinations
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 8);
  };

  const destinations = generateDestinations();

  const getBudgetIcon = (budget: string) => {
    if (budget === 'budget') return '$';
    if (budget === 'moderate') return '$$';
    return '$$$';
  };

  const toggleDestination = (id: string) => {
    setExpandedDestination(expandedDestination === id ? null : id);
    setSelectedAttraction(null);
  };

  const toggleAttraction = (attractionId: string) => {
    setSelectedAttraction(selectedAttraction === attractionId ? null : attractionId);
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 vhs-effect">
          <h1 className="text-5xl md:text-7xl font-black cinzel neon-glow mb-4">
            YOUR JOURNEY
          </h1>
          <p className="text-xl md:text-2xl text-[#01CDFE] mb-8">
            Personalized recommendations just for you
          </p>

          {/* Preferences Summary */}
          <div className="retro-card p-6 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-6 h-6 text-[#FF71CE]" />
                <span className="text-gray-400">Duration</span>
                <span className="text-[#05FFA1] font-bold">{preferences.duration} days</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <DollarSign className="w-6 h-6 text-[#FF71CE]" />
                <span className="text-gray-400">Budget</span>
                <span className="text-[#05FFA1] font-bold">{getBudgetIcon(preferences.budget)}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6 text-[#FF71CE]" />
                <span className="text-gray-400">Group</span>
                <span className="text-[#05FFA1] font-bold capitalize">{preferences.travelGroup}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-[#FF71CE]" />
                <span className="text-gray-400">Style</span>
                <span className="text-[#05FFA1] font-bold capitalize">{preferences.tourStyle.replace('-', ' ')}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Star className="w-6 h-6 text-[#FF71CE]" />
                <span className="text-gray-400">Interests</span>
                <span className="text-[#05FFA1] font-bold">{preferences.interests.length}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onReset}
            className="px-6 py-3 border-2 border-[#B967FF] text-[#B967FF] font-bold hover:bg-[#B967FF] hover:text-black transition-all flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            START OVER
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('destinations')}
            className={`px-8 py-4 font-bold text-lg transition-all flex items-center gap-2 ${
              activeTab === 'destinations'
                ? 'border-2 border-[#FF71CE] bg-[#FF71CE]/10 text-[#FF71CE] neon-border'
                : 'border-2 border-gray-700 text-gray-400 hover:border-[#01CDFE] hover:text-[#01CDFE]'
            }`}
          >
            <MapPin className="w-5 h-5" />
            DESTINATIONS
          </button>
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`px-8 py-4 font-bold text-lg transition-all flex items-center gap-2 ${
              activeTab === 'itinerary'
                ? 'border-2 border-[#FF71CE] bg-[#FF71CE]/10 text-[#FF71CE] neon-border'
                : 'border-2 border-gray-700 text-gray-400 hover:border-[#01CDFE] hover:text-[#01CDFE]'
            }`}
          >
            <Calendar className="w-5 h-5" />
            ITINERARY
          </button>
        </div>

        {/* Content */}
        {activeTab === 'destinations' ? (
          <>
            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, index) => (
                <div
                  key={destination.id}
                  className="retro-card overflow-hidden group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] via-transparent to-transparent"></div>
                    
                    {/* Match Score */}
                    <div className="absolute top-4 right-4 bg-[#05FFA1] text-black px-3 py-1 font-bold text-sm flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      {destination.matchScore}%
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-xs text-[#01CDFE] mb-2 tracking-wider uppercase">
                      {destination.category}
                    </div>
                    <h3 className="text-xl font-bold text-[#FF71CE] mb-3">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {destination.description}
                    </p>
                    
                    <button 
                      onClick={() => toggleDestination(destination.id)}
                      className="w-full py-3 border-2 border-[#05FFA1] text-[#05FFA1] font-bold hover:bg-[#05FFA1] hover:text-black transition-all flex items-center justify-center gap-2 group"
                    >
                      {expandedDestination === destination.id ? (
                        <>
                          SHOW LESS
                          <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </>
                      ) : (
                        <>
                          EXPLORE MORE
                          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedDestination === destination.id && (
                    <div className="px-6 pb-6 border-t-2 border-[#B967FF]/20 pt-6 animate-fadeIn">
                      {/* Detailed Info */}
                      <div className="mb-6 space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-[#01CDFE] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400">{destination.detailedInfo.location}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-[#01CDFE] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400">{destination.detailedInfo.openingHours}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <DollarSign className="w-4 h-4 text-[#01CDFE] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400">{destination.detailedInfo.priceRange}</span>
                        </div>
                      </div>

                      {/* Attractions Section */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-[#B967FF] mb-4 flex items-center gap-2">
                          <Sparkles className="w-5 h-5" />
                          FEATURED ATTRACTIONS
                        </h4>
                        <div className="space-y-4">
                          {destination.attractions.map((attraction) => (
                            <div key={attraction.id} className="border-2 border-[#B967FF]/30 bg-[#B967FF]/5 overflow-hidden">
                              {/* Attraction Header */}
                              <div className="p-4">
                                <div className="flex items-start gap-3 mb-3">
                                  <img 
                                    src={attraction.image} 
                                    alt={attraction.name}
                                    className="w-20 h-20 object-cover rounded border-2 border-[#B967FF]/50"
                                  />
                                  <div className="flex-1">
                                    <div className="text-xs text-[#B967FF] mb-1 uppercase tracking-wider">
                                      {attraction.category}
                                    </div>
                                    <h5 className="font-bold text-white mb-2">
                                      {attraction.name}
                                    </h5>
                                    <p className="text-xs text-gray-400 line-clamp-2">
                                      {attraction.description}
                                    </p>
                                  </div>
                                </div>
                                
                                <button
                                  onClick={() => toggleAttraction(attraction.id)}
                                  className="w-full py-2 border border-[#B967FF] text-[#B967FF] text-sm font-bold hover:bg-[#B967FF] hover:text-black transition-all flex items-center justify-center gap-2"
                                >
                                  {selectedAttraction === attraction.id ? (
                                    <>
                                      HIDE DETAILS
                                      <ChevronUp className="w-3 h-3" />
                                    </>
                                  ) : (
                                    <>
                                      VIEW DETAILS
                                      <ChevronDown className="w-3 h-3" />
                                    </>
                                  )}
                                </button>
                              </div>

                              {/* Attraction Details */}
                              {selectedAttraction === attraction.id && (
                                <div className="px-4 pb-4 border-t border-[#B967FF]/20 pt-4 animate-fadeIn">
                                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                                    <div className="flex items-start gap-2">
                                      <MapPin className="w-3 h-3 text-[#01CDFE] mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="text-[#01CDFE] font-bold mb-1">Location</div>
                                        <div className="text-gray-400">{attraction.details.location}</div>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Clock className="w-3 h-3 text-[#01CDFE] mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="text-[#01CDFE] font-bold mb-1">Hours</div>
                                        <div className="text-gray-400">{attraction.details.openingHours}</div>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <DollarSign className="w-3 h-3 text-[#05FFA1] mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="text-[#05FFA1] font-bold mb-1">Entry Fee</div>
                                        <div className="text-gray-400">{attraction.details.entryFee}</div>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Clock className="w-3 h-3 text-[#05FFA1] mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="text-[#05FFA1] font-bold mb-1">Duration</div>
                                        <div className="text-gray-400">{attraction.details.duration}</div>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Star className="w-3 h-3 text-[#FF71CE] mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="text-[#FF71CE] font-bold mb-1">Best Time</div>
                                        <div className="text-gray-400">{attraction.details.bestTime}</div>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Accessibility className="w-3 h-3 text-[#FF71CE] mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="text-[#FF71CE] font-bold mb-1">Accessibility</div>
                                        <div className="text-gray-400">{attraction.details.accessibility}</div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="bg-[#01CDFE]/10 p-3 border border-[#01CDFE]/30">
                                    <div className="text-[#01CDFE] font-bold mb-2 text-xs flex items-center gap-1">
                                      <Info className="w-3 h-3" />
                                      HIGHLIGHTS
                                    </div>
                                    <ul className="space-y-1">
                                      {attraction.details.highlights.map((highlight, idx) => (
                                        <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                                          <span className="text-[#05FFA1] mt-0.5">▸</span>
                                          <span>{highlight}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Top Suggestions */}
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-[#FF71CE] mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          TOP THINGS TO DO
                        </h4>
                        <div className="space-y-3">
                          {destination.suggestions
                            .sort((a, b) => b.popularity - a.popularity)
                            .map((suggestion, idx) => (
                              <div 
                                key={suggestion.id} 
                                className="border-l-4 border-[#05FFA1] pl-4 py-2 bg-[#05FFA1]/5 hover:bg-[#05FFA1]/10 transition-colors"
                              >
                                <div className="flex items-start justify-between gap-2 mb-1">
                                  <h5 className="font-bold text-[#05FFA1] text-sm">
                                    {idx + 1}. {suggestion.title}
                                  </h5>
                                  <span className="text-xs text-[#01CDFE] font-bold flex items-center gap-1 flex-shrink-0">
                                    <Star className="w-3 h-3 fill-current" />
                                    {suggestion.popularity}%
                                  </span>
                                </div>
                                <p className="text-xs text-gray-400 mb-2">
                                  {suggestion.description}
                                </p>
                                <p className="text-xs text-[#B967FF] italic">
                                  💡 {suggestion.tips}
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Best Time & Duration */}
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="bg-[#01CDFE]/10 p-3 border border-[#01CDFE]/30">
                          <div className="text-[#01CDFE] font-bold mb-1">BEST TIME</div>
                          <div className="text-gray-400">{destination.detailedInfo.bestTimeToVisit}</div>
                        </div>
                        <div className="bg-[#FF71CE]/10 p-3 border border-[#FF71CE]/30">
                          <div className="text-[#FF71CE] font-bold mb-1">DURATION</div>
                          <div className="text-gray-400">{destination.detailedInfo.averageDuration}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Tips */}
            <div className="mt-16 retro-card p-8">
              <h2 className="text-3xl font-bold vaporwave-text-gradient mb-6 text-center">
                Pro Tips for Your Singapore Adventure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🚇</div>
                  <h3 className="text-lg font-bold text-[#05FFA1] mb-2">Transportation</h3>
                  <p className="text-sm text-gray-400">Get an EZ-Link card for seamless MRT and bus travel across the island</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌡️</div>
                  <h3 className="text-lg font-bold text-[#05FFA1] mb-2">Weather</h3>
                  <p className="text-sm text-gray-400">Tropical climate year-round. Carry an umbrella and stay hydrated!</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💳</div>
                  <h3 className="text-lg font-bold text-[#05FFA1] mb-2">Payment</h3>
                  <p className="text-sm text-gray-400">Cards accepted everywhere, but carry some cash for hawker centers</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Itinerary preferences={preferences} />
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p className="tracking-[0.3em]">◆ CRAFTED WITH VAPORWAVE AESTHETICS ◆</p>
          <p className="mt-2">Your adventure awaits in the Lion City</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
