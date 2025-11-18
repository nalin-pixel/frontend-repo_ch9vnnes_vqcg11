import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-950/80 pointer-events-none" />

      {/* Headline content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/95 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_10px_30px_rgba(59,130,246,0.35)]"
        >
          Background Remover
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400"> Pro</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/80 text-lg md:text-xl"
        >
          One-tap, studio-grade cutouts. Clean edges, transparent backgrounds, and export-ready PNGs in seconds.
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
