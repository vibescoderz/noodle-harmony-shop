import { create } from 'zustand';
import type { MenuCategory } from '@/types/menu';

interface MenuState {
  searchQuery: string;
  selectedCategory: MenuCategory | 'all';
  
  // Actions
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: MenuCategory | 'all') => void;
  resetFilters: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  searchQuery: '',
  selectedCategory: 'all',

  setSearchQuery: (query: string) => set({ searchQuery: query }),
  
  setSelectedCategory: (category: MenuCategory | 'all') => 
    set({ selectedCategory: category }),
  
  resetFilters: () => set({ searchQuery: '', selectedCategory: 'all' }),
}));
