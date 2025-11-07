import { motion } from 'framer-motion';

const categories = [
  { key: 'rings', label: 'Rings', image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSaW5nc3xlbnwwfDB8fHwxNzYyNDc4MjI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { key: 'necklaces', label: 'Necklaces', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1600&auto=format&fit=crop' },
  { key: 'bracelets', label: 'Bracelets', image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSaW5nc3xlbnwwfDB8fHwxNzYyNDc4MjI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { key: 'bridal', label: 'Bridal', image: 'https://images.unsplash.com/photo-1521774971864-62e842046145?q=80&w=1600&auto=format&fit=crop' },
  { key: 'mens', label: "Men's Collection", image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop' },
];

export default function CategoryShowcase() {
  return (
    <section id="collections" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Explore by Category</h2>
            <p className="mt-2 text-gray-600">Curated selections in precious metals and rare stones.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.key}
              href="#gallery"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-100"
            >
              <div className="relative h-64">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                {/* soft reflection gloss */}
                <div className="pointer-events-none absolute inset-x-0 -top-1/2 h-1/2 bg-gradient-to-b from-white/60 to-transparent opacity-40 mix-blend-screen" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-md backdrop-blur">
                  {cat.label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
