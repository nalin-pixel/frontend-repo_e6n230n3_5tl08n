import { useState } from 'react'

function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', preferred_date: '', preferred_time: '', notes: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Submitting...' })
    try {
      const res = await fetch(`${backend}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ state: 'success', message: 'Thanks! We\'ll email you with a calendar link.' })
      setForm({ name: '', email: '', phone: '', preferred_date: '', preferred_time: '', notes: '' })
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="booking" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Book a consultation</h2>
          <p className="mt-2 text-slate-600">Tell us a little about what you want to create and we\'ll arrange a call.</p>
          <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Preferred date</label>
              <input type="date" value={form.preferred_date} onChange={e=>setForm({...form, preferred_date:e.target.value})} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Preferred time</label>
              <input type="time" value={form.preferred_time} onChange={e=>setForm({...form, preferred_time:e.target.value})} className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Notes</label>
              <textarea rows={4} value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} placeholder="Style, colours, inspiration…" className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <div className="sm:col-span-2 flex items-center gap-3">
              <button disabled={status.state==='loading'} className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors disabled:opacity-60">{status.state==='loading' ? 'Booking…' : 'Request booking'}</button>
              {status.state !== 'idle' && (
                <p className={`text-sm ${status.state==='success' ? 'text-emerald-600' : status.state==='error' ? 'text-red-600' : 'text-slate-600'}`}>{status.message}</p>
              )}
            </div>
          </form>
          <p className="mt-4 text-xs text-slate-500">By booking you agree to be contacted regarding your project. No spam.</p>
        </div>
      </div>
    </section>
  )
}

export default Booking
