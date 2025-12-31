import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';

/**
 * Header Component
 * 
 * Main navigation header with logo and site title.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 group"
        >
          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <UtensilsCrossed className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Ramen no Hena
            </h1>
            <p className="text-xs text-muted-foreground">ラーメンの店</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
