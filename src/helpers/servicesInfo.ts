import { rootImages } from '@core/rootImages';
import { t } from 'i18next';

interface ServiceInfo {
	title: string;
	text: string;
	href: string;
	img: string;
	hasGradient: boolean;
	id: string;
}

/**
 * The services image's root paths
 */
const services = rootImages.services;

/**
 * An array of objects that has the information of each services
 */
export const servicesInfo: ServiceInfo[] = [
	{
		title: t('home.services.service.web.title'),
		text: t('home.services.service.web.description'),
		href: '#',
		img: services.webdev,
		hasGradient: false,
		id: 'webapplications',
	},
	{
		title: t('home.services.service.mobile.title'),
		text: t('home.services.service.mobile.description'),
		href: '#',
		img: services.mobile,
		hasGradient: true,
		id: 'mobileapps',
	},
	{
		title: t('home.services.service.brands.title'),
		text: t('home.services.service.brands.description'),
		href: '#',
		img: services.marketing,
		hasGradient: true,
		id: 'brandcreation',
	},
	{
		title: t('home.services.service.design.title'),
		text: t('home.services.service.design.description'),
		href: '#',
		img: services.uiux,
		hasGradient: false,
		id: 'webdesign',
	},
];
