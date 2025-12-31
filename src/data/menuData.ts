import type { MenuItem } from '@/types/menu';

// Image imports
import tonkotsuImg from '@/assets/tonkotsu-ramen.jpg';
import spicyMisoImg from '@/assets/spicy-miso-ramen.jpg';
import shoyuImg from '@/assets/shoyu-ramen.jpg';
import tantanmenImg from '@/assets/tantanmen.jpg';
import blackGarlicImg from '@/assets/black-garlic-ramen.jpg';
import gyozaImg from '@/assets/gyoza.jpg';
import karaageImg from '@/assets/karaage.jpg';
import mochiImg from '@/assets/mochi.jpg';
import matchaCakeImg from '@/assets/matcha-cheesecake.jpg';
import ramuneImg from '@/assets/ramune.jpg';

/**
 * Menu Data
 * 
 * Contains all menu items for the ramen shop.
 * Categories: ramen, sides, drinks, desserts
 */
export const menuItems: MenuItem[] = [
  // Ramen
  {
    id: 'tonkotsu-classic',
    name: 'Tonkotsu Classic',
    nameJp: '豚骨ラーメン',
    description: 'Rich pork bone broth simmered for 18 hours, chashu pork, soft-boiled egg, bamboo shoots, and green onions.',
    price: 14.99,
    category: 'ramen',
    image: tonkotsuImg,
    isPopular: true,
  },
  {
    id: 'spicy-miso',
    name: 'Spicy Miso Ramen',
    nameJp: '辛味噌ラーメン',
    description: 'Fermented soybean broth with ground pork, corn, butter, and our special chili oil blend.',
    price: 15.99,
    category: 'ramen',
    image: spicyMisoImg,
    isPopular: true,
    spicyLevel: 2,
  },
  {
    id: 'shoyu-ramen',
    name: 'Shoyu Ramen',
    nameJp: '醤油ラーメン',
    description: 'Clear soy sauce based broth with chicken, menma, nori, and a perfectly seasoned soft egg.',
    price: 13.99,
    category: 'ramen',
    image: shoyuImg,
  },
  {
    id: 'tantanmen',
    name: 'Tantanmen',
    nameJp: '担々麺',
    description: 'Creamy sesame broth with spicy ground pork, bok choy, and crispy chili flakes.',
    price: 16.99,
    category: 'ramen',
    image: tantanmenImg,
    spicyLevel: 3,
  },
  {
    id: 'vegetarian-miso',
    name: 'Vegetarian Miso',
    nameJp: '野菜味噌ラーメン',
    description: 'Plant-based miso broth with tofu, seasonal vegetables, mushrooms, and corn.',
    price: 14.49,
    category: 'ramen',
    image: spicyMisoImg,
  },
  {
    id: 'black-garlic',
    name: 'Black Garlic Tonkotsu',
    nameJp: '黒にんにく豚骨',
    description: 'Our classic tonkotsu elevated with aromatic black garlic oil and extra chashu.',
    price: 17.99,
    category: 'ramen',
    image: blackGarlicImg,
    isPopular: true,
  },
  
  // Sides
  {
    id: 'gyoza',
    name: 'Pork Gyoza',
    nameJp: '餃子',
    description: 'Six pan-fried dumplings filled with seasoned pork and vegetables.',
    price: 7.99,
    category: 'sides',
    image: gyozaImg,
    isPopular: true,
  },
  {
    id: 'karaage',
    name: 'Chicken Karaage',
    nameJp: '唐揚げ',
    description: 'Japanese-style fried chicken with house-made mayo and lemon.',
    price: 8.99,
    category: 'sides',
    image: karaageImg,
  },
  {
    id: 'edamame',
    name: 'Edamame',
    nameJp: '枝豆',
    description: 'Steamed soybeans with sea salt.',
    price: 4.99,
    category: 'sides',
    image: gyozaImg,
  },
  {
    id: 'takoyaki',
    name: 'Takoyaki',
    nameJp: 'たこ焼き',
    description: 'Six octopus balls with bonito flakes, mayo, and okonomiyaki sauce.',
    price: 8.49,
    category: 'sides',
    image: gyozaImg,
  },
  
  // Drinks
  {
    id: 'ramune',
    name: 'Ramune Soda',
    nameJp: 'ラムネ',
    description: 'Classic Japanese marble soda in original flavor.',
    price: 3.49,
    category: 'drinks',
    image: ramuneImg,
  },
  {
    id: 'green-tea',
    name: 'Hot Green Tea',
    nameJp: '緑茶',
    description: 'Traditional Japanese green tea.',
    price: 2.99,
    category: 'drinks',
    image: ramuneImg,
  },
  {
    id: 'asahi',
    name: 'Asahi Draft',
    nameJp: 'アサヒビール',
    description: 'Crisp Japanese lager, 12oz.',
    price: 5.99,
    category: 'drinks',
    image: ramuneImg,
  },
  
  // Desserts
  {
    id: 'mochi',
    name: 'Mochi Ice Cream',
    nameJp: 'もちアイス',
    description: 'Three pieces of assorted mochi ice cream.',
    price: 5.99,
    category: 'desserts',
    image: mochiImg,
  },
  {
    id: 'matcha-cake',
    name: 'Matcha Cheesecake',
    nameJp: '抹茶チーズケーキ',
    description: 'Creamy Japanese-style cheesecake with matcha swirl.',
    price: 6.99,
    category: 'desserts',
    image: matchaCakeImg,
    isPopular: true,
  },
];

/**
 * Category definitions with Japanese labels
 */
export const categories = [
  { id: 'all', label: 'All', labelJp: '全て' },
  { id: 'ramen', label: 'Ramen', labelJp: 'ラーメン' },
  { id: 'sides', label: 'Sides', labelJp: 'おかず' },
  { id: 'drinks', label: 'Drinks', labelJp: 'ドリンク' },
  { id: 'desserts', label: 'Desserts', labelJp: 'デザート' },
] as const;
