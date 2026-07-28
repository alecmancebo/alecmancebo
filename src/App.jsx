import Header from './components/layout/Header'
import ViewFilterSection from './components/layout/ViewFilterSection'
import Footer from './components/layout/Footer'
import { useState, useEffect } from 'react'
import { LanguageProvider } from './components/effects/LanguageContext' // Importa el Provider

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.className = theme === 'light' ? 'theme-light' : ''
  }, [theme])

  return (
    <LanguageProvider>
      <div className="portfolio">
        <Header setTheme={setTheme} />
        <ViewFilterSection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
