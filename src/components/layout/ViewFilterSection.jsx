import { useEffect, useMemo, useRef, useState } from 'react'

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

const filterOptions = [
  { value: 'all', label: 'ALL' },
  { value: 'editorial', label: 'EDITORIAL' },
  { value: 'branding', label: 'BRANDING' },
  { value: 'digital', label: 'DIGITAL' },
]

const defaultMontageLayout = [
  { x: 16, y: 50, w: 14, z: 2 },
  { x: 35, y: 62, w: 9, z: 4 },
  { x: 53, y: 48, w: 22, z: 3 },
  { x: 76, y: 44, w: 15, z: 5 },
  { x: 84, y: 64, w: 10, z: 1 },
]

// Edita este objeto para controlar manualmente posicion y tamano de cada foto.
// x/y = porcentaje del viewport, w = ancho en vw, z = profundidad.
const projectMontageLayout = {
  '001': [
    { x: 20, y: 49, w: 15, z: 2 },
    { x: 20, y: 67, w: 13, z: 3 },
    { x: 45, y: 58, w: 18, z: 5 },
    { x: 53, y: 76, w: 9, z: 4 },
    { x: 77, y: 53, w: 24, z: 1 },
  ],
  '002': [
    { x: 14, y: 53, w: 12, z: 2 },
    { x: 29, y: 64, w: 11, z: 4 },
    { x: 49, y: 49, w: 25, z: 3 },
    { x: 77, y: 58, w: 14, z: 5 },
    { x: 88, y: 44, w: 10, z: 1 },
  ],
  '003': [
    { x: 17, y: 46, w: 18, z: 3 },
    { x: 36, y: 64, w: 10, z: 1 },
    { x: 54, y: 52, w: 20, z: 5 },
    { x: 78, y: 48, w: 13, z: 4 },
    { x: 84, y: 68, w: 11, z: 2 },
  ],
  '004': [
    { x: 16, y: 57, w: 14, z: 2 },
    { x: 16, y: 75, w: 14, z: 3 },
    { x: 42, y: 62, w: 17, z: 4 },
    { x: 55, y: 77, w: 10, z: 5 },
    { x: 77, y: 52, w: 22, z: 1 },
  ],
  '005': [
    { x: 18, y: 52, w: 18, z: 2 },
    { x: 37, y: 62, w: 10, z: 4 },
    { x: 53, y: 49, w: 23, z: 5 },
    { x: 76, y: 60, w: 14, z: 3 },
    { x: 86, y: 44, w: 9, z: 1 },
  ],
  '006': [
    { x: 16, y: 53, w: 12, z: 2 },
    { x: 26, y: 66, w: 11, z: 4 },
    { x: 47, y: 55, w: 21, z: 5 },
    { x: 78, y: 50, w: 16, z: 3 },
    { x: 84, y: 67, w: 10, z: 1 },
  ],
  '007': [
    { x: 18, y: 51, w: 17, z: 3 },
    { x: 33, y: 66, w: 10, z: 2 },
    { x: 54, y: 50, w: 22, z: 5 },
    { x: 75, y: 62, w: 12, z: 4 },
    { x: 86, y: 46, w: 11, z: 1 },
  ],
  '008': [
    { x: 16, y: 56, w: 12, z: 2 },
    { x: 31, y: 65, w: 9, z: 4 },
    { x: 51, y: 49, w: 24, z: 5 },
    { x: 76, y: 44, w: 15, z: 3 },
    { x: 82, y: 63, w: 10, z: 1 },
  ],
}

const buildProjectMontage = (project) => {
  const layout = projectMontageLayout[project.id] ?? defaultMontageLayout

  return layout.map((slot, imageIndex) => ({
    x: slot.x,
    y: slot.y,
    w: slot.w,
    z: slot.z,
    key: `${project.id}-${imageIndex}`,
    src: `https://picsum.photos/seed/${project.seed}-${imageIndex + 1}/900/1200`,
    alt: `${project.title} visual ${imageIndex + 1}`,
  }))
}

function ViewFilterSection() {
  const [viewMode, setViewMode] = useState('list')
  const [filter, setFilter] = useState('all')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  const lastWheelChangeRef = useRef(0)

  const nextViewMode = viewMode === 'list' ? 'grid' : 'list'
  const viewLabel = viewMode === 'list' ? '[INDEX VIEW]' : '[GRID VIEW]'

  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projects
    }

    return projects.filter((project) => project.category === filter)
  }, [filter])

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

  const rotateProjectByWheel = (event) => {
    if (viewMode !== 'list' || filteredProjects.length === 0) {
      return
    }

    event.preventDefault()

    const now = Date.now()
    if (now - lastWheelChangeRef.current < 160) {
      return
    }

    lastWheelChangeRef.current = now

    const direction = event.deltaY >= 0 ? 1 : -1
    const currentIndex = filteredProjects.findIndex((project) => project.id === activeProjectId)
    const safeIndex = currentIndex === -1 ? 0 : currentIndex
    const nextIndex = (safeIndex + direction + filteredProjects.length) % filteredProjects.length

    setActiveProjectId(filteredProjects[nextIndex].id)
  }

  return (
    <section className="browser" aria-label="Project browser" onWheel={rotateProjectByWheel}>
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
          FILTER
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
        <ul className="browser__grid" aria-live="polite">
          {filteredProjects.map((project) => (
            <li key={project.id} className="browser__grid-item">
              <span className="browser__item-id">{project.id}</span>
              <span className="browser__item-title">{project.title}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ViewFilterSection
