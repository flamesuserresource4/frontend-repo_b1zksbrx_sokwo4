import { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Lumière Diamond Ring',
    price: 12900,
    metal: 'Platinum',
    stone: 'D-F VVS1 Diamond',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Éclat Tennis Bracelet',
    price: 18400,
    metal: '18k White Gold',
    stone: 'Round Brilliant Diamonds',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Celeste Pendant',
    price: 5400,
    metal: '18k Rose Gold',
    stone: 'Pink Morganite',
    image: 'https://images.unsplash.com/photo-1597532842922-dd855db3e562?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDZWxlc3RlJTIwUGVuZGFudHxlbnwwfDB8fHwxNzYyNDc4MjI1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

function formatPrice(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}

export default function ProductGallery() {
  const [active, setActive] = useState(products[0]);

  return (
    <section id="gallery" className="bg-[linear-gradient(180deg,#fff,rgba(255,252,246,1))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Signature Highlights</h2>
            <p className="mt-2 text-gray-600">Hand-finished pieces with luminous brilliance.</p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Macro product viewer */}
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-100">
            <img
              src={active.image}
              alt={active.name}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* glass reflection */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,240,200,0.25),transparent_50%)]" />
            <div className="pointer-events-none absolute inset-x-0 -top-1/2 h-1/2 bg-gradient-to-b from-white/70 to-transparent opacity-60 mix-blend-screen" />
          </div>

          {/* product list */}
          <div className="grid content-start gap-6">
            {products.map((p) => (
              <motion.button
                key={p.id}
                onClick={() => setActive(p)}
                whileHover={{ scale: 1.01 }}
                className={`group grid grid-cols-[80px_1fr_auto] items-center gap-5 rounded-2xl border p-4 text-left transition ${
                  active.id === p.id ? 'border-amber-400 shadow-[0_0_0_4px_rgba(255,215,128,0.15)]' : 'border-black/10'
                }`}
              >
                <div className="h-20 w-20 overflow-hidden rounded-xl bg-neutral-100">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gray-900">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.metal} • {p.stone}</p>
                </div>
                <div className="text-right">
                  <div className="text-base font-medium text-gray-900">{formatPrice(p.price)}</div>
                  <span className="mt-2 inline-block rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 px-4 py-1 text-xs text-black shadow hover:shadow-md">View</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
