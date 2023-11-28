import { rootImages } from '@core/rootImages';
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

	const socialMedia = [
		{
			title: 'Github',
			href: '#',
			icon: rootImages.icons.github,
		},
		{
			title: 'Facebook',
			href: '#',
			icon: rootImages.icons.facebook,
		},
		{
			title: 'Instagram',
			href: '#',
			icon: rootImages.icons.instagram,
		},
	];

	return (
		<footer className='bg-primary-50 px-5 py-10 text-foreground-50'>
			<div className='container mx-auto grid grid-cols-1 justify-items-center gap-10 align-middle lg:grid-cols-3'>
				<aside className='flex flex-col items-center justify-center gap-2'>
					<LogoComponent size='large' />
					<p className='mt-2 max-w-xs text-center text-lg font-semibold lg:text-left lg:text-xl'>
						Empowering business through design and technology.
					</p>
				</aside>
				<aside className='flex flex-col items-center justify-center gap-3 space-y-2 md:space-x-3 md:space-y-0'>
					<p className='text-center text-lg font-semibold'>Navigation</p>
					<ul className='flex flex-row gap-2 sm:gap-3'>
						{menuItems.map((item, idx) => (
							<Link
								key={`${item.title}-${idx}`}
								className='w-full cursor-pointer'
								// href={item.href}
								size='lg'
								onClick={() => scrollIntoSection(item.href)}
							>
								<p className='font-semibold text-foreground-50'>{item.title}</p>
							</Link>
						))}
					</ul>
				</aside>
				<aside className='flex flex-col items-center justify-center space-y-2'>
					<p className='text-lg font-semibold'>Follow Us</p>
					<ul className='flex cursor-pointer flex-row gap-2'>
						{socialMedia.map((social, idx) => (
							<Link
								key={`${social.title}-${idx}`}
								className='w-full'
								href={social.href}
								target='_blank'
								rel='noopener noreferrer'
								size='lg'
							>
								<img
									src={social.icon}
									alt={social.title}
									width={40}
									height={40}
									className='hover:brightness-200'
								/>
							</Link>
						))}
					</ul>
				</aside>
			</div>
			<div className='container mx-auto mt-10 text-center'>
				<p>&copy; {new Date().getFullYear()} Div Software. All rights reserved.</p>
			</div>
		</footer>
	);
}
