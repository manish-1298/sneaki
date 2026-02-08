import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '101',
    name: 'Street Force High "Shadow"',
    price: 165,
    category: 'Men',
    sizes: [7, 8, 9, 10, 11, 12, 13],
    // Matches Image 1: Black/White/Grey High Top
    image: 'https://images.unsplash.com/photo-1579338559194-a162d84178bf?q=80&w=1000', 
    description: 'A retro-inspired high top featuring premium suede overlays and a chunky sole for maximum street presence. The monochromatic colorway fits any fit.',
    isNew: true,
    rating: 4.9,
    reviews: 84
  },
  {
    id: '102',
    name: 'Cloud Knit "Pure"',
    price: 120,
    category: 'Women',
    sizes: [5, 6, 7, 8, 9, 10],
    // Matches Image 2: White Mesh Runner
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000', 
    description: 'Breathable engineered mesh upper meets ultra-light cushioning. Designed for the daily grind, whether you\'re running laps or running errands.',
    rating: 4.7,
    reviews: 156
  },
  {
    id: '103',
    name: 'Urban Luxe "Tobacco"',
    price: 180,
    category: 'Men',
    sizes: [8, 9, 10, 11, 12],
    // Matches Image 3: Brown Leather Sneaker
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000', 
    description: 'Hand-finished leather upper with a clean white cupsole. The perfect bridge between casual streetwear and smart casual.',
    rating: 4.8,
    reviews: 62
  },
  {
    id: '104',
    name: 'Street Force High "Royal"',
    price: 165,
    category: 'Men',
    sizes: [7, 8, 9, 10, 11, 12],
    // Matches Image 4: Blue/White High Top
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1000', 
    description: 'Bold color blocking in royal blue and grey. High-top construction provides ankle support and unmistakable style.',
    isNew: true,
    rating: 4.5,
    reviews: 30
  },
  {
    id: '105',
    name: 'Retro Wave "Mint Fresh"',
    price: 140,
    category: 'Unisex',
    sizes: [6, 7, 8, 9, 10, 11],
    // Matches Image 5: Chunky White/Mint Sneaker
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000', 
    description: '90s aesthetics reimagined. Chunky silhouette with subtle mint accents and layered textures for that vintage dad-shoe vibe.',
    rating: 4.6,
    reviews: 112
  },
  {
    id: '106',
    name: 'Trek Master "Forest"',
    price: 195,
    category: 'Limited',
    sizes: [8, 9, 10, 11, 12, 13],
    // Matches Image 6: Green/Tan/Multi High Top
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000', 
    description: 'Outdoor ruggedness meets street style. Earth tones in green and tan with a complex, layered upper design and heavy-duty outsole.',
    isNew: true,
    rating: 5.0,
    reviews: 24
  },
  {
    id: '107',
    name: 'Velocity Tech "Grey Volt"',
    price: 150,
    category: 'Men',
    sizes: [7, 8, 9, 10, 11, 12],
    // Matches Image 7: Grey/White/Orange Runner
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000', 
    description: 'Aerodynamic profile with technical synthetic overlays. Grey base with popping orange accents for a fast, futuristic look.',
    rating: 4.7,
    reviews: 95
  }
];