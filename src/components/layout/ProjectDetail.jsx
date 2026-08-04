import CodedText from '../effects/CodedText';
import { useLanguage } from '../effects/LanguageContext';
// Importamos la base de datos de textos desde tu nuevo archivo centralizado
import { textDatabase } from './PorfolioData'; 

const isVideoFile = (src) => /\.(mp4|webm|ogg)$/i.test(src);

export default function ProjectDetail({ project, onBack }) {
  const { language } = useLanguage();

  // 1. Extraemos los datos dinámicos del proyecto actual
  const projectTexts = textDatabase[project.title] || textDatabase['DEFAULT'];
  const textBlocks = projectTexts[language] || projectTexts['en'];
  const images = (project.images || [])
    .map((item) => {
      if (typeof item === 'string') {
        return { src: item, span: 1 }
      }

      return {
        src: item?.src,
        span: item?.span === 4 ? 4 : item?.span === 2 ? 2 : 1,
      }
    })
    .filter((item) => Boolean(item.src));
  const mediaColumns = 4;
  const [leadImage, ...galleryImages] = images;
  const textEveryImagesPattern = Array.isArray(project.textEveryImages)
    ? project.textEveryImages
        .filter((value) => Number.isInteger(value) && value >= 0)
    : Number.isInteger(project.textEveryImages) && project.textEveryImages >= 0
      ? [project.textEveryImages]
      : [1];

  const imageChunks = [];
  let imageIndex = 0;
  const textSectionCount = Math.max(textBlocks.length, 1);

  for (let sectionIndex = 0; sectionIndex < textSectionCount; sectionIndex += 1) {
    const chunkSize = textEveryImagesPattern[Math.min(sectionIndex, textEveryImagesPattern.length - 1)] ?? 1;

    if (chunkSize <= 0) {
      imageChunks.push([]);
      continue;
    }

    imageChunks.push(galleryImages.slice(imageIndex, imageIndex + chunkSize));
    imageIndex += chunkSize;
  }

  // Si sobran imágenes, se añaden al último bloque para no perder contenido.
  if (imageIndex < galleryImages.length) {
    const tailImages = galleryImages.slice(imageIndex);
    if (imageChunks.length === 0) {
      imageChunks.push(tailImages);
    } else {
      imageChunks[imageChunks.length - 1] = [
        ...imageChunks[imageChunks.length - 1],
        ...tailImages,
      ];
    }
  }

  const sectionCount = Math.max(textBlocks.length, imageChunks.length);

  return (
    <article className="project-detail" id={`project-${project.id}`}>
      
      {/* CABECERA GIGANTE (Fija en la parte superior) */}
      <header className="project-detail__hero-header">
        <h1 className="project-detail__title">{project.title}</h1>
      </header>

      {/* BARRA DE METADATOS (Fija en la parte superior) */}
      <div className="project-detail__meta-bar">
        <button className="project-detail__back-btn" onClick={onBack}>
          <CodedText text="[BACK TO WORKS]" />
        </button>
        <a
          className="project-detail__category"
          href={project.projectUrl || '#'}
          aria-label={`${project.title} project link`}
        >
          <span className="project-detail__category-label">
            {project.disciplines?.toUpperCase() || project.category?.toUpperCase()}
          </span>
        </a>
        <span className="project-detail__year">
          {project.year || "2024"}
        </span>
      </div>

      {/* IMAGEN PRINCIPAL: siempre ocupa las 4 columnas y va antes del primer párrafo */}
      {leadImage ? (
        <section className="project-detail__media-grid" style={{ '--detail-columns': String(mediaColumns) }}>
          <figure
            className="project-detail__media-item project-detail__media-item--lead"
            style={{ '--media-span': String(mediaColumns) }}
          >
            {isVideoFile(leadImage.src) ? (
              <video
                src={leadImage.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={leadImage.src} alt={`${project.title} image 1`} loading="lazy" />
            )}
          </figure>
        </section>
      ) : null}

      {/* INTERCALADO: bloque de texto y luego cada N imágenes (configurable por proyecto) */}
      {Array.from({ length: sectionCount }).map((_, index) => {
        const textBlock = textBlocks[index];
        const chunkImages = imageChunks[index] ?? [];

        return (
          <section key={`interleave-${index}`}>
            {textBlock ? (
              <section className="project-detail__text-grid">
                <div className="text-grid__col-1">
                  <h4 className="text-grid__tag">{textBlock.tag}</h4>
                  <h2 className="text-grid__subtitle">{textBlock.subtitle}</h2>
                </div>
                <div className="text-grid__col-2">
                  <p>{textBlock.col2}</p>
                </div>
                <div className="text-grid__col-3">
                  <p>{textBlock.col3}</p>
                </div>
              </section>
            ) : null}

            {chunkImages.length > 0 ? (
              <section
                className="project-detail__media-grid"
                data-count={String(chunkImages.length)}
                style={{ '--detail-columns': String(mediaColumns) }}
              >
                {chunkImages.map((image, chunkIndex) => (
                  <figure
                    key={`media-${index}-${chunkIndex}`}
                    className="project-detail__media-item"
                    style={{ '--media-span': String(Math.min(mediaColumns, image.span)) }}
                  >
                    {isVideoFile(image.src) ? (
                      <video
                        src={image.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={image.src}
                        alt={`${project.title} image ${index + chunkIndex + 2}`}
                        loading="lazy"
                      />
                    )}
                  </figure>
                ))}
              </section>
            ) : null}
          </section>
        );
      })}
    </article>
  );
}