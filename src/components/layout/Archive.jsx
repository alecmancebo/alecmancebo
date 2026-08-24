import { useState, useMemo } from 'react';
import TypewriterText from '../effects/TypewriterText';
import ProjectDetail from './ProjectDetail';
import { useLanguage } from '../effects/LanguageContext';
import {
  projects,
  projectPageImages,
  projectDetailImages,
  projectPageImageSpans,
  projectPageTextEveryImages,
  getArchiveProjects // Importamos la nueva función
} from './PorfolioData';

export default function Archive() {
  const { language } = useLanguage();
  const [viewingProject, setViewingProject] = useState(null);

  // Cargamos los proyectos configurados específicamente para el Archivo
  const archiveProjects = useMemo(() => getArchiveProjects(language), [language]);

  const getNextProject = (projectId) => {
    const currentIndex = projects.findIndex((item) => item.id === projectId);
    if (currentIndex === -1) return projects[0];
    return projects[(currentIndex + 1) % projects.length];
  };

  const getPreviousProject = (projectId) => {
    const currentIndex = projects.findIndex((item) => item.id === projectId);
    if (currentIndex === -1) return projects[projects.length - 1];
    return projects[(currentIndex - 1 + projects.length) % projects.length];
  };

  const openProjectDetail = (project) => {
    const baseProject = projects.find((item) => item.id === project.id || item.title === project.title);

    const detailImages =
      (baseProject && projectPageImages[baseProject.id]) ??
      (baseProject && projectDetailImages[baseProject.id]) ??
      project.images ??
      [];

    const detailSpans = (baseProject && projectPageImageSpans[baseProject.id]) ?? [];
    const detailMediaItems = detailImages.map((src, index) => ({
      src,
      span: detailSpans[index] ?? 1,
    }));

    setViewingProject({
      ...project,
      id: baseProject?.id ?? project.id,
      category: baseProject?.category ?? project.category,
      projectUrl: baseProject?.projectUrl ?? project.projectUrl ?? '#',
      year: project.year || '2024',
      disciplines: project.disciplines ?? baseProject?.category,
      textEveryImages: (baseProject && projectPageTextEveryImages[baseProject.id]) ?? 1,
      images: detailMediaItems,
      nextProject: getNextProject(baseProject?.id ?? project.id),
      previousProject: getPreviousProject(baseProject?.id ?? project.id),
    });
  };

  if (viewingProject) {
    return (
      <ProjectDetail
        project={viewingProject}
        onBack={() => setViewingProject(null)}
        onOpenProject={openProjectDetail}
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
              // Aquí leemos la propiedad span directamente desde siteContent.js
              gridColumn: `span ${project.span || 1}`, 
            }}
          >
            {/* Contenedor de la imagen a 1 sola columna forzada */}
            <div className="grid-view__media" style={{ gridTemplateColumns: '1fr' }}>
              <img 
                src={project.images[0]} 
                alt={`${project.title} cover`} 
                loading="lazy" 
              />
            </div>
            
            {/* Textos heredados de grid-view */}
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