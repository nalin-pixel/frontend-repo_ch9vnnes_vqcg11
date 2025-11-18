import { Sparkles, Scissors, Download, Eraser } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 hover:bg-white/10 transition">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 flex items-center justify-center border border-white/10">
          <Icon className="h-5 w-5 text-white/90" />
        </div>
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-white/70 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 grid sm:grid-cols-2 gap-4">
          <Feature icon={Scissors} title="Pixel-perfect edges" desc="AI-powered matting yields smooth, clean cutouts." />
          <Feature icon={Eraser} title="Smart erase" desc="Gently brush away unwanted areas with feathered strokes." />
          <Feature icon={Sparkles} title="HD Cutout" desc="High-resolution processing for print-quality results." />
          <Feature icon={Download} title="PNG Export" desc="Instant transparent PNGs ready for design and e‑commerce." />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Studio results in your pocket</h2>
          <p className="mt-4 text-white/75 text-lg">Designed for crisp marketing shots, thumbnails, and storefronts. Premium look, zero hassle.</p>
        </div>
      </div>
    </section>
  )
}

export default Features
