import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black text-white grid place-items-center font-bold">D</div>
            <span className="font-semibold tracking-tight text-slate-900">Dialsmith</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#custom" className="hover:text-slate-900">Customisation</a>
            <a href="#process" className="hover:text-slate-900">Process</a>
            <a href="#booking" className="hover:text-slate-900">Book</a>
          </nav>
          <a href="#booking" className="hidden md:inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-black transition-colors">Book a call</a>
          <button className="md:hidden inline-flex items-center p-2" onClick={() => setOpen(v=>!v)} aria-label="Toggle Menu">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-700">
              <a onClick={()=>setOpen(false)} href="#custom" className="px-2 py-2 rounded hover:bg-slate-100">Customisation</a>
              <a onClick={()=>setOpen(false)} href="#process" className="px-2 py-2 rounded hover:bg-slate-100">Process</a>
              <a onClick={()=>setOpen(false)} href="#booking" className="px-2 py-2 rounded hover:bg-slate-100">Book</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
