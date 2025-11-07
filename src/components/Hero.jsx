import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient and glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white/0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,150,0.18),transparent_40%)]" />
      
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.35em] text-[12px] text-white/70">Maison Aurelia</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-white">
            Timeless Jewelry for the Modern Connoisseur
          </h1>
          <p className="mt-6 max-w-xl text-white/80">
            Crafted with precision in platinum, gold, and rare stones. Discover signature pieces that whisper luxury.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#collections" className="group inline-flex items-center rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 px-6 py-3 text-sm font-medium text-black shadow-[0_0_20px_rgba(255,200,80,0.5)] transition hover:shadow-[0_0_30px_rgba(255,200,80,0.7)]">
              Explore Collections
            </a>
            <a href="#gallery" className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20 transition">
              View Highlights
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
