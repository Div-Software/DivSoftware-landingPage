import { rootImages } from '@core/rootImages';

export const Social = () => {
	return (
		<div className='container mx-auto text-center'>
			<div className='py-8'>
				<p className='text-center text-2xl font-bold sm:text-left'>Do you want a direct message?</p>
				<p className='mt-2 text-center text-base sm:text-left'>
					Contact us and we will respond to you in less than 24 hours.
				</p>
			</div>
			<div className='flex flex-col items-center justify-center '>
				<div className=' my-4 flex  items-center rounded-lg p-4 md:my-0'>
					<div className='flex flex-col items-center gap-4 bg-white/5 p-4 shadow-lg backdrop-blur-2xl sm:flex-row sm:p-8'>
						<div className='flex h-24 w-36 items-center justify-center rounded-xl bg-whatsapp shadow shadow-whatsapp backdrop-blur-3xl'>
							<img src={rootImages.social.whatsapp} alt='Telegram' className='h-12 w-12' />
						</div>
						<div>
							<p className='text-lg'>WhatsApp</p>
							<p className='text-base'>
								{`https://api.whatsapp.com/send/?phone=584126712946&text&type=phone_number&app_absent=0`.slice(
									0,
									30
								)}
								...
							</p>
						</div>
					</div>
				</div>
				<div className=' my-4 flex items-center rounded-lg p-4 md:my-0'>
					<div className='flex flex-col items-center gap-4 bg-white/5 p-4 shadow-lg backdrop-blur-2xl sm:flex-row sm:p-8'>
						<div className=' flex h-24 w-36 items-center justify-center rounded-xl bg-telegram shadow shadow-whatsapp backdrop-blur-3xl'>
							<img src={rootImages.social.telegram} alt='Telegram' className='h-12 w-12' />
						</div>
						<div>
							<p className='text-lg'>Telegram</p>
							<p className='text-base'>
								{`https://api.telegram.com/send/?phone=584126712946&text&type=phone_number&app_absent=0`.slice(
									0,
									30
								)}
								...
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
