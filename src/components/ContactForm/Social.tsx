import telegramLogo from '@assets/social/telegramlogo.png';
import whatsappLogo from '@assets/social/whatsapplogo.png';

export const Social = () => {
	return (
		<div className='container mx-auto text-center'>
			<div className='py-8'>
				<p className='text-left text-2xl font-bold'>Do you want a direct message?</p>
				<p className='mt-2 text-left text-base'>
					Contact us and we will respond to you in less than 24 hours.
				</p>
			</div>
			<div className='flex flex-col items-center justify-center '>
				<div className=' my-4 flex items-center rounded-lg p-4 md:my-0'>
					<div className='flex items-center bg-white/5 p-8 shadow-lg backdrop-blur-2xl'>
						<div className='bg-whatsapp shadow-whatsapp flex h-24 w-36 items-center justify-center rounded-xl shadow backdrop-blur-3xl'>
							<img src={whatsappLogo.src} alt='Telegram' className='h-12 w-12' />
						</div>
						<div className='ml-4'>
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
					<div className='flex items-center bg-white/5 p-8 shadow-lg backdrop-blur-2xl'>
						<div className='bg-telegram shadow-whatsapp flex h-24 w-36 items-center justify-center rounded-xl shadow backdrop-blur-3xl'>
							<img src={telegramLogo.src} alt='Telegram' className='h-12 w-12' />
						</div>
						<div className='ml-4'>
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
