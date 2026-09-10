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
  
  // 1. Añadimos la detección de /archive como ruta inicial
  const getInitialPage = () => {
    const hash = window.location.hash;
    if (hash.startsWith('#/archive')) return 'archive';
    if (hash.includes('#/about')) return 'about';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
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

  // 2. Controlamos la navegación de /archive/proyecto
  useEffect(() => {
    const handlePopState = (event) => {
      skipHistoryEffectRef.current = true;
      const hash = window.location.hash;
      
      if (hash.includes('#/about')) {
        setCurrentPage('about');
        setViewingProject(null);
      } else if (hash.startsWith('#/archive/')) {
        setCurrentPage('archive');
        if (event.state?.portfolioProject) {
          setViewingProject(event.state.portfolioProject);
        }
      } else if (hash.includes('#/archive')) {
        setCurrentPage('archive');
        setViewingProject(null);
      } else if (hash.startsWith('#/project/')) {
        setCurrentPage('home');
        if (event.state?.portfolioProject) {
          setViewingProject(event.state.portfolioProject);
        }
      } else {
        setCurrentPage('home');
        setViewingProject(null);
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // 3. Escribimos la URL correcta dependiendo de si estamos en Home o en Archive
  // NUEVO: Función para limpiar el título y convertirlo en URL (ej: "ECHAR RAÍCES" -> "echar-raices")
  const getSlug = (title) => {
    if (!title) return '';
    return title.toString().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quita tildes
      .replace(/[^a-z0-9]+/g, '-') // Cambia espacios y símbolos por guiones
      .replace(/(^-|-$)+/g, ''); // Limpia guiones sueltos a los lados
  };

  // 3. Escribimos la URL usando el nombre (slug) en lugar del ID
  useEffect(() => {
    if (skipHistoryEffectRef.current) {
      skipHistoryEffectRef.current = false;
      return;
    }

    let newHash = '';
    if (viewingProject) {
      const slug = getSlug(viewingProject.title);
      // Si estamos en Archive, la URL será #/archive/nombre, si no #/project/nombre
      newHash = currentPage === 'archive' 
        ? `#/archive/${slug}` 
        : `#/project/${slug}`;
    } else if (currentPage !== 'home') {
      newHash = `#/${currentPage}`;
    }

    const newUrl = newHash 
      ? window.location.pathname + window.location.search + newHash 
      : window.location.pathname + window.location.search;

    window.history.pushState(
      getHistoryState(currentPage, viewingProject),
      '',
      newUrl
    );
  }, [currentPage, viewingProject]);
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
          
          {/* 4. PASAMOS EL ESTADO DEL PROYECTO AL ARCHIVO */}
          {currentPage === 'archive' && (
            <Archive 
              viewingProject={viewingProject}
              setViewingProject={setViewingProject}
            />
          )}
          
          <Footer />
        </div>
    </LanguageProvider>
  )
}

export default App;