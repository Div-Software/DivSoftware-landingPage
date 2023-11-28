import { Link } from '@nextui-org/react';
import { scrollIntoSection } from '@utils/home.utils';
import { LogoComponent } from './LogoComponent';

export function Footer() {
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
		<footer className='bg-primary-50 px-5 py-10 text-foreground-50'>
			<div className='container mx-auto grid grid-cols-1 justify-between justify-items-center gap-10 align-middle lg:grid-cols-3'>
				<aside className='flex max-w-xs flex-col items-center justify-center gap-2'>
					<LogoComponent size='large' />
					<p className='mt-2 text-center text-lg font-semibold lg:text-left lg:text-xl'>
						Empowering business through design and technology.
					</p>
				</aside>
				<aside className='space-y-2 md:flex md:items-center md:justify-center md:space-x-3 md:space-y-0'>
					{menuItems.map((item, idx) => (
						<ul key={`${item.title}-${idx}`} className='cursor-pointer'>
							<Link
								className='w-full'
								// href={item.href}
								size='lg'
								onClick={() => scrollIntoSection(item.href)}
							>
								<p className='font-semibold text-foreground-50'>{item.title}</p>
							</Link>
						</ul>
					))}
				</aside>
				<aside className='space-y-2'>
					<h2 className='text-lg font-semibold'>Follow Us</h2>
					<ul className='flex space-x-3'>
						<li>
							<a href='#' className='text-foreground-50 hover:text-foreground-100'>
								Facebook
							</a>
						</li>
						<li>
							<a href='#' className='text-foreground-50 hover:text-foreground-100'>
								Twitter
							</a>
						</li>
						<li>
							<a href='#' className='text-foreground-50 hover:text-foreground-100'>
								Instagram
							</a>
						</li>
					</ul>
				</aside>
			</div>
			<div className='container mx-auto mt-10 text-center'>
				<p>&copy; {new Date().getFullYear()} Div Software. All rights reserved.</p>
			</div>
		</footer>
	);
}
