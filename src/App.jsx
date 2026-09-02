import Header from './components/layout/Header'
import ViewFilterSection from './components/layout/ViewFilterSection'
import Footer from './components/layout/Footer'
import { useState, useEffect, useRef } from 'react'
import { LanguageProvider } from './components/effects/LanguageContext' 
import CustomCursor from './components/effects/CustomCursor';
import About from './components/layout/About';
/*import Playground from './components/layout/Playground';*/
import Archive from './components/layout/Archive';
import WebGLLiquidSplash from './components/layout/WebGLLiquidSplash';

function App() {
  const [theme, setTheme] = useState('dark')
  const [showSplash, setShowSplash] = useState(true)
  const [currentPage, setCurrentPage] = useState(() => {
    try {
      const savedPage = window.localStorage.getItem('portfolio-current-page')
      return ['home', 'about', 'archive'].includes(savedPage) ? savedPage : 'home'
    } catch {
      return 'home'
    }
  });
  const [viewingProject, setViewingProject] = useState(() => {
    try {
      const savedProject = window.localStorage.getItem('portfolio-home-project')
      return savedProject ? JSON.parse(savedProject) : null
    } catch {
      return null
    }
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const skipHistoryEffectRef = useRef(true)

  const getHistoryState = (page, project) => ({
    portfolioPage: page,
    portfolioProject: project,
  })

  const navigateToPage = (page) => {
    setCurrentPage(page)
    setViewingProject(null)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    document.body.className = theme === 'light' ? 'theme-light' : ''
  }, [theme])

  useEffect(() => {
    const initialHistoryState = window.history.state
    if (initialHistoryState?.portfolioPage) {
      setCurrentPage(initialHistoryState.portfolioPage)
      setViewingProject(initialHistoryState.portfolioProject ?? null)
    } else {
      window.history.replaceState(
        getHistoryState(currentPage, viewingProject),
        '',
        window.location.href,
      )
    }

    const handlePopState = (event) => {
      const nextPage = event.state?.portfolioPage
      if (!nextPage) {
        skipHistoryEffectRef.current = true
        setCurrentPage('home')
        setViewingProject(null)
        return
      }

      skipHistoryEffectRef.current = true
      setCurrentPage(nextPage)
      setViewingProject(event.state.portfolioProject ?? null)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (skipHistoryEffectRef.current) {
      skipHistoryEffectRef.current = false
      return
    }

    window.history.pushState(
      getHistoryState(currentPage, viewingProject),
      '',
      window.location.href,
    )
  }, [currentPage, viewingProject])

  useEffect(() => {
    try {
      window.localStorage.setItem('portfolio-current-page', currentPage)
      if (viewingProject) {
        window.localStorage.setItem('portfolio-home-project', JSON.stringify(viewingProject))
      } else {
        window.localStorage.removeItem('portfolio-home-project')
      }
    } catch {
      // Ignore storage failures.
    }
  }, [currentPage, viewingProject])

  return (
    <LanguageProvider>
        {showSplash && <WebGLLiquidSplash onComplete={() => setShowSplash(false)} />}
        <div className={`portfolio ${isMenuOpen ? 'portfolio--menu-open' : ''}`}>
          {!showSplash && <CustomCursor />}
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
          {currentPage === 'archive' && <Archive />}
          
          <Footer />
        </div>
     
    </LanguageProvider>
  )
}

export default App