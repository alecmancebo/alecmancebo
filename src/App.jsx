import Header from './components/layout/Header'
import ViewFilterSection from './components/layout/ViewFilterSection'
import Footer from './components/layout/Footer'
import { useState, useEffect } from 'react'
import { LanguageProvider } from './components/effects/LanguageContext' 
import CustomCursor from './components/effects/CustomCursor';
import About from './components/layout/About';
import Playground from './components/layout/Playground';

function App() {
  const [theme, setTheme] = useState('dark')
  const [showSplash, setShowSplash] = useState(true)
  const [currentPage, setCurrentPage] = useState('home');
  const [viewingProject, setViewingProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToPage = (page) => {
    setCurrentPage(page)
    setViewingProject(null)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    document.body.className = theme === 'light' ? 'theme-light' : ''
  }, [theme])

  return (
    <LanguageProvider>
        <div className={`portfolio ${isMenuOpen ? 'portfolio--menu-open' : ''}`}>
          <CustomCursor />
          <Header
            setTheme={setTheme}
            onNavigatePage={navigateToPage}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          
          {currentPage === 'home' && (
            <ViewFilterSection
              viewingProject={viewingProject}
              setViewingProject={setViewingProject}
            />
          )}
          {currentPage === 'about' && <About />}
          {currentPage === 'playground' && <Playground setCurrentPage={setCurrentPage} />}
          
          <Footer />
        </div>
     
    </LanguageProvider>
  )
}

export default App