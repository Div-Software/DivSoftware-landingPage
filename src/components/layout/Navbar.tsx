import { rootImages } from '@core/rootImages';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import { t } from 'i18next';
import { useEffect, useState } from 'react';

interface Props {
	children: JSX.Element | JSX.Element[];
}

interface FlagProps {
	language: string;
	flagImage: string;
	currentPath: string;
}

export function NavbarHome({ children }: Props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [pathname, setPathname] = useState('');

	/**
	 * An object to identify each item from the Navigation menu
	 */
	const menuItems = [
		{ title: t('home.navbar.home'), href: '#banner' },
		{ title: t('home.navbar.about'), href: '#about' },
		{ title: t('home.navbar.services'), href: '#services' },
		{ title: t('home.navbar.contact'), href: '#contact' },
	];

	/**
	 * Renders a flag component.
	 *
	 * @param language - The language of the flag.
	 * @param flagImage - The image source of the flag.
	 * @param currentPath - The current path of the flag.
	 * @returns The flag component.
	 */
	const Flag = ({ language, flagImage, currentPath }: FlagProps): JSX.Element => {
		const isActive = (language === '' && currentPath === '/') || currentPath === `/${language}`;

		return (
			<div className={isActive ? 'rounded-sm p-1 outline outline-2 outline-[#7127BA]' : ''}>
				{isActive ? (
					<img src={flagImage} alt={`${language.toUpperCase()} Flag`} width={25} height={25} />
				) : (
					<a href={`/${language}`}>
						<img src={flagImage} alt={`${language.toUpperCase()} Flag`} width={25} height={25} />
					</a>
				)}
			</div>
		);
	};

	/**
	 * Renders a language switcher component.
	 * @returns {JSX.Element} The language switcher component.
	 */
	const LanguageSwitcher = (): JSX.Element => (
		<div className='flex items-center justify-center gap-3 rounded-lg bg-background p-2 backdrop-blur-sm'>
			<Flag language='' flagImage={rootImages.icons.spanish} currentPath={pathname} />
			<Flag language='en' flagImage={rootImages.icons.english} currentPath={pathname} />
		</div>
	);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setPathname(window.location.pathname);
		}
	}, []);

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={isMenuOpen}
			maxWidth='2xl'
			className='fixed bg-primary-50'
		>
			<NavbarBrand>{children}</NavbarBrand>

			{/* Navigation menu for Tablet - Desktop screens */}
			<NavbarContent className='sm:gap-8 md:gap-16 lg:gap-32' justify='center'>
				{menuItems.map((item, idx) => (
					<NavbarItem key={`${item.title}-${idx}`} className='hidden cursor-pointer sm:flex'>
						<motion.a
							initial={{ x: -100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.1 }}
							className='a-scroll w-full'
							href={item.href}
						>
							<p className='font-bold text-foreground-50'>{item.title}</p>
						</motion.a>
					</NavbarItem>
				))}

				<LanguageSwitcher />
			</NavbarContent>

			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden'
			/>

			{/* Navigation menu for mobile screens */}
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item.title}-${index}`}>
						<a
							className='a-scroll w-full'
							href={item.href}
							onClick={(e) => {
								e.preventDefault();
								document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
								setTimeout(() => setIsMenuOpen(false), 500);
							}}
						>
							<p className='font-bold text-foreground-50'>{item.title}</p>
						</a>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
