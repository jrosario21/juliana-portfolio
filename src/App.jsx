import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import Fashion from './pages/Fashion'
import Orangeburg from './pages/projects/Orangeburg'
import Jamestown from './pages/projects/Jamestown'
import SevenPortal from './pages/projects/SevenPortal'
import Elements from './pages/projects/Elements'
import StyleCo from './pages/projects/StyleCo'
import JLo from './pages/projects/JLo'

const TITLES = {
  '/': 'Juliana Rosario — Lead Product Designer',
  '/work': 'Software work — Juliana Rosario',
  '/fashion': 'Fashion work — Juliana Rosario',
  '/work/orangeburg': 'Orangeburg Fiber — Juliana Rosario',
  '/work/jamestown': 'Jamestown BPU Fiber — Juliana Rosario',
  '/work/seven-portal': 'Seven-Portal Platform — Juliana Rosario',
  '/work/elements': 'Elements Design Libraries — Juliana Rosario',
  '/work/styleco': 'Style & Co. — Juliana Rosario',
  '/work/kohls': "Kohl's — Juliana Rosario",
}

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(pathname)

  // Give every page its own title, and move screen-reader focus to the new page on navigation
  useEffect(() => {
    document.title = TITLES[pathname] || TITLES['/']
    if (prevPath.current === pathname) return
    prevPath.current = pathname
    if (!hash) {
      const main = document.getElementById('main')
      if (main) main.focus({ preventScroll: true })
    }
  }, [pathname])

  useEffect(() => {
    if (hash) {
      // Wait for page to render then scroll to the element
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <a
        href="#main"
        className="skip-link"
        onClick={e => {
          e.preventDefault()
          const main = document.getElementById('main')
          if (main) { main.focus(); main.scrollIntoView() }
        }}
      >Skip to main content</a>
      <ScrollToHash />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/work/orangeburg" element={<Orangeburg />} />
        <Route path="/work/jamestown" element={<Jamestown />} />
        <Route path="/work/seven-portal" element={<SevenPortal />} />
        <Route path="/work/elements" element={<Elements />} />
        <Route path="/work/styleco" element={<StyleCo />} />
        <Route path="/work/kohls" element={<JLo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
