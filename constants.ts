import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Chrono Gold',
    tagline: 'The Standard of Kings',
    price: 12500,
    description: 'Forged from 18k solid gold, the Royal Chrono represents the pinnacle of Swiss engineering. Featuring our proprietary perpetual calendar movement.',
    specs: {
      movement: 'Automatic Caliber S-900',
      case: '42mm 18k Gold',
      waterResistance: '100m',
      strap: 'Alligator Leather',
    },
    image: 'https://picsum.photos/400/400?random=1',
    colors: {
      case: '#FFD700',
      dial: '#111111',
      strap: '#3E2723',
    }
  },
  {
    id: '2',
    name: 'Abyss Diver Deep',
    tagline: 'Conquer the Depths',
    price: 8900,
    description: 'Built to withstand extreme pressure, the Abyss Diver is your companion for the unknown. Titanium construction ensures durability without weight.',
    specs: {
      movement: 'Automatic Caliber D-300',
      case: '44mm Titanium',
      waterResistance: '500m',
      strap: 'Vulcanized Rubber',
    },
    image: 'https://picsum.photos/400/400?random=2',
    colors: {
      case: '#C0C0C0',
      dial: '#001f3f',
      strap: '#111111',
    }
  },
  {
    id: '3',
    name: 'Velocita Speed',
    tagline: 'Precision in Motion',
    price: 10200,
    description: 'Inspired by classic racing instruments, the Velocita features a tachymeter scale and a high-beat movement for split-second accuracy.',
    specs: {
      movement: 'Chronograph Caliber V-12',
      case: '41mm Stainless Steel',
      waterResistance: '50m',
      strap: 'Perforated Leather',
    },
    image: 'https://picsum.photos/400/400?random=3',
    colors: {
      case: '#E5E4E2',
      dial: '#F5F5F5',
      strap: '#8B0000',
    }
  },
    {
    id: '4',
    name: 'Phantom Onyx',
    tagline: 'Shadow of Time',
    price: 14500,
    description: 'A masterpiece of stealth luxury. Matte black ceramic case with rose gold accents creates a striking yet understated presence.',
    specs: {
      movement: 'Automatic Caliber P-Zero',
      case: '40mm Ceramic',
      waterResistance: '30m',
      strap: 'Ceramic Link',
    },
    image: 'https://picsum.photos/400/400?random=4',
    colors: {
      case: '#1A1A1A',
      dial: '#000000',
      strap: '#1A1A1A',
    }
  }
];
