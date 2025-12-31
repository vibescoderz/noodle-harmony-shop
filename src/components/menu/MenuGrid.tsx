import { useMemo } from 'react';
import { MenuItem } from './MenuItem';
import { useMenuStore } from '@/store/menuStore';
import { menuItems } from '@/data/menuData';

/**
 * MenuGrid Component
 * 
 * Displays a responsive grid of menu items.
 * Filters items based on search query and selected category.
 */
export function MenuGrid() {
  const { searchQuery, selectedCategory } = useMenuStore();

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      const matchesCategory = 
        selectedCategory === 'all' || item.category === selectedCategory;
      
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        !searchQuery ||
        item.name.toLowerCase().includes(searchLower) ||
        item.nameJp.includes(searchQuery) ||
        item.description.toLowerCase().includes(searchLower);
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  if (filteredItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-xl text-muted-foreground">No items found</p>
        <p className="text-sm text-muted-foreground mt-2">
          Try adjusting your search or filter
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredItems.map((item, index) => (
        <div
          key={item.id}
          className="animate-slide-up"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <MenuItem item={item} />
        </div>
      ))}
    </div>
  );
}
