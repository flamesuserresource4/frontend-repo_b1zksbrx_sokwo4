import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Craftsmanship() {
  return (
    <section id="story" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 text-amber-600">
            <Star className="h-4 w-4" />
            <span className="uppercase tracking-[0.3em] text-xs">Heritage Craft</span>
            <Star className="h-4 w-4" />
          </div>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-gray-900">The Art of Light</h2>
          <p className="mt-4 text-gray-600">
            Each facet is polished by hand to capture light with unmatched brilliance. Our ateliers combine modern precision with old-world mastery to craft heirlooms for generations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-amber-200/60 bg-gradient-to-br from-white via-white to-amber-50/50 p-6 shadow-sm"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
              <h3 className="font-serif text-xl text-gray-900">{['Selection','Setting','Finishing'][i-1]}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {[
                  'We source conflict-free stones with exceptional cut, color, and clarity.',
                  'Metals are forged and settings engineered for enduring comfort and security.',
                  'Final polish reveals a mirror-like glow, enhancing every scintillation.'
                ][i-1]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* soft shimmer on hover background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_60%_at_70%_20%,rgba(255,220,140,0.15),transparent_60%)]" />
    </section>
  );
}
