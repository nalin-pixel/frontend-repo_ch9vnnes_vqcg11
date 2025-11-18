import { motion } from 'framer-motion'

function Checkerboard() {
  return (
    <div className="absolute inset-0 bg-[length:18px_18px] bg-[linear-gradient(45deg,rgba(0,0,0,0.08)_25%,transparent_25%),linear-gradient(-45deg,rgba(0,0,0,0.08)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(0,0,0,0.08)_75%),linear-gradient(-45deg,transparent_75%,rgba(0,0,0,0.08)_75%)] bg-[position:0_0,0_9px,9px_-9px,-9px_0] rounded-xl" />
  )
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl shadow-sky-900/20 p-3">
        {/* Notch */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-0.5 h-6 w-40 rounded-b-2xl bg-slate-900/90" />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/70 backdrop-blur border-b border-white/5">
            <div className="text-sm font-semibold text-white/90">BG Remover</div>
            <div className="flex gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            </div>
          </div>

          {/* Before/After split */}
          <div className="relative h-80">
            {/* Left: original photo */}
            <div className="absolute inset-y-0 left-0 right-1/2">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1420&auto=format&fit=crop"
                alt="Original"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right: transparent checkerboard with subject cutout */}
            <div className="absolute inset-y-0 left-1/2 right-0">
              <Checkerboard />
              {/* Subject cutout overlay with soft shadow */}
              <motion.img
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1420&auto=format&fit=crop"
                alt="Cutout"
                className="absolute inset-0 m-auto max-h-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)] [mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)] object-contain"
              />
            </div>

            {/* Divider handle */}
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/20">
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 flex items-center gap-1">
                <span className="h-8 w-8 rounded-full bg-white/10 backdrop-blur border border-white/20" />
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-2 p-3 bg-slate-900/60 backdrop-blur border-t border-white/5">
            <button className="col-span-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-semibold shadow-lg shadow-sky-500/30 hover:brightness-110 transition">Remove Background</button>
            <button className="py-3 rounded-xl bg-slate-800 text-white/90 hover:bg-slate-700 transition">Erase</button>
            <button className="py-3 rounded-xl bg-slate-800 text-white/90 hover:bg-slate-700 transition">HD Cutout</button>
            <button className="col-span-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-400 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:brightness-110 transition">Download PNG</button>
          </div>
        </div>
      </div>

      {/* Glow accents */}
      <div className="pointer-events-none absolute -z-0 inset-0">
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
    </div>
  )
}

export default PhoneMock
