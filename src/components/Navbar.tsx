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

	const menuItems = ['Home', 'About', 'Services', 'Contact'];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} maxWidth='2xl' className='fixed bg-primary-50'>
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
					<NavbarItem key={`${item}-${idx}`}>
						<Link color='foreground' className='w-full' href='#' size='lg'>
							{item}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link color='foreground' className='w-full' href='#' size='lg'>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
