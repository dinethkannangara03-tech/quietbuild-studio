import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Work from './pages/Work'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
