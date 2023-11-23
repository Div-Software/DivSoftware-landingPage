import { rootImages } from '@core/rootImages';

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
		title: 'Global Redex',
		description: `We are a leading company in telecommunications, with extensive experience and the best products and services. 
    Our goal is to provide efficient solutions and to be recognized as the reliable option in the national market.`,
		image: rootImages.projects.globalredex,
		url: 'https://globalredex.com/',
	},
];
