import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryShowcase from './components/CategoryShowcase';
import ProductGallery from './components/ProductGallery';
import Craftsmanship from './components/Craftsmanship';

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-serif text-2xl">Aurelia</h4>
          <p className="mt-2 text-white/70">Fine jewelry meticulously crafted from precious metals and rare stones.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="mb-2 text-white/60">Collections</p>
            <ul className="space-y-1 text-white/80">
              <li>Rings</li>
              <li>Necklaces</li>
              <li>Bracelets</li>
              <li>Bridal</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-white/60">Maison</p>
            <ul className="space-y-1 text-white/80">
              <li>About</li>
              <li>Craft</li>
              <li>Care</li>
              <li>Boutiques</li>
            </ul>
          </div>
        </div>
        <div className="text-sm">
          <p className="text-white/60">Newsletter</p>
          <div className="mt-3 flex items-center gap-2">
            <input className="w-full rounded-full bg-white/10 px-4 py-2 placeholder-white/50 outline-none focus:ring-2 focus:ring-amber-400" placeholder="Email address" />
            <button className="rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 px-4 py-2 text-black">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">© {new Date().getFullYear()} Aurelia Maison</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <CategoryShowcase />
        <ProductGallery />
        <Craftsmanship />
      </main>
      <Footer />
    </div>
  );
}
