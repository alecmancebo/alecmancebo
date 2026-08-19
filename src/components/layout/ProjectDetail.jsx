import CodedText from '../effects/CodedText';
import { useEffect, useRef } from 'react';
import { useLanguage } from '../effects/LanguageContext';
// Importamos la base de datos de textos desde tu nuevo archivo centralizado
import { textDatabase } from './PorfolioData'; 

const isVideoFile = (src) => /\.(mp4|webm|ogg)$/i.test(src);

export default function ProjectDetail({ project, onBack, onOpenProject }) {
  const { language } = useLanguage();
  const projectDetailRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      projectDetailRef.current?.scrollIntoView({ block: 'start', behavior: 'auto' });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [project.id]);

  const renderTextContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <ul className="project-detail__text-list">
          {content.map((item, index) => (
            <li key={`list-item-${index}`}>{item}</li>
          ))}
        </ul>
      );
    }

    if (!content) {
      return null;
    }

    return <p>{content}</p>;
  };

  // 1. Extraemos los datos dinámicos del proyecto actual
  const projectTexts = textDatabase[project.title] || textDatabase['DEFAULT'];
  const textBlocks = projectTexts[language] || projectTexts['en'];
  const normalizeSpan = (value, fallback = 1) => {
    if (!Number.isInteger(value)) {
      return fallback;
    }

    return Math.max(1, Math.min(4, value));
  };

  const images = (project.images || [])
    .map((item) => {
      if (typeof item === 'string') {
        return { src: item, span: 1 }
      }

      return {
        src: item?.src,
        span: normalizeSpan(item?.span, 1),
      }
    })
    .filter((item) => Boolean(item.src));
  const mediaColumns = 4;
  const [leadImage, ...galleryImages] = images;
  const leadSpan = normalizeSpan(leadImage?.span, mediaColumns);
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
    <article ref={projectDetailRef} className="project-detail" id={`project-${project.id}`}>
      
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
            style={{ '--media-span': String(Math.min(mediaColumns, leadSpan)) }}
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
              <section className={`project-detail__text-grid ${!textBlock.tag && !textBlock.subtitle ? 'project-detail__text-grid--no-heading' : ''}`}>
                <div className="text-grid__col-1">
                  <h4 className="text-grid__tag">{textBlock.tag}</h4>
                  <h2 className="text-grid__subtitle">{textBlock.subtitle}</h2>
                </div>
                <div className="text-grid__col-2">
                  {renderTextContent(textBlock.col2)}
                </div>
                <div className="text-grid__col-3">
                  {renderTextContent(textBlock.col3)}
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

      {(project.previousProject || project.nextProject) && onOpenProject ? (
        <div className="project-detail__next-project">
          {project.previousProject ? (
            <button
              type="button"
              className="project-detail__next-link"
              onClick={() => onOpenProject(project.previousProject)}
            >
              <CodedText text={`[PREVIOUS: ${project.previousProject.title.toUpperCase()}]`} />
            </button>
          ) : null}
          {project.nextProject ? (
            <button
              type="button"
              className="project-detail__next-link"
              onClick={() => onOpenProject(project.nextProject)}
            >
              <CodedText text={`[NEXT: ${project.nextProject.title.toUpperCase()}]`} />
            </button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}