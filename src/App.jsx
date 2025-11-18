import Hero from './components/Hero'
import PhoneMock from './components/PhoneMock'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top hero with Spline background */}
      <Hero />

      {/* Mobile app mockup and actions */}
      <section className="relative -mt-20 md:-mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-800/60 backdrop-blur p-6 md:p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <PhoneMock />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Modern mobile interface</h2>
                <p className="mt-4 text-white/75 text-lg">Before/after split view with transparent checkerboard, large primary actions, and premium glassy surfaces.</p>
                <ul className="mt-6 space-y-3 text-white/80">
                  <li>• Remove Background</li>
                  <li>• HD Cutout</li>
                  <li>• Erase</li>
                  <li>• Download PNG</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <footer className="py-10 text-center text-white/50">
        Built for high-clarity marketing visuals
      </footer>
    </div>
  )
}

export default App
