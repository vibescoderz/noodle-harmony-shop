# 🍜 Ichiban Ramen - Menu Shop

A beautiful, modern ramen menu shop built with React, TypeScript, and a clean architecture approach.

## Features

- **Menu Display**: Grid layout of menu items with images, prices, and descriptions
- **Category Filtering**: Filter by ramen, sides, drinks, and desserts
- **Search**: Real-time search across menu items
- **Shopping Cart**: Add items, adjust quantities, view totals
- **Checkout**: Form validation with Zod, order summary
- **Responsive Design**: Mobile-first, works on all devices
- **Animations**: Smooth transitions and micro-interactions

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Zustand** - State management
- **Zod** - Schema validation
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Component library
- **React Hook Form** - Form handling
- **Vitest** - Testing framework

## Project Structure

```
src/
├── assets/              # Image assets
├── components/
│   ├── cart/            # Cart-related components
│   │   ├── CartButton.tsx
│   │   ├── CartItem.tsx
│   │   └── CartSidebar.tsx
│   ├── layout/          # Layout components
│   │   └── Header.tsx
│   ├── menu/            # Menu-related components
│   │   ├── CategoryFilter.tsx
│   │   ├── MenuGrid.tsx
│   │   ├── MenuItem.tsx
│   │   └── SearchBar.tsx
│   └── ui/              # Shadcn UI components
├── data/
│   └── menuData.ts      # Menu items and categories
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/
│   ├── Index.tsx        # Main menu page
│   ├── Checkout.tsx     # Checkout page
│   └── NotFound.tsx     # 404 page
├── schemas/
│   ├── order.ts         # Zod validation schemas
│   └── __tests__/       # Schema tests
├── store/
│   ├── cartStore.ts     # Cart state (Zustand)
│   ├── menuStore.ts     # Menu filter state (Zustand)
│   └── __tests__/       # Store tests
└── types/
    └── menu.ts          # TypeScript type definitions
```

## Design System

The app uses a custom design system with:

- **Color Palette**: Warm, cozy izakaya-inspired theme
  - Dark backgrounds (like a ramen shop at night)
  - Amber/orange accents (lantern glow)
  - Soft red highlights (noren curtains)
- **Typography**: 
  - Display: Playfair Display
  - Body: Noto Sans JP
- **Components**: Custom Shadcn variants with glow effects

## Testing

Run tests with Vitest:

```bash
npm run test
```

### Test Coverage

- **Cart Store Tests**: Add/remove items, quantity updates, totals
- **Menu Store Tests**: Search queries, category filtering
- **Order Schema Tests**: Form validation rules

## Usage

### Adding Items to Cart

```tsx
import { useCartStore } from '@/store/cartStore';

const { addItem } = useCartStore();
addItem(menuItem);
```

### Filtering Menu

```tsx
import { useMenuStore } from '@/store/menuStore';

const { setSearchQuery, setSelectedCategory } = useMenuStore();
setSearchQuery('tonkotsu');
setSelectedCategory('ramen');
```

### Form Validation

```tsx
import { orderSchema } from '@/schemas/order';

const result = orderSchema.safeParse(formData);
if (result.success) {
  // Process order
}
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

---

**URL**: https://lovable.dev/projects/27164c13-2ee9-46bd-a296-b16b1a2da087

Built with [Lovable](https://lovable.dev)
