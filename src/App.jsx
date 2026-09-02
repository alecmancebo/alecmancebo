import Header from './components/layout/Header'
import ViewFilterSection from './components/layout/ViewFilterSection'
import Footer from './components/layout/Footer'
import { useState, useEffect, useRef } from 'react'
import { LanguageProvider } from './components/effects/LanguageContext' 
import CustomCursor from './components/effects/CustomCursor';
import About from './components/layout/About';
import Archive from './components/layout/Archive';
import WebGLLiquidSplash from './components/layout/WebGLLiquidSplash';

window.isSplashComplete = false;

function App() {
  const [theme, setTheme] = useState('dark')
  const [showSplash, setShowSplash] = useState(true)
  
  // 1. Estados limpios: siempre empiezan en la página principal ('home') y sin proyectos abiertos
  const [currentPage, setCurrentPage] = useState('home');
  const [viewingProject, setViewingProject] = useState(null);
  
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
    // 2. Al recargar la página, sobrescribimos el historial del navegador para forzar el inicio
    window.history.replaceState(
      getHistoryState('home', null),
      '',
      window.location.href,
    )

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

  // Se ha eliminado completamente el guardado en window.localStorage para evitar que retenga la última vista

  return (
    <LanguageProvider>
        {showSplash && <WebGLLiquidSplash onComplete={() => {
          setShowSplash(false);
          
          window.isVisualsReady = true;
          window.dispatchEvent(new Event('visualsReady'));
          
          setTimeout(() => {
            window.isSplashComplete = true;
            window.dispatchEvent(new Event('splashComplete'));
          }, 600); 
          
        }} />}
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