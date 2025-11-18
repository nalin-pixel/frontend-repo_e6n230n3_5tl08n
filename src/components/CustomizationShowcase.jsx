function CustomizationShowcase() {
  const items = [
    { title: 'Dial', desc: 'Sunburst, matte, enamel or aged patina with custom indices and textures.' },
    { title: 'Hands', desc: 'Mercedes, baton or syringe hands in polished, blued or lumed finishes.' },
    { title: 'Bezel', desc: 'Dive, GMT or smooth bezels with ceramic or brushed inserts.' },
    { title: 'Case', desc: 'Stainless, titanium or DLC with brushed, polished or sandblasted treatments.' },
    { title: 'Crystal', desc: 'Sapphire with AR coating or vintage‑style domed acrylic.' },
    { title: 'Strap', desc: 'Leather, oyster, jubilee, rubber or NATO straps to complete the look.' },
  ]

  return (
    <section id="custom" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Customisation options</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Choose every detail. We guide you through combinations that match your style and lifestyle.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomizationShowcase
