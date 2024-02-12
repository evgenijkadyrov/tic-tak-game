import Image from 'next/image'
import { Profile } from '../profile'

import { ArrowDownIcon } from './icons/ArrowDownIcon'
import logo from './logo.svg'
import { UiButton } from '../uikit/Ui-Button'
export function Header() {
	return (
		<header className='flex h-24 bg-white items-center px-8 shadow-md'>
			<Image src={logo} alt='logo' />

			<div className='w-px h-8 bg-slate-200 mx-6'></div>
			<UiButton size='lg' variant='primary'>Play</UiButton>
		
			<button className='flex  items-center ml-auto' >
				<Profile name='Paramag' ranking='1208' />

				<ArrowDownIcon />
			</button>
		</header>
	)
}
