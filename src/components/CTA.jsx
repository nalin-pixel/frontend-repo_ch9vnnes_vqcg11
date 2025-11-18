import { ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Create premium screenshots in minutes</h3>
          <p className="mt-2 text-white/70">Perfect for Play Store listings, social promos, and banner creatives.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#download" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold px-6 py-3 shadow-lg shadow-sky-500/30 hover:brightness-110 transition">
              Download PNG <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white px-6 py-3 hover:bg-white/20 transition">
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
