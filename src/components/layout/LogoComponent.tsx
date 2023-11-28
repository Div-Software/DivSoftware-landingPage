import { Link } from '@nextui-org/react';
import logo from '/div-software-logo.svg?url';

interface LogoProps {
	size: 'small' | 'medium' | 'large';
}

export function LogoComponent({ size }: LogoProps) {
	const imageSizeClasses = {
		small: 'h-4 lg:h-5 xl:h-6',
		medium: 'h-6 lg:h-7 xl:h-8',
		large: 'h-7 lg:h-8 xl:h-10',
	};

	const textSizeClasses = {
		small: 'font-semibold text-xl lg:text-2xl xl:text-3xl',
		medium: 'font-bold text-2xl lg:text-3xl xl:text-4xl',
		large: 'font-bold text-3xl lg:text-4xl xl:text-5xl',
	};

	return (
		<Link href='/' className='flex gap-1 xs:gap-2'>
			<img
				src={logo}
				alt='Div Software'
				width={'100%'}
				height={16}
				loading='lazy'
				className={imageSizeClasses[size]}
			/>
			<div aria-label='logo name' className='flex flex-row gap-3'>
				<p className={`text-foreground-200 ${textSizeClasses[size]}`}>Div</p>
				<p className={`text-primary-500 ${textSizeClasses[size]}`}>Software</p>
			</div>
			<img
				src={logo}
				alt='Div Software'
				width={'100%'}
				height={16}
				loading='lazy'
				className={`${imageSizeClasses[size]} rotate-180`}
			/>
		</Link>
	);
}
