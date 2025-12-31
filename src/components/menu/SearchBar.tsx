import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useMenuStore } from '@/store/menuStore';

/**
 * SearchBar Component
 * 
 * A search input for filtering menu items by name or description.
 * Integrates with the menu store for global search state.
 */
export function SearchBar() {
  const { searchQuery, setSearchQuery } = useMenuStore();

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search ramen, sides, drinks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-11 bg-card/50 border-border/50 focus:bg-card"
        aria-label="Search menu items"
      />
    </div>
  );
}
