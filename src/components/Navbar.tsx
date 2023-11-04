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
import React from 'react';
import logo from '/div-software-logo.svg?url';

export function NavbarHome() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = [
		{ title: 'Home', href: '#banner' },
		{ title: 'About', href: '#about' },
		{ title: 'Services', href: '#services' },
		{ title: 'Contact', href: '#contact' },
	];

	/**
	 * A function used to scroll into the selected section with an smooth animation
	 * @param {string} id The id of the section component
	 */
	const scrollIntoSection = (id: string) => {
		const targetElement = document.querySelector(id)!;

		if (targetElement) {
			window.scrollTo({
				behavior: 'smooth',
				top: targetElement.getBoundingClientRect().top + window.scrollY,
			});
			setTimeout(() => setIsMenuOpen(false), 1000);
		}
	};

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={isMenuOpen}
			maxWidth='2xl'
			className='fixed bg-primary-50'
		>
			<NavbarBrand>
				<Link href='/' className='flex gap-1 xs:gap-2'>
					<img src={logo} alt='Div Software' className='h-4 xs:h-5 md:h-6' />
					<div aria-label='logo name' className='flex flex-row gap-3'>
						<p className='text-xl font-bold text-foreground-200 xs:text-2xl md:text-3xl'>Div</p>
						<p className='text-xl font-bold text-primary-200 xs:text-2xl md:text-3xl'>Software</p>
					</div>
					<img src={logo} alt='Div Software' className='h-4 rotate-180 xs:h-5 md:h-6' />
				</Link>
			</NavbarBrand>

			<NavbarMenuToggle
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				className='sm:hidden'
			/>

			<NavbarContent className='hidden sm:flex sm:gap-8 md:gap-16 lg:gap-32' justify='center'>
				{menuItems.map((item, idx) => (
					<NavbarItem key={`${item.title}-${idx}`} style={{ cursor: 'pointer' }}>
						<Link
							color='foreground'
							className='w-full'
							// href={item.href}
							size='lg'
							onClick={() => scrollIntoSection(item.href)}
						>
							{item.title}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item.title}-${index}`}>
						<Link
							color='foreground'
							className='w-full'
							// href={item.href}
							size='lg'
							onClick={() => scrollIntoSection(item.href)}
						>
							{item.title}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
