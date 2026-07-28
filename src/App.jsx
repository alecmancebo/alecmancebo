import Header from './components/layout/Header'
import ViewFilterSection from './components/layout/ViewFilterSection'
import Footer from './components/layout/Footer'
import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.className = theme === 'light' ? 'theme-light' : ''
  }, [theme])

  return (
    <div className="portfolio">
      <Header setTheme={setTheme} />
      <ViewFilterSection />
      <Footer />
    </div>
  )
}

export default App
