import { Plus, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import type { MenuItem as MenuItemType } from '@/types/menu';
import { toast } from 'sonner';

interface MenuItemProps {
  item: MenuItemType;
}

/**
 * MenuItem Component
 * 
 * Displays a single menu item with image, details, and add to cart functionality.
 * Features hover animations and visual indicators for popular/spicy items.
 */
export function MenuItem({ item }: MenuItemProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(item);
    toast.success(`Added ${item.name} to cart`, {
      description: `¥${item.price.toFixed(2)}`,
    });
  };

  return (
    <article 
      className="group relative bg-card rounded-xl overflow-hidden border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              Popular
            </span>
          )}
          {item.spicyLevel && (
            <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
              <Flame className="h-3 w-3" />
              {Array(item.spicyLevel).fill('🌶️').join('')}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground">{item.nameJp}</p>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-primary">
            ${item.price.toFixed(2)}
          </span>
          
          <Button
            size="sm"
            variant="glow"
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
