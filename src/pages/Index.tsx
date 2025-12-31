import { Header } from '@/components/layout/Header';
import { SearchBar } from '@/components/menu/SearchBar';
import { CategoryFilter } from '@/components/menu/CategoryFilter';
import { MenuGrid } from '@/components/menu/MenuGrid';
import { CartButton } from '@/components/cart/CartButton';
import { CartSidebar } from '@/components/cart/CartSidebar';

/**
 * Index Page - Main Menu
 * 
 * Displays the full ramen menu with search, filtering, and cart functionality.
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 px-4 text-center border-b border-border/30">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ramen No 1
            <span className="text-primary block mt-2">di Kaki Gunung Malabar</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ramen no Hena - Rasa autentik dengan cita rasa lokal yang menggugah selera.
          </p>
          
          {/* Search */}
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <main className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <CategoryFilter />
        </div>

        {/* Menu Grid */}
        <MenuGrid />
      </main>

      {/* Cart */}
      <CartButton />
      <CartSidebar />
    </div>
  );
};

export default Index;
