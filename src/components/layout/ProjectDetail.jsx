import CodedText from '../effects/CodedText';
import { useLanguage } from '../effects/LanguageContext';
// Importamos la base de datos de textos desde tu nuevo archivo centralizado
import { textDatabase } from './PorfolioData'; 

export default function ProjectDetail({ project, onBack }) {
  const { t, language } = useLanguage();

  // 1. Extraemos los datos dinámicos del proyecto actual
  const projectTexts = textDatabase[project.title] || textDatabase['DEFAULT'];
  const textBlocks = projectTexts[language] || projectTexts['en'];
  const images = project.images || [];

  // 2. Calculamos cuántas secciones (Imagen Gigante + Texto + 2 Imágenes Pequeñas) necesitamos
  const numSections = Math.max(textBlocks.length, Math.ceil(images.length / 3));

  // 3. Emparejamos cada bloque de texto con su grupo de 3 imágenes correspondientes
  const sections = Array.from({ length: numSections }).map((_, i) => ({
    heroImage: images[i * 3],
    text: textBlocks[i] || null,
    gallery1: images[i * 3 + 1],
    gallery2: images[i * 3 + 2],
    key: `section-${i}`
  }));

  return (
    <article className="project-detail">
      
      {/* CABECERA GIGANTE (Fija en la parte superior) */}
      <header className="project-detail__hero-header">
        <h1 className="project-detail__title">{project.title}</h1>
      </header>

      {/* BARRA DE METADATOS (Fija en la parte superior) */}
      <div className="project-detail__meta-bar">
        <button className="project-detail__back-btn" onClick={onBack}>
          <CodedText text="[BACK TO WORKS]" />
        </button>
        <span className="project-detail__category">
          <CodedText text={project.disciplines?.toUpperCase() || project.category?.toUpperCase()} />
        </span>
        <span className="project-detail__year">
          <CodedText text={project.year || "2024"} />
        </span>
      </div>

      {/* RENDERIZADO DINÁMICO DE SECCIONES (Se repite según el contenido) */}
      {sections.map((section, index) => (
        <div key={section.key} className="project-detail__section-block">
          
          {/* A. IMAGEN PRINCIPAL (Si existe en este bloque) */}
          {section.heroImage && (
            <figure className="project-detail__hero-media">
              <img src={section.heroImage} alt={`${project.title} hero ${index + 1}`} loading="lazy" />
            </figure>
          )}

          {/* B. BLOQUE DE TEXTO A 3 COLUMNAS (Si existe en este bloque) */}
          {section.text && (
            <section className="project-detail__text-grid">
              <div className="text-grid__col-1">
                <h4 className="text-grid__tag">{section.text.tag}</h4>
                <h2 className="text-grid__subtitle">{section.text.subtitle}</h2>
              </div>
              <div className="text-grid__col-2">
                <p>{section.text.col2}</p>
              </div>
              <div className="text-grid__col-3">
                <p>{section.text.col3}</p>
              </div>
            </section>
          )}

          {/* C. GALERÍA SECUNDARIA DE 2 COLUMNAS (Si hay imágenes extra en este bloque) */}
          {(section.gallery1 || section.gallery2) && (
            <section className="project-detail__gallery-grid">
              {section.gallery1 ? (
                <figure className="gallery-grid__item">
                  <img src={section.gallery1} alt={`Gallery ${index}-1`} loading="lazy" />
                </figure>
              ) : <div />
              }
              
              {section.gallery2 ? (
                <figure className="gallery-grid__item">
                  <img src={section.gallery2} alt={`Gallery ${index}-2`} loading="lazy" />
                </figure>
              ) : <div />
              }
            </section>
          )}
        </div>
      ))}
    </article>
  );
}