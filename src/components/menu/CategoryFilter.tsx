import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useMenuStore } from '@/store/menuStore';
import { categories } from '@/data/menuData';
import type { MenuCategory } from '@/types/menu';

/**
 * CategoryFilter Component
 * 
 * Horizontal scrollable category filter buttons.
 * Allows users to filter menu items by category.
 */
export function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useMenuStore();

  return (
    <nav 
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin"
      aria-label="Menu categories"
    >
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? 'default' : 'secondary'}
          size="sm"
          onClick={() => setSelectedCategory(category.id as MenuCategory | 'all')}
          className={cn(
            'flex-shrink-0 transition-all duration-200',
            selectedCategory === category.id && 'shadow-lg shadow-primary/20'
          )}
        >
          <span>{category.label}</span>
          <span className="text-xs opacity-70 ml-1">{category.labelJp}</span>
        </Button>
      ))}
    </nav>
  );
}
