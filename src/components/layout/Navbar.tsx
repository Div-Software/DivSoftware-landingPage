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
import { t } from 'i18next';
import { useEffect, useState } from 'react';

interface Props {
	children: JSX.Element | JSX.Element[];
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
						<a className='a-scroll w-full' href={item.href}>
							<p className='font-bold text-foreground-50'>{item.title}</p>
						</a>
					</NavbarItem>
				))}

				<a href={pathname === '/' ? '/en' : '/'}>
					<img
						src={pathname === '/' ? rootImages.icons.english : rootImages.icons.spanish}
						alt='Language Flag'
						width={25}
						height={25}
					/>
				</a>
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
