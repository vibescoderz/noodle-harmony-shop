import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';

/**
 * CartButton Component
 * 
 * Floating cart button that shows item count and opens the cart sidebar.
 */
export function CartButton() {
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <Button
      variant="glow"
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full z-30 shadow-xl"
      onClick={toggleCart}
      aria-label={`Open cart with ${totalItems} items`}
    >
      <ShoppingBag className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 h-6 w-6 flex items-center justify-center bg-accent text-accent-foreground text-xs font-bold rounded-full animate-bounce-in">
          {totalItems}
        </span>
      )}
    </Button>
  );
}
