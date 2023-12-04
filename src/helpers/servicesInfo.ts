import marketing from '@assets/services/marketing.webp?url';
import mobile from '@assets/services/mobileapps.webp?url';
import uiux from '@assets/services/uxui.webp?url';
import webdev from '@assets/services/webdev.webp?url';
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
 * An array of objects that has the information of each services
 */
export const servicesInfo: ServiceInfo[] = [
	{
		title: t('home.services.service.web.title'),
		text: t('home.services.service.web.description'),
		href: '#',
		img: webdev,
		hasGradient: false,
		id: 'webapplications',
	},
	{
		title: t('home.services.service.mobile.title'),
		text: t('home.services.service.mobile.description'),
		href: '#',
		img: mobile,
		hasGradient: true,
		id: 'mobileapps',
	},
	{
		title: t('home.services.service.brands.title'),
		text: t('home.services.service.brands.description'),
		href: '#',
		img: marketing,
		hasGradient: true,
		id: 'brandcreation',
	},
	{
		title: t('home.services.service.design.title'),
		text: t('home.services.service.design.description'),
		href: '#',
		img: uiux,
		hasGradient: false,
		id: 'webdesign',
	},
];
