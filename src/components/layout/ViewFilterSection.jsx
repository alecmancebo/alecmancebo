import { useEffect, useMemo, useRef, useState } from 'react'
import CodedText from '../effects/CodedText'
import { useLanguage } from '../effects/LanguageContext'


const projects = [
  { id: '001', title: 'TRANSPAPELADES', category: 'editorial', seed: 'transpapelades' },
  { id: '002', title: 'ECHAR RAICES', category: 'branding', seed: 'echar-raices' },
  { id: '003', title: 'ENTRELINEAS', category: 'editorial', seed: 'entrelineas' },
  { id: '004', title: 'Z-TAROT', category: 'digital', seed: 'z-tarot' },
  { id: '005', title: 'GENDERTRASH', category: 'digital', seed: 'gendertrash' },
  { id: '006', title: 'BAILANDO DESTINOS', category: 'branding', seed: 'otrsjs-prfsj' },
  { id: '007', title: 'UNA ULTIMA COSA', category: 'editorial', seed: 'una-ultima-cosa' },
  { id: '008', title: 'AHORA SI QUE SI', category: 'digital', seed: 'ahora-si-que-si' },
]

const gridProjects = [
  {
    id: 'g-01',
    category: 'editorial',
    title: 'MYSTICOPIA',
    year: '2021',
    disciplines: 'CREATIVE DIRECTION / DESIGN DIRECTION',
    images: ['https://picsum.photos/seed/mysticopia-1/840/1080'],
  },
  {
    id: 'g-02',
    category: 'digital',
    title: 'BECKLEY FOUNDATION',
    year: '2022',
    disciplines: 'PHOTOGRAPHY',
    images: [
      'https://picsum.photos/seed/beckley-1/840/1080',
      'https://picsum.photos/seed/beckley-2/840/1080',
      'https://picsum.photos/seed/beckley-3/840/1080',
    ],
  },
  {
    id: 'g-03',
    category: 'branding',
    title: 'PUBLIC GOODS',
    year: '2022 + 2023',
    disciplines: 'ART DIRECTION / PHOTOGRAPHY',
    images: ['https://picsum.photos/seed/public-goods-1/840/1080', 'https://picsum.photos/seed/public-goods-2/840/1080'],
  },
  {
    id: 'g-04',
    category: 'editorial',
    title: 'IN RESIDENCE',
    year: '2021',
    disciplines: 'DESIGN DIRECTION / ART DIRECTION / PHOTOGRAPHY',
    images: ['https://picsum.photos/seed/in-residence-1/840/1080'],
  },
  {
    id: 'g-05',
    category: 'branding',
    title: 'LEFT MUSIC',
    year: '2023',
    disciplines: 'CREATIVE DIRECTION / DESIGN DIRECTION',
    images: [
      'https://picsum.photos/seed/left-music-1/840/1080',
      'https://picsum.photos/seed/left-music-2/840/1080',
      'https://picsum.photos/seed/left-music-3/840/1080',
    ],
  },
  {
    id: 'g-06',
    category: 'digital',
    title: 'SPIRITUAL OBJECTS',
    year: '2022',
    disciplines: 'ART DIRECTION / PHOTOGRAPHY',
    images: ['https://picsum.photos/seed/spiritual-objects-1/840/1080'],
  },
  {
    id: 'g-07',
    category: 'branding',
    title: 'OPEN DOORS',
    year: '2024',
    disciplines: 'CAMPAIGN / DIGITAL MUNDO',
    images: [
      'https://picsum.photos/seed/open-doors-1/840/1080',
      'https://picsum.photos/seed/open-doors-2/840/1080',
      'https://picsum.photos/seed/open-doors-3/840/1080',
    ],
  },
  {
    id: 'g-08',
    category: 'editorial',
    title: 'PRISM STUDIO',
    year: '2023',
    disciplines: 'CREATIVE DIRECTION / PHOTOGRAPHY',
    images: ['https://picsum.photos/seed/prism-studio-1/840/1080'],
  },
  {
    id: 'g-09',
    category: 'digital',
    title: 'COLOR SYSTEM',
    year: '2022',
    disciplines: 'ART DIRECTION / DESIGN DIRECTION',
    images: ['https://picsum.photos/seed/color-system-1/840/1080', 'https://picsum.photos/seed/color-system-2/840/1080'],
  },
]

const defaultMontageLayout = [
  { src: 'https://picsum.photos/seed/default-1/900/1200', x: 16, y: 50, w: 14, z: 2 },
  { src: 'https://picsum.photos/seed/default-2/900/1200', x: 35, y: 62, w: 9, z: 4 },
  { src: 'https://picsum.photos/seed/default-3/900/1200', x: 53, y: 48, w: 22, z: 3 },
  { src: 'https://picsum.photos/seed/default-4/900/1200', x: 76, y: 44, w: 15, z: 5 },
  { src: 'https://picsum.photos/seed/default-5/900/1200', x: 84, y: 64, w: 10, z: 1 },
]

// Edita este objeto para controlar manualmente cada foto.
// src = ruta/url de imagen, x/y = porcentaje del viewport, w = ancho en vw, z = profundidad.
const projectMontageLayout = {
  '001': [
    { src: 'https://picsum.photos/seed/transpapelades-1/900/1200', x: 20, y: 49, w: 15, z: 2 },
    { src: 'https://picsum.photos/seed/transpapelades-2/900/1200', x: 20, y: 67, w: 13, z: 3 },
    { src: 'https://picsum.photos/seed/transpapelades-3/900/1200', x: 45, y: 58, w: 18, z: 5 },
    { src: 'https://picsum.photos/seed/transpapelades-4/900/1200', x: 53, y: 76, w: 9, z: 4 },
    { src: 'https://picsum.photos/seed/transpapelades-5/900/1200', x: 77, y: 53, w: 24, z: 1 },
  ],
  '002': [
    { src: 'https://picsum.photos/seed/echar-raices-1/900/1200', x: 14, y: 53, w: 12, z: 2 },
    { src: 'https://picsum.photos/seed/echar-raices-2/900/1200', x: 29, y: 64, w: 11, z: 4 },
    { src: 'https://picsum.photos/seed/echar-raices-3/900/1200', x: 49, y: 49, w: 25, z: 3 },
    { src: 'https://picsum.photos/seed/echar-raices-4/900/1200', x: 77, y: 58, w: 14, z: 5 },
    { src: 'https://picsum.photos/seed/echar-raices-5/900/1200', x: 88, y: 44, w: 10, z: 1 },
  ],
  '003': [
    { src: 'https://picsum.photos/seed/entrelineas-1/900/1200', x: 17, y: 46, w: 18, z: 3 },
    { src: 'https://picsum.photos/seed/entrelineas-2/900/1200', x: 36, y: 64, w: 10, z: 1 },
    { src: 'https://picsum.photos/seed/entrelineas-3/900/1200', x: 54, y: 52, w: 20, z: 5 },
    { src: 'https://picsum.photos/seed/entrelineas-4/900/1200', x: 78, y: 48, w: 13, z: 4 },
    { src: 'https://picsum.photos/seed/entrelineas-5/900/1200', x: 84, y: 68, w: 11, z: 2 },
  ],
  '004': [
    { src: 'https://picsum.photos/seed/z-tarot-1/900/1200', x: 16, y: 57, w: 14, z: 2 },
    { src: 'https://picsum.photos/seed/z-tarot-2/900/1200', x: 16, y: 75, w: 14, z: 3 },
    { src: 'https://picsum.photos/seed/z-tarot-3/900/1200', x: 42, y: 62, w: 17, z: 4 },
    { src: 'https://picsum.photos/seed/z-tarot-4/900/1200', x: 55, y: 77, w: 10, z: 5 },
    { src: 'https://picsum.photos/seed/z-tarot-5/900/1200', x: 77, y: 52, w: 22, z: 1 },
  ],
  '005': [
    { src: 'https://picsum.photos/seed/gendertrash-1/900/1200', x: 18, y: 52, w: 18, z: 2 },
    { src: 'https://picsum.photos/seed/gendertrash-2/900/1200', x: 37, y: 62, w: 10, z: 4 },
    { src: 'https://picsum.photos/seed/gendertrash-3/900/1200', x: 53, y: 49, w: 23, z: 5 },
    { src: 'https://picsum.photos/seed/gendertrash-4/900/1200', x: 76, y: 60, w: 14, z: 3 },
    { src: 'https://picsum.photos/seed/gendertrash-5/900/1200', x: 86, y: 44, w: 9, z: 1 },
  ],
  '006': [
    { src: 'https://picsum.photos/seed/otrsjs-prfsj-1/900/1200', x: 16, y: 53, w: 12, z: 2 },
    { src: 'https://picsum.photos/seed/otrsjs-prfsj-2/900/1200', x: 26, y: 66, w: 11, z: 4 },
    { src: 'https://picsum.photos/seed/otrsjs-prfsj-3/900/1200', x: 47, y: 55, w: 21, z: 5 },
    { src: 'https://picsum.photos/seed/otrsjs-prfsj-4/900/1200', x: 78, y: 50, w: 16, z: 3 },
    { src: 'https://picsum.photos/seed/otrsjs-prfsj-5/900/1200', x: 84, y: 67, w: 10, z: 1 },
  ],
  '007': [
    { src: 'https://picsum.photos/seed/una-ultima-cosa-1/900/1200', x: 18, y: 51, w: 17, z: 3 },
    { src: 'https://picsum.photos/seed/una-ultima-cosa-2/900/1200', x: 33, y: 66, w: 10, z: 2 },
    { src: 'https://picsum.photos/seed/una-ultima-cosa-3/900/1200', x: 54, y: 50, w: 22, z: 5 },
    { src: 'https://picsum.photos/seed/una-ultima-cosa-4/900/1200', x: 75, y: 62, w: 12, z: 4 },
    { src: 'https://picsum.photos/seed/una-ultima-cosa-5/900/1200', x: 86, y: 46, w: 11, z: 1 },
  ],
  '008': [
    { src: 'https://picsum.photos/seed/ahora-si-que-si-1/900/1200', x: 16, y: 56, w: 12, z: 2 },
    { src: 'https://picsum.photos/seed/ahora-si-que-si-2/900/1200', x: 31, y: 65, w: 9, z: 4 },
    { src: 'https://picsum.photos/seed/ahora-si-que-si-3/900/1200', x: 51, y: 49, w: 24, z: 5 },
    { src: 'https://picsum.photos/seed/ahora-si-que-si-4/900/1200', x: 76, y: 44, w: 15, z: 3 },
    { src: 'https://picsum.photos/seed/ahora-si-que-si-5/900/1200', x: 82, y: 63, w: 10, z: 1 },
  ],
}

const spreadPatternX = [-1.2, 1.2, -0.9, 1, 0]
const spreadPatternY = [-1, 1.15, -0.8, 0.9, 0]
const spreadStepX = 6
const spreadStepY = 7

const clampPercent = (value, min, max) => Math.max(min, Math.min(max, value))

const buildProjectMontage = (project) => {
  const layout = projectMontageLayout[project.id] ?? defaultMontageLayout

  return layout.map((slot, imageIndex) => ({
    x: clampPercent(slot.x + spreadPatternX[imageIndex % spreadPatternX.length] * spreadStepX, 2, 98),
    y: clampPercent(slot.y + spreadPatternY[imageIndex % spreadPatternY.length] * spreadStepY, 6, 94),
    w: slot.w,
    z: slot.z,
    key: `${project.id}-${imageIndex}`,
    src: slot.src,
    alt: `${project.title} visual ${imageIndex + 1}`,
  }))
}

function ViewFilterSection() {
  const [viewMode, setViewMode] = useState('list')
  const [filter, setFilter] = useState('all')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  const lastWheelChangeRef = useRef(0)
  const browserRef = useRef(null)

  const { t } = useLanguage()
  const filterOptions = [
    { value: 'all', label: t('all') },
    { value: 'editorial', label: t('editorial') },
    { value: 'branding', label: t('branding') },
    { value: 'digital', label: t('digital') },
  ];

  const nextViewMode = viewMode === 'list' ? 'grid' : 'list'
  const viewLabel = viewMode === 'list' ? t('indexView') : t('gridView')

  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projects
    }

    return projects.filter((project) => project.category === filter)
  }, [filter])

  const filteredGridProjects = useMemo(() => {
    if (filter === 'all') {
      return gridProjects
    }

    return gridProjects.filter((project) => project.category === filter)
  }, [filter])

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
        images: getImagesForCount(project.images, projectSpan),
        gridColumnStart: rowStart[slot],
        gridRow: row + 1,
        gridColumnSpan: projectSpan,
      }
    })
  }, [filteredGridProjects])

  const projectsWithMontage = useMemo(
    () => projects.map((project) => ({ ...project, montage: buildProjectMontage(project) })),
    [],
  )

  const activeProject = useMemo(
    () => projectsWithMontage.find((project) => project.id === activeProjectId) ?? projectsWithMontage[0],
    [activeProjectId, projectsWithMontage],
  )

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
    const element = browserRef.current;
    if (!element) return;

    const handleWheel = (event) => {
      if (viewMode !== 'list' || filteredProjects.length === 0) {
        return;
      }

      // Ahora esto sí funcionará sin lanzar error
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

    // Añadimos el listener con passive en false
    element.addEventListener('wheel', handleWheel, { passive: false });

    // Limpieza del listener
    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  }, [viewMode, filteredProjects, activeProjectId]);

  return (
    <section ref={browserRef} className={`browser browser--${viewMode}`} aria-label="Project browser">
      <div className="browser__toolbar">
        <div className="browser__views" role="group" aria-label="View selector">
          <button
            type="button"
            className="browser__control browser__control--active"
            onClick={() => setViewMode(nextViewMode)}
          >
            {viewLabel}
          </button>
        </div>

        <button
          type="button"
          className={`browser__filter-trigger ${isFilterOpen ? 'browser__filter-trigger--active' : ''}`}
          onClick={() => setIsFilterOpen((prevState) => !prevState)}
          aria-expanded={isFilterOpen}
          aria-controls="browser-filter-menu"
        >
         {t('filter')}
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
                  setIsFilterOpen(false)
                }}
              >
                {option.label}
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
                  onMouseEnter={() => setActiveProjectId(project.id)}
                  onFocus={() => setActiveProjectId(project.id)}
                >
                  <span className="browser__item-id">{project.id}</span>
                  <span className="browser__item-title">{project.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="browser__stage" aria-hidden="true">
            {activeProject?.montage.map((image) => (
              <article
                key={image.key}
                className="browser__stage-item"
                style={{
                  '--x': `${image.x}%`,
                  '--y': `${image.y}%`,
                  '--w': `${image.w}vw`,
                  '--z': image.z,
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
                style={{
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
