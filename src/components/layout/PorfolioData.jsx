import { siteContent } from '../../content/siteContent';

export const textDatabase = siteContent.textDatabase;

export const projects = siteContent.projects;

// 3. LAYOUT DE LAS IMÁGENES AL PASAR EL RATÓN (Vista Índice)
export const projectMontageLayout = {
  ...siteContent.projectMontageLayout,
}

export const projectDetailImages = siteContent.projectDetailImages;
export const projectPageImages = siteContent.projectPageImages;
export const projectPageImageSpans = siteContent.projectPageImageSpans;
export const projectPageTextEveryImages = siteContent.projectPageTextEveryImages;

// 4. LISTA DE PROYECTOS PARA LA CUADRÍCULA
export const getGridProjects = (language) => siteContent.gridProjectsByLanguage[language] ?? siteContent.gridProjectsByLanguage.en;

// 5. LISTA DE PROYECTOS PARA EL ARCHIVO
export const getArchiveProjects = (language) => siteContent.archiveProjectsByLanguage[language] ?? siteContent.archiveProjectsByLanguage.en;