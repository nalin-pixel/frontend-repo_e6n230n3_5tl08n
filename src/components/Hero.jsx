function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(2,6,23,0.9),transparent)]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs mb-6">
          Tailored timepieces, made with you
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
          Dialsmith
        </h1>
        <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
          A bespoke watch atelier that modifies and personalises timepieces to your taste. Book a one‑to‑one consultation where we explore dials, hands, bezels and finishes together.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#booking" className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors">Book a consultation</a>
          <a href="#custom" className="inline-flex items-center rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-medium border border-slate-200 hover:bg-slate-50 transition-colors">See custom options</a>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-600">
          <div className="p-4 bg-white/70 backdrop-blur border border-slate-200 rounded-xl">Dials</div>
          <div className="p-4 bg-white/70 backdrop-blur border border-slate-200 rounded-xl">Hands</div>
          <div className="p-4 bg-white/70 backdrop-blur border border-slate-200 rounded-xl">Bezels</div>
          <div className="p-4 bg-white/70 backdrop-blur border border-slate-200 rounded-xl">Straps</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
