function Process() {
  const steps = [
    {
      title: 'Book',
      desc: 'Pick a time that suits you. We confirm details and a video link.'
    },
    {
      title: 'Consult',
      desc: 'On the call we explore styles, materials and fit. We mock up options live.'
    },
    {
      title: 'Craft',
      desc: 'Our watchmaker sources components and hand‑assembles your piece.'
    },
    {
      title: 'Deliver',
      desc: 'We ship in a protective case with certificate and warranty.'
    }
  ]

  return (
    <section id="process" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">How it works</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="p-6 rounded-xl border border-slate-200 bg-white">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white grid place-items-center text-sm font-semibold">{i+1}</div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
