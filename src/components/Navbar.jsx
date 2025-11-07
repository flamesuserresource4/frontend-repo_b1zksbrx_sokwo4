import { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-xl tracking-wide font-serif text-gray-900">
              Aurelia
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#collections" className="text-gray-800/80 hover:text-black transition-colors">Collections</a>
              <a href="#gallery" className="text-gray-800/80 hover:text-black transition-colors">Highlights</a>
              <a href="#story" className="text-gray-800/80 hover:text-black transition-colors">Craftsmanship</a>
              <a href="#contact" className="text-gray-800/80 hover:text-black transition-colors">Boutiques</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button aria-label="Account" className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <User className="h-5 w-5 text-black" />
            </button>
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <ShoppingCart className="h-5 w-5 text-black" />
            </button>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4 origin-top animate-in slide-in-from-top fade-in">
            <div className="grid gap-2 text-sm">
              <a onClick={() => setOpen(false)} href="#collections" className="py-2">Collections</a>
              <a onClick={() => setOpen(false)} href="#gallery" className="py-2">Highlights</a>
              <a onClick={() => setOpen(false)} href="#story" className="py-2">Craftsmanship</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-2">Boutiques</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
