import { useEffect, useMemo, useRef, useState } from 'react'
import CodedText from '../effects/CodedText'
import { useLanguage } from '../effects/LanguageContext'
import ProjectDetail from './ProjectDetail'
import {
  projects,
  projectMontageLayout,
  projectDetailImages,
  projectPageImages,
  projectPageImageSpans,
  projectPageTextEveryImages,
  getGridProjects,
} from './PorfolioData';
import { footerReelImages } from './Footer';

const defaultMontageLayout = [
  { src: 'https://picsum.photos/seed/default-1/900/1200', x: 16, y: 50, w: 14, z: 2 },
  { src: 'https://picsum.photos/seed/default-2/900/1200', x: 35, y: 62, w: 9, z: 4 },
  { src: 'https://picsum.photos/seed/default-3/900/1200', x: 53, y: 48, w: 22, z: 3 },
  { src: 'https://picsum.photos/seed/default-4/900/1200', x: 76, y: 44, w: 15, z: 5 },
  { src: 'https://picsum.photos/seed/default-5/900/1200', x: 84, y: 64, w: 10, z: 1 },
]

const spreadPatternX = [-1.2, 1.2, -0.9, 1, 0]
const spreadPatternY = [-1, 1.15, -0.8, 0.9, 0]
const spreadStepX = 0
const spreadStepY = 0

function MobileReel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentImageIndex((previousIndex) => (previousIndex + 1) % footerReelImages.length)
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="mobile-reel" aria-label="Work reel">
      <img src={footerReelImages[currentImageIndex]} alt="Work preview" />
    </div>
  )
}

const clampPercent = (value, min, max) => Math.max(min, Math.min(max, value))

const buildProjectMontage = (project) => {
  const layout = projectMontageLayout[project.id] ?? defaultMontageLayout

  return layout.map((slot, imageIndex) => {
    const baseX = slot.x ?? 0
    const baseY = slot.y ?? 0
    const baseW = slot.w ?? 12
    const baseZ = slot.z ?? 1

    const mobileOverride = slot.mobile ?? {}
    const tabletOverride = slot.tablet ?? {}

    return {
      x: clampPercent(baseX + spreadPatternX[imageIndex % spreadPatternX.length] * spreadStepX, 2, 98),
      y: clampPercent(baseY + spreadPatternY[imageIndex % spreadPatternY.length] * spreadStepY, 6, 94),
      w: baseW,
      z: baseZ,
      key: `${project.id}-${imageIndex}`,
      src: slot.src,
      alt: `${project.title} visual ${imageIndex + 1}`,
      mobileX: clampPercent((mobileOverride.x ?? baseX) + spreadPatternX[imageIndex % spreadPatternX.length] * spreadStepX, 2, 98),
      mobileY: clampPercent((mobileOverride.y ?? baseY) + spreadPatternY[imageIndex % spreadPatternY.length] * spreadStepY, 6, 94),
      mobileW: mobileOverride.w ?? baseW,
      mobileScale: mobileOverride.scale ?? 1.06,
      tabletX: clampPercent((tabletOverride.x ?? baseX) + spreadPatternX[imageIndex % spreadPatternX.length] * spreadStepX, 2, 98),
      tabletY: clampPercent((tabletOverride.y ?? baseY) + spreadPatternY[imageIndex % spreadPatternY.length] * spreadStepY, 6, 94),
      tabletW: tabletOverride.w ?? baseW,
      tabletScale: tabletOverride.scale ?? 1.1,
    }
  })
}

function ViewFilterSection({ viewingProject, setViewingProject }) {
  const [viewMode, setViewMode] = useState('list')
  const [filter, setFilter] = useState('all')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  const [prevProjectId, setPrevProjectId] = useState(null)
  const [isCompactViewport, setIsCompactViewport] = useState(() => (typeof window !== 'undefined' ? window.innerWidth <= 980 : false))
  const [isTabletViewport, setIsTabletViewport] = useState(() => (typeof window !== 'undefined' ? window.innerWidth > 640 && window.innerWidth <= 980 : false))
  const lastWheelChangeRef = useRef(0)
  const browserRef = useRef(null)
  const transitionTimeoutRef = useRef(null)
  const lastActiveProjectIdRef = useRef(projects[0].id)

  const { t, language } = useLanguage()

  const gridProjects = useMemo(() => getGridProjects(language), [language]);

  const filterOptions = [
    { value: 'all', label: t('all') },
    { value: 'web', label: t('web') },
    { value: 'gameDev', label: t('gameDev') },
    { value: 'uxui', label: t('uxui') },
    { value: 'threed', label: t('threed') },
    { value: 'graphic', label: t('graphic') },
  ];

  const nextViewMode = viewMode === 'list' ? 'grid' : 'list'
  const viewLabel = viewMode === 'list' ? t('indexView') : t('gridView')

  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projects
    }
    // Usamos includes para que los proyectos con múltiples categorías se filtren correctamente
    return projects.filter((project) => project.category.includes(filter))
  }, [filter])

  const filteredGridProjects = useMemo(() => {
    if (filter === 'all') {
      return gridProjects
    }
    // Usamos includes para que los proyectos con múltiples categorías se filtren correctamente
    return gridProjects.filter((project) => project.category.includes(filter))
  }, [filter, gridProjects])

  const getImagesForCount = (images, count) => {
    if (images.length >= count) {
      return images.slice(0, count)
    }

    return Array.from({ length: count }, (_, index) => images[index % images.length])
  }

  const positionedGridProjects = useMemo(() => {
    const rowPatterns = [
      [1, 3, 2],
      [3, 2, 1],
    ]

    const rowStarts = [
      [1, 3, 7],
      [1, 5, 8],
    ]

    return filteredGridProjects.map((project, index) => {
      const row = Math.floor(index / 3)
      const slot = index % 3
      const rowPattern = rowPatterns[row % rowPatterns.length]
      const rowStart = rowStarts[row % rowStarts.length]
      const projectSpan = rowPattern[slot]

      return {
        ...project,
        images: getImagesForCount(project.images, isTabletViewport ? 2 : projectSpan),
        gridColumnStart: rowStart[slot],
        gridRow: row + 1,
        gridColumnSpan: projectSpan,
      }
    })
  }, [filteredGridProjects, isTabletViewport])

  const projectsWithMontage = useMemo(
    () => projects.map((project) => ({ ...project, montage: buildProjectMontage(project) })),
    [],
  )

  const activeProject = useMemo(
    () => projectsWithMontage.find((project) => project.id === activeProjectId) ?? projectsWithMontage[0],
    [activeProjectId, projectsWithMontage],
  )

  const getNextProject = (projectId) => {
    if (filteredProjects.length === 0) {
      return null
    }

    const currentIndex = filteredProjects.findIndex((item) => item.id === projectId)

    if (currentIndex === -1) {
      return filteredProjects[0]
    }

    return filteredProjects[(currentIndex + 1) % filteredProjects.length]
  }

  const openProjectDetail = (project) => {
    const baseProject = projects.find((item) => item.id === project.id || item.title === project.title)
    const projectData = projectsWithMontage.find((item) => item.id === baseProject?.id)

    const detailImages =
      (baseProject && projectPageImages[baseProject.id])
      ?? (baseProject && projectDetailImages[baseProject.id])
      ?? project.images
      ?? projectData?.montage.map((image) => image.src)
      ?? []

    const detailSpans = (baseProject && projectPageImageSpans[baseProject.id]) ?? []
    const detailMediaItems = detailImages.map((src, index) => ({
      src,
      span: detailSpans[index] ?? 1,
    }))

    const resolvedProjectId = baseProject?.id ?? project.id

    setViewingProject({
      ...project,
      id: resolvedProjectId,
      category: baseProject?.category ?? project.category,
      projectUrl: baseProject?.projectUrl ?? project.projectUrl ?? '#',
      year: project.year || '2024',
      disciplines: project.disciplines ?? baseProject?.category,
      textEveryImages: (baseProject && projectPageTextEveryImages[baseProject.id]) ?? 1,
      images: detailMediaItems,
      nextProject: getNextProject(resolvedProjectId),
    })
  }

  useEffect(() => {
    if (filteredProjects.length === 0) {
      return
    }

    const isActiveVisible = filteredProjects.some((project) => project.id === activeProjectId)

    if (!isActiveVisible) {
      setActiveProjectId(filteredProjects[0].id)
    }
  }, [activeProjectId, filteredProjects])

  useEffect(() => {
    if (viewMode !== 'list') {
      return
    }

    // Si el activeProjectId cambió, iniciar la transición
    if (activeProjectId !== lastActiveProjectIdRef.current) {
      setPrevProjectId(lastActiveProjectIdRef.current)
      lastActiveProjectIdRef.current = activeProjectId

      // Limpiar timeout anterior si existe
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }

      // Después de 3 segundos, limpiar el proyecto anterior
      transitionTimeoutRef.current = setTimeout(() => {
        setPrevProjectId(null)
      }, 3000)
    }

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
      }
    }
  }, [activeProjectId, viewMode])

  useEffect(() => {
    const handleResize = () => {
      setIsCompactViewport(window.innerWidth <= 980)
      setIsTabletViewport(window.innerWidth > 640 && window.innerWidth <= 980)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (viewMode !== 'list' || filteredProjects.length === 0 || !isCompactViewport) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveProjectId((currentId) => {
        const currentIndex = filteredProjects.findIndex((project) => project.id === currentId)
        const safeIndex = currentIndex === -1 ? 0 : currentIndex
        const nextIndex = (safeIndex + 1) % filteredProjects.length

        return filteredProjects[nextIndex].id
      })
    }, 8000)

    return () => window.clearInterval(intervalId)
  }, [viewMode, filteredProjects, isCompactViewport])

  useEffect(() => {
    const element = browserRef.current;
    if (!element) return;

    const handleWheel = (event) => {
      if (viewMode !== 'list' || filteredProjects.length === 0) {
        return;
      }

      event.preventDefault();

      const now = Date.now();
      if (now - lastWheelChangeRef.current < 160) {
        return;
      }

      lastWheelChangeRef.current = now;

      const direction = event.deltaY >= 0 ? 1 : -1;
      const currentIndex = filteredProjects.findIndex((project) => project.id === activeProjectId);
      const safeIndex = currentIndex === -1 ? 0 : currentIndex;
      const nextIndex = (safeIndex + direction + filteredProjects.length) % filteredProjects.length;

      setActiveProjectId(filteredProjects[nextIndex].id);
    };

    element.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  }, [viewMode, filteredProjects, activeProjectId]);

  if (viewingProject) {
    return (
      <ProjectDetail
        project={viewingProject}
        onBack={() => setViewingProject(null)}
        onOpenProject={openProjectDetail}
      />
    )
  }

  return (
    <section ref={browserRef} className={`browser browser--${viewMode}`} aria-label="Project browser">
      <div className="browser__toolbar">
        <div className="browser__views" role="group" aria-label="View selector">
          <button
            type="button"
            className="browser__control browser__control--active"
            onClick={() => setViewMode(nextViewMode)}
          >
            <CodedText key={viewLabel} text={viewLabel} />
          </button>
        </div>

        <button
          type="button"
          className={`browser__filter-trigger ${isFilterOpen ? 'browser__filter-trigger--active' : ''}`}
          onClick={() => setIsFilterOpen((prevState) => !prevState)}
          aria-expanded={isFilterOpen}
          aria-controls="browser-filter-menu"
        >
          <CodedText text={t('filter')} />
        </button>

        {isFilterOpen ? (
          <div className="browser__filter-menu" id="browser-filter-menu" role="group" aria-label="Filter options">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`browser__filter-option ${filter === option.value ? 'browser__filter-option--active' : ''}`}
                onClick={() => {
                  setFilter(option.value)
                }}
              >
                <CodedText text={option.label} />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {viewMode === 'list' ? (
        <div className="browser__index-view" aria-live="polite">
          <ul className="browser__list">
            {filteredProjects.map((project) => (
              <li key={project.id} className="browser__list-item">
                <button
                  type="button"
                  className={`browser__item-button ${activeProjectId === project.id ? 'browser__item-button--active' : ''}`}
                  onClick={() => openProjectDetail(project)}
                >
                  <span className="browser__item-id">
                    <CodedText text={project.id} />
                  </span>
                  <span className="browser__item-title">
                    <CodedText text={project.title} />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <MobileReel />

          <div className="browser__stage" aria-hidden="true">
            {prevProjectId && (
              projectsWithMontage.find((p) => p.id === prevProjectId)?.montage.map((image, index) => (
                <article
                  key={`prev-${prevProjectId}-${index}`}
                  className="browser__stage-item browser__stage-item--exiting"
                  style={{
                    '--x': `${image.x}%`,
                    '--y': `${image.y}%`,
                    '--w': `${image.w}vw`,
                    '--z': image.z,
                    '--mobile-x': `${image.mobileX}%`,
                    '--mobile-y': `${image.mobileY}%`,
                    '--mobile-w': `${image.mobileW}vw`,
                    '--mobile-scale': image.mobileScale,
                    '--tablet-x': `${image.tabletX}%`,
                    '--tablet-y': `${image.tabletY}%`,
                    '--tablet-w': `${image.tabletW}vw`,
                    '--tablet-scale': image.tabletScale,
                  }}
                  aria-hidden="true"
                >
                  <img src={image.src} alt="" loading="lazy" />
                </article>
              ))
            )}
            {activeProject?.montage.map((image, index) => (
              <article
                key={`${activeProjectId}-${index}`}
                className="browser__stage-item"
                onClick={() => openProjectDetail(activeProject)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openProjectDetail(activeProject);
                  }
                }}
                role="button"
                tabIndex={0}
                style={{
                  '--x': `${image.x}%`,
                  '--y': `${image.y}%`,
                  '--w': `${image.w}vw`,
                  '--z': image.z,
                  '--mobile-x': `${image.mobileX}%`,
                  '--mobile-y': `${image.mobileY}%`,
                  '--mobile-w': `${image.mobileW}vw`,
                  '--mobile-scale': image.mobileScale,
                  '--tablet-x': `${image.tabletX}%`,
                  '--tablet-y': `${image.tabletY}%`,
                  '--tablet-w': `${image.tabletW}vw`,
                  '--tablet-scale': image.tabletScale,
                }}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      ) : (
        <section className="grid-view" aria-live="polite" aria-label="Grid view">
          <div className="grid-view__canvas">
            {positionedGridProjects.map((project) => (
              <article
                key={project.id}
                className="grid-view__card"
                onClick={() => openProjectDetail(project)}
                style={{
                  cursor: 'pointer',
                  '--project-span': project.gridColumnSpan,
                  '--project-start': project.gridColumnStart,
                  '--project-row': project.gridRow,
                }}
              >
                <div className="grid-view__media">
                  {project.images.map((src, index) => (
                    <img key={`${project.id}-${index}`} src={src} alt={`${project.title} image ${index + 1}`} loading="lazy" />
                  ))}
                </div>
                <h3 className="grid-view__title">
                  {project.title} [{project.year}]
                </h3>
                <p className="grid-view__meta">
                  {project.disciplines.split(' / ').map((discipline, index, list) => (
                    <span key={`${project.id}-discipline-${index}`}>
                      {discipline}
                      {index < list.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  )
}

export default ViewFilterSection