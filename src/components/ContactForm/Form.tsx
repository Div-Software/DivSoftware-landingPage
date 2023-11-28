import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react';

import React, { useState } from 'react';
import { Social } from './Social';
export const Form = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
		service: '',
		message: '',
		acceptTerms: false,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value, type } = e.target;
		const fieldValue = value;
		setFormData((prevState) => ({
			...prevState,
			[name]: fieldValue,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
	};

	const defaultClass = {
		label: 'text-black dark:text-white/90',
		input: ['bg-transparent', 'placeholder:text-default-700/50 dark:placeholder:text-white/60'],
		innerWrapper: 'bg-transparent',
		// inputWrapper: [
		// 	'shadow-xl',
		// 	'bg-default-200/50',
		// 	'dark:bg-default/60',
		// 	'backdrop-blur-xl',
		// 	'backdrop-saturate-200',
		// 	'hover:bg-default-200/70',
		// 	'dark:hover:bg-default/70',
		// 	'group-data-[focused=true]:bg-default-200/50',
		// 	'dark:group-data-[focused=true]:bg-default/60',
		// 	'!cursor-text',
		// ],
	};

	const services = ['Frontend', 'Backend', 'Devops', 'Full Stack', 'QA'];
	return (
		<form onSubmit={handleSubmit} className=' shadow-lg'>
			<div className='flex w-full flex-col items-center divide-y divide-gray-400 overflow-x-hidden rounded-md bg-gradient-to-b from-primary-200 to-primary-50 p-5 py-20 backdrop-blur-2xl lg:flex-row lg:divide-x lg:divide-y-0'>
				{' '}
				<div className=' px-10 xs:mb-10  '>
					<div className='my-6 flex w-full flex-wrap gap-4 md:flex-nowrap'>
						<Input
							color={'primary'}
							isRequired
							name='fullName'
							type='text'
							label='Full name'
							placeholder='Enter your name'
							value={formData.fullName}
							onChange={handleChange}
							classNames={defaultClass}
						/>

						<Input
							color={'primary'}
							isRequired
							name='email'
							type='email'
							label='Email'
							placeholder='Enter your email'
							value={formData.email}
							onChange={handleChange}
							className='w-full'
							classNames={defaultClass}
						/>
					</div>

					<div className='my-6 flex w-full flex-wrap gap-4 md:flex-nowrap'>
						<Input
							color={'primary'}
							isRequired
							name='phoneNumber'
							type='number'
							label='Phone number'
							placeholder='Enter your phone'
							className='w-full'
							value={formData.phoneNumber}
							onChange={handleChange}
							classNames={defaultClass}
						/>

						<Select
							color={'primary'}
							classNames={defaultClass}
							label='Services'
							className='w-full'
							placeholder='Select a service'
						>
							{services.map((animal) => (
								<SelectItem key={animal} value={animal}>
									{animal}
								</SelectItem>
							))}
						</Select>
					</div>

					<div className='my-6 flex w-full flex-wrap gap-4 md:flex-nowrap'>
						<Textarea
							color={'primary'}
							classNames={defaultClass}
							label='Message'
							name='message'
							placeholder='Enter your description'
							className='max-w w-full'
							value={formData.message}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label>
							Al enviar este formulario, accepta nuestros{' '}
							<span className='text-primary-700'>terminos y condiciones </span> y nuestra
							<span className='text-primary-700'> politica de privacidad </span> que explica como
							podemos recoger, utilizar y divulgar sus datos personales, incluso a terceros
						</label>
					</div>

					<Button
						type='submit'
						className='mt-4 w-full bg-primary-500 px-4 py-2 text-white shadow-md hover:bg-primary-200'
					>
						Enviar
					</Button>
				</div>
				<div className='px-10'>
					<Social />
				</div>
			</div>
		</form>
	);
};
