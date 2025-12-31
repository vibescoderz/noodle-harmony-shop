import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import type { CartItem as CartItemType } from '@/types/menu';

interface CartItemProps {
  item: CartItemType;
}

/**
 * CartItem Component
 * 
 * Displays a single cart item with quantity controls and remove button.
 */
export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex gap-3 p-3 bg-card/50 rounded-lg border border-border/30">
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md flex-shrink-0"
      />
      
      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm truncate">{item.name}</h4>
        <p className="text-xs text-muted-foreground">{item.nameJp}</p>
        <p className="text-sm font-semibold text-primary mt-1">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      
      {/* Controls */}
      <div className="flex flex-col items-end justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-muted-foreground hover:text-destructive"
          onClick={() => removeItem(item.id)}
          aria-label={`Remove ${item.name} from cart`}
        >
          <Trash2 className="h-3 w-3" />
        </Button>
        
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
          >
            <Minus className="h-3 w-3" />
          </Button>
          
          <span className="w-6 text-center text-sm font-medium">
            {item.quantity}
          </span>
          
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
