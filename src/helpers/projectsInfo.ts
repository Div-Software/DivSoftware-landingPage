import { rootImages } from '@core/rootImages';
import { t } from 'i18next';

interface ProjectsI {
	title: string;
	description: string;
	image: string;
	url: string;
}

/**
 * This array contains objects representing different projects.
 * Each project object has properties such as title, subtitle, description, and image.
 * @type {ProjectsI[]}
 */
export const projects: ProjectsI[] = [
	{
		title: t('home.projects.project.globalRedex.title'),
		description: t('home.projects.project.globalRedex.description'),
		image: rootImages.projects.globalredex,
		url: 'https://globalredex.com/',
	},
];
