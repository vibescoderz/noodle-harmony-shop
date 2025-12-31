import { X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { CartItem } from './CartItem';
import { cn } from '@/lib/utils';

/**
 * CartSidebar Component
 * 
 * Sliding sidebar that displays cart contents.
 * Includes item list, total, and checkout button.
 */
export function CartSidebar() {
  const { items, isCartOpen, setCartOpen, getTotalPrice, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 transition-transform duration-300 ease-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="font-display text-lg font-semibold">Your Order</h2>
            {totalItems > 0 && (
              <span className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-1">
                Add some delicious ramen!
              </p>
            </div>
          ) : (
            items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-4 bg-card">
            <div className="flex items-center justify-between text-lg">
              <span className="font-medium">Total</span>
              <span className="font-bold text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            
            <Button
              asChild
              variant="glow"
              size="xl"
              className="w-full"
              onClick={() => setCartOpen(false)}
            >
              <Link to="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
          </div>
        )}
      </aside>
    </>
  );
}
