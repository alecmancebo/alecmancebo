import { useState, useMemo, useEffect, useRef } from 'react';
import TypewriterText from '../effects/TypewriterText';
import ProjectDetail from './ProjectDetail';
import { useLanguage } from '../effects/LanguageContext';
import {
  projects,
  projectPageImages,
  projectDetailImages,
  projectPageImageSpans,
  projectPageTextEveryImages,
  getArchiveProjects
} from './PorfolioData';

export default function Archive() {
  const { language } = useLanguage();
  const [savedArchiveState] = useState(() => {
    try {
      const savedProject = window.localStorage.getItem('portfolio-archive-project')
      return {
        project: savedProject ? JSON.parse(savedProject) : null,
        hasArchiveHistory: window.history.state?.portfolioPage === 'archive',
      }
    } catch {
      return { project: null, hasArchiveHistory: false }
    }
  });
  const [viewingProject, setViewingProject] = useState(() => {
    if (savedArchiveState.hasArchiveHistory) {
      return window.history.state.portfolioArchiveProject ?? null
    }

    return window.history.state?.portfolioPage ? null : savedArchiveState.project
  });
  const skipHistoryEffectRef = useRef(savedArchiveState.hasArchiveHistory || !savedArchiveState.project);

  const archiveProjects = useMemo(() => getArchiveProjects(language), [language]);

  useEffect(() => {
    try {
      if (viewingProject) {
        window.localStorage.setItem('portfolio-archive-project', JSON.stringify(viewingProject))
      } else {
        window.localStorage.removeItem('portfolio-archive-project')
      }
    } catch {
      // Ignore storage failures.
    }
  }, [viewingProject]);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state?.portfolioPage !== 'archive') {
        return
      }

      skipHistoryEffectRef.current = true
      setViewingProject(event.state.portfolioArchiveProject ?? null)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, []);

  useEffect(() => {
    if (skipHistoryEffectRef.current) {
      skipHistoryEffectRef.current = false
      return
    }

    window.history.pushState(
      {
        ...window.history.state,
        portfolioPage: 'archive',
        portfolioArchiveProject: viewingProject,
      },
      '',
      window.location.href,
    )
  }, [viewingProject]);

  const getNextProject = (currentProject) => {
    const normalizedCurrentTitle = currentProject.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const currentIndex = archiveProjects.findIndex((item) => {
      const normalizedItemTitle = item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return normalizedItemTitle === normalizedCurrentTitle;
    });

    if (currentIndex === -1) return archiveProjects[0];
    return archiveProjects[(currentIndex + 1) % archiveProjects.length];
  };

  const getPreviousProject = (currentProject) => {
    const normalizedCurrentTitle = currentProject.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const currentIndex = archiveProjects.findIndex((item) => {
      const normalizedItemTitle = item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return normalizedItemTitle === normalizedCurrentTitle;
    });

    if (currentIndex === -1) return archiveProjects[archiveProjects.length - 1];
    return archiveProjects[(currentIndex - 1 + archiveProjects.length) % archiveProjects.length];
  };

const openProjectDetail = (project) => {
    const normalizedProjectTitle = project.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    // Busca si existe en la página principal, pero si no existe, no pasa nada.
    const baseProject = projects.find((item) => {
      const normalizedItemTitle = item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return item.id === project.id || normalizedItemTitle === normalizedProjectTitle;
    });

    // Esta es la clave: usamos el ID de la base principal si existe, y si no, el ID del propio archivo ('07', '08', etc.)
    const resolvedId = baseProject?.id ?? project.id;

    // Buscamos las imágenes y los spans usando el resolvedId
    const detailImages = projectPageImages[resolvedId] ?? projectDetailImages[resolvedId] ?? project.images ?? [];
    const detailSpans = projectPageImageSpans[resolvedId] ?? [];
    const detailMediaItems = detailImages.map((src, index) => ({
      src,
      span: detailSpans[index] ?? 1,
    }));

    setViewingProject({
      ...project,
      id: resolvedId,
      category: baseProject?.category ?? project.category,
      projectUrl: baseProject?.projectUrl ?? project.projectUrl ?? '#',
      year: project.year || '2024',
      disciplines: project.disciplines ?? baseProject?.category,
      textEveryImages: projectPageTextEveryImages[resolvedId] ?? 1,
      images: detailMediaItems,
      nextProject: getNextProject(project),
      previousProject: getPreviousProject(project),
    });
  };

  if (viewingProject) {
    return (
      <ProjectDetail
        key={viewingProject.id}
        project={viewingProject}
        onBack={() => setViewingProject(null)}
        onOpenProject={openProjectDetail}
        backText="[BACK TO ARCHIVE]"
      />
    );
  }

  return (
    <section 
      className="grid-view" 
      style={{ padding: 'var(--space-12-xl) var(--layout-pad-x-xl) var(--space-10-xl)', minHeight: '80vh' }} 
      aria-label="Archive view"
    >
      <div className="grid-view__canvas">
        {archiveProjects.map((project) => (
          <article
            key={project.id}
            className="grid-view__card"
            onClick={() => openProjectDetail(project)}
            style={{
              cursor: 'pointer',
              gridColumn: `span ${project.span || 1}`, 
            }}
          >
            <div className="grid-view__media" style={{ gridTemplateColumns: '1fr' }}>
              <img 
                src={project.images[0]} 
                alt={`${project.title} cover`} 
                loading="lazy" 
              />
            </div>
            <h3 className="grid-view__title">
              <TypewriterText text={`${project.title} [${project.year}]`} />
            </h3>
            <p className="grid-view__meta">
              {project.disciplines.split(' / ').map((discipline, index, list) => (
                <span key={`${project.id}-discipline-${index}`}>
                  <TypewriterText text={discipline} />
                  {index < list.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}