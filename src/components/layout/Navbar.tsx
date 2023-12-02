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
import React from 'react';

interface Props {
	children: JSX.Element;
}

export function NavbarHome({ children }: Props) {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	/**
	 * An object to identify each item from the Navigation menu
	 */
	const menuItems = [
		{ title: t('home.navbar.home'), href: '#banner' },
		{ title: t('home.navbar.about'), href: '#about' },
		{ title: t('home.navbar.services'), href: '#services' },
		{ title: t('home.navbar.contact'), href: '#contact' },
	];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={isMenuOpen}
			maxWidth='2xl'
			className='fixed bg-primary-50'
		>
			<NavbarBrand>{children}</NavbarBrand>

			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden'
			/>

			{/* Navigation menu for Tablet - Desktop screens */}
			<NavbarContent className='hidden sm:flex sm:gap-8 md:gap-16 lg:gap-32' justify='center'>
				{menuItems.map((item, idx) => (
					<NavbarItem key={`${item.title}-${idx}`} style={{ cursor: 'pointer' }}>
						<a className='a-scroll w-full' href={item.href}>
							<p className='font-bold text-foreground-50'>{item.title}</p>
						</a>
					</NavbarItem>
				))}
			</NavbarContent>

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
