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

	const services = ['Frontend', 'Backend', 'Devops', 'Full Stack', 'QA'];
	return (
		<form onSubmit={handleSubmit} className=' shadow-lg'>
			<div className=' flex w-full flex-col items-center divide-y divide-gray-400 rounded-md bg-primary-200/30  p-5 py-20  backdrop-blur-2xl  lg:flex-row lg:divide-x lg:divide-y-0  '>
				<div className=' px-10  '>
					<div className='flex w-full flex-wrap gap-9 md:flex-nowrap '>
						<Input
							isRequired
							name='fullName'
							type='text'
							label='Full name'
							defaultValue='Miguel Doe'
							placeholder='Enter your name'
							className='bg-blur '
							value={formData.fullName}
							onChange={handleChange}
						/>

						<Input
							isRequired
							name='email'
							type='email'
							label='Email'
							defaultValue='junior@nextui.org'
							placeholder='Enter your email'
							className='bg-blur '
							value={formData.email}
							onChange={handleChange}
						/>
					</div>

					<div className='my-6 flex w-full flex-wrap gap-4 md:flex-nowrap'>
						<Input
							isRequired
							name='phoneNumber'
							type='number'
							label='Phone number'
							defaultValue='5839123942'
							placeholder='Enter your phone'
							className='bg-blur '
							value={formData.phoneNumber}
							onChange={handleChange}
						/>

						<Select label='Services' className='bg-blur' placeholder='Select a service'>
							{services.map((animal) => (
								<SelectItem key={animal} value={animal}>
									{animal}
								</SelectItem>
							))}
						</Select>
					</div>

					<div className='my-6 flex w-full flex-wrap gap-4 md:flex-nowrap  '>
						<Textarea
							label='Message'
							name='message'
							placeholder='Enter your description'
							className='max-w bg-blur'
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
