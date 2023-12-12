import globalredex from '@assets/projects/globalredex-desktop.webp?url';

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
		title: 'home.projects.project.globalRedex.title',
		description: 'home.projects.project.globalRedex.description',
		image: globalredex,
		url: 'https://globalredex.com/',
	},
];
