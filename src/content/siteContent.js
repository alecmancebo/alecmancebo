import { homeTranslations } from './siteContent/translations';
import { aboutContent } from './siteContent/about';
import { projects, gridProjectsByLanguage, projectMontageLayout } from './siteContent/projects';
import { archiveProjectsByLanguage } from './siteContent/archive';
import { projectDetailImages, projectPageImages, projectPageImageSpans, projectPageTextEveryImages } from './siteContent/media';
import { textDatabase } from './siteContent/textDatabase';

export const siteContent = {
	translations: homeTranslations,
	aboutContent,
	textDatabase,
	projects,
	projectMontageLayout,
	projectDetailImages,
	projectPageImages,
	projectPageImageSpans,
	projectPageTextEveryImages,
	gridProjectsByLanguage,
    archiveProjectsByLanguage
};
