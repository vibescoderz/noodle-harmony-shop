import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from '@/store/cartStore';
import type { MenuItem } from '@/types/menu';

const mockItem: MenuItem = {
  id: 'test-ramen',
  name: 'Test Ramen',
  nameJp: 'テストラーメン',
  description: 'A delicious test ramen',
  price: 14.99,
  category: 'ramen',
  image: '/test.jpg',
};

describe('Cart Store', () => {
  beforeEach(() => {
    // Reset the store before each test
    useCartStore.setState({ items: [], isCartOpen: false });
  });

  it('should add an item to the cart', () => {
    const { addItem, items } = useCartStore.getState();
    
    addItem(mockItem);
    
    const updatedItems = useCartStore.getState().items;
    expect(updatedItems).toHaveLength(1);
    expect(updatedItems[0].id).toBe('test-ramen');
    expect(updatedItems[0].quantity).toBe(1);
  });

  it('should increase quantity when adding same item', () => {
    const { addItem } = useCartStore.getState();
    
    addItem(mockItem);
    addItem(mockItem);
    
    const updatedItems = useCartStore.getState().items;
    expect(updatedItems).toHaveLength(1);
    expect(updatedItems[0].quantity).toBe(2);
  });

  it('should remove an item from the cart', () => {
    useCartStore.setState({
      items: [{ ...mockItem, quantity: 1 }],
    });

    const { removeItem } = useCartStore.getState();
    removeItem('test-ramen');
    
    const updatedItems = useCartStore.getState().items;
    expect(updatedItems).toHaveLength(0);
  });

  it('should update item quantity', () => {
    useCartStore.setState({
      items: [{ ...mockItem, quantity: 1 }],
    });

    const { updateQuantity } = useCartStore.getState();
    updateQuantity('test-ramen', 5);
    
    const updatedItems = useCartStore.getState().items;
    expect(updatedItems[0].quantity).toBe(5);
  });

  it('should remove item when quantity is set to 0', () => {
    useCartStore.setState({
      items: [{ ...mockItem, quantity: 1 }],
    });

    const { updateQuantity } = useCartStore.getState();
    updateQuantity('test-ramen', 0);
    
    const updatedItems = useCartStore.getState().items;
    expect(updatedItems).toHaveLength(0);
  });

  it('should clear the cart', () => {
    useCartStore.setState({
      items: [
        { ...mockItem, quantity: 2 },
        { ...mockItem, id: 'test-2', quantity: 1 },
      ],
    });

    const { clearCart } = useCartStore.getState();
    clearCart();
    
    const updatedItems = useCartStore.getState().items;
    expect(updatedItems).toHaveLength(0);
  });

  it('should calculate total items correctly', () => {
    useCartStore.setState({
      items: [
        { ...mockItem, quantity: 2 },
        { ...mockItem, id: 'test-2', quantity: 3 },
      ],
    });

    const { getTotalItems } = useCartStore.getState();
    expect(getTotalItems()).toBe(5);
  });

  it('should calculate total price correctly', () => {
    useCartStore.setState({
      items: [
        { ...mockItem, quantity: 2 }, // 14.99 * 2 = 29.98
        { ...mockItem, id: 'test-2', price: 10, quantity: 1 }, // 10
      ],
    });

    const { getTotalPrice } = useCartStore.getState();
    expect(getTotalPrice()).toBeCloseTo(39.98);
  });

  it('should toggle cart open state', () => {
    const { toggleCart } = useCartStore.getState();
    
    expect(useCartStore.getState().isCartOpen).toBe(false);
    
    toggleCart();
    expect(useCartStore.getState().isCartOpen).toBe(true);
    
    toggleCart();
    expect(useCartStore.getState().isCartOpen).toBe(false);
  });
});
