import Header from './components/Header'
import Hero from './components/Hero'
import CustomizationShowcase from './components/CustomizationShowcase'
import Process from './components/Process'
import Booking from './components/Booking'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Header />
      <Hero />
      <CustomizationShowcase />
      <Process />
      <Booking />
      <footer className="py-12 text-center text-sm text-slate-500 border-t border-slate-200">
        © {new Date().getFullYear()} Dialsmith · Bespoke watchmaking
      </footer>
    </div>
  )
}

export default App
