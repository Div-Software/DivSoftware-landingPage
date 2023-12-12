import marketing from '@assets/services/marketing.webp?url';
import mobile from '@assets/services/mobileapps.webp?url';
import uiux from '@assets/services/uxui.webp?url';
import webdev from '@assets/services/webdev.webp?url';

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
		title: 'home.services.service.web.title',
		text: 'home.services.service.web.description',
		href: '#',
		img: webdev,
		hasGradient: false,
		id: 'webapplications',
	},
	{
		title: 'home.services.service.mobile.title',
		text: 'home.services.service.mobile.description',
		href: '#',
		img: mobile,
		hasGradient: true,
		id: 'mobileapps',
	},
	{
		title: 'home.services.service.brands.title',
		text: 'home.services.service.brands.description',
		href: '#',
		img: marketing,
		hasGradient: true,
		id: 'brandcreation',
	},
	{
		title: 'home.services.service.design.title',
		text: 'home.services.service.design.description',
		href: '#',
		img: uiux,
		hasGradient: false,
		id: 'webdesign',
	},
];
