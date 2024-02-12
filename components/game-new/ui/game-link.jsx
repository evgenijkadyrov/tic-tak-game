import Link from 'next/link'
import { ArrowLeftIcon } from '../icons/arrow-lift-icon'
export function GameLink() {
	return (
		<div className='mb-2'>
			<Link className='flex items-center w-22 h-4 text-teal-600 gap-2' href='#'>
				<ArrowLeftIcon /> On main
			</Link>
		</div>
	)
}
