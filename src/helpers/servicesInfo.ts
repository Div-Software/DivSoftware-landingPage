import { rootImages } from '@core/rootImages';

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
		title: 'Web Apps',
		text: 'We specialize in building custom web applications tailored to your unique needs and business goals. Our expert team will bring your web-based ideas to life with cutting-edge technology and user-friendly designs.',
		href: '#',
		img: services.webdev,
		hasGradient: false,
		id: 'webapplications',
	},
	{
		title: 'Mobile Apps',
		text: 'Our mobile app development team is dedicated to creating high-performance, intuitive, and visually appealing apps for both iOS and Android platforms. We turn your app concept into a reality.',
		href: '#',
		img: services.mobile,
		hasGradient: true,
		id: 'mobileapps',
	},
	{
		title: 'Brand Creation',
		text: 'Let us help you establish a strong and memorable brand identity. We offer brand creation services, including logo design, brand strategy, and visual assets that reflect your values and vision.',
		href: '#',
		img: services.marketing,
		hasGradient: true,
		id: 'brandcreation',
	},
	{
		title: 'Web Design',
		text: 'Our web design experts craft beautiful and responsive websites that make a lasting impression. We focus on user experience, performance, and aesthetics to ensure your site stands out.',
		href: '#',
		img: services.uiux,
		hasGradient: false,
		id: 'webdesign',
	},
];
