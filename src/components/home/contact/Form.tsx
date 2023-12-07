import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { t } from 'i18next';
import React, { useState } from 'react';

interface Props {
	children: JSX.Element;
}

export const Form = ({ children }: Props) => {
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
			<div className='flex w-full flex-col items-center  divide-gray-400 overflow-x-hidden rounded-md bg-gradient-to-b from-primary-200 to-primary-50 p-5  backdrop-blur-2xl xs:divide-y lg:flex-row lg:divide-x lg:divide-y-0'>
				{' '}
				<div className=' px-5 xs:mb-10 sm:px-10  '>
					<div className='my-6 flex w-full flex-wrap gap-4 md:flex-nowrap'>
						<Input
							color={'primary'}
							isRequired
							name='fullName'
							type='text'
							label={t('home.contact.form.name.names')}
							placeholder={t('home.contact.form.name.placeholder')}
							value={formData.fullName}
							onChange={handleChange}
							classNames={defaultClass}
						/>

						<Input
							color={'primary'}
							isRequired
							name='email'
							type='email'
							label={t('home.contact.form.email.email')}
							placeholder={t('home.contact.form.email.placeholder')}
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
							label={t('home.contact.form.phone.phone')}
							placeholder={t('home.contact.form.phone.placeholder')}
							className='w-full'
							value={formData.phoneNumber}
							onChange={handleChange}
							classNames={defaultClass}
						/>

						<Select
							color={'primary'}
							classNames={defaultClass}
							className='w-full'
							label={t('home.contact.form.services.services')}
							placeholder={t('home.contact.form.services.placeholder')}
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
							<span className='text-primary-700'>{t('home.contact.form.terms.acceptance')}</span>
							<span className='text-primary-700'>
								{t('home.contact.form.terms.termsAndConditions')}{' '}
							</span>
							{t('home.contact.form.terms.andOur')}
							<span className='text-primary-700'>
								{' '}
								{t('home.contact.form.terms.privacyPolicy')}{' '}
							</span>{' '}
							{t('home.contact.form.terms.explanation')}
						</label>
					</div>

					<Button
						type='submit'
						className='mt-4 w-full bg-primary-500 px-4 py-2 text-white shadow-md hover:bg-primary-200'
					>
						Enviar
					</Button>
				</div>
				<div className='pt-6 xs:px-10 lg:pt-0'>{children}</div>
			</div>
		</form>
	);
};
