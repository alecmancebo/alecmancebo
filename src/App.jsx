import Header from './components/layout/Header'
import ViewFilterSection from './components/layout/ViewFilterSection'
import Footer from './components/layout/Footer'
import { useState, useEffect } from 'react'
import { LanguageProvider } from './components/effects/LanguageContext' 
import CustomCursor from './components/effects/CustomCursor';

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.className = theme === 'light' ? 'theme-light' : ''
  }, [theme])

  return (
    <LanguageProvider>
      <div className="portfolio">
        <CustomCursor />
        <Header setTheme={setTheme} />
        <ViewFilterSection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
