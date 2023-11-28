import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/react';
import { scrollIntoSection } from '@utils/home.utils';
import React from 'react';
import { LogoComponent } from './LogoComponent';

export function NavbarHome() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	/**
	 * An object to identify each item from the Navigation menu
	 */
	const menuItems = [
		{ title: 'Home', href: '#banner' },
		{ title: 'About', href: '#about' },
		{ title: 'Services', href: '#services' },
		{ title: 'Contact', href: '#contact' },
	];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={isMenuOpen}
			maxWidth='2xl'
			className='fixed bg-primary-50'
		>
			<NavbarBrand>
				<LogoComponent size='small' />
			</NavbarBrand>

			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden'
			/>

			{/* Navigation menu for Tablet - Desktop screens */}
			<NavbarContent className='hidden sm:flex sm:gap-8 md:gap-16 lg:gap-32' justify='center'>
				{menuItems.map((item, idx) => (
					<NavbarItem key={`${item.title}-${idx}`} style={{ cursor: 'pointer' }}>
						<Link
							className='w-full'
							// href={item.href}
							size='lg'
							onClick={() => scrollIntoSection(item.href, () => setIsMenuOpen(false))}
						>
							<p className='font-bold text-foreground-50'>{item.title}</p>
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			{/* Navigation menu for mobile screens */}
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item.title}-${index}`}>
						<Link
							color='foreground'
							className='w-full'
							// href={item.href}
							size='lg'
							onClick={() => scrollIntoSection(item.href, () => setIsMenuOpen(false))}
						>
							{item.title}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
