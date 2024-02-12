import clsx from 'clsx'
import Image from 'next/image'
import avatarSrc from '../header/avatar.png'

export function Profile({ name, ranking, avatar = avatarSrc, className }) {
	return (
		<div className={clsx(className, 'flex  items-center gap-2   text-teal-600')}>
			<Image src={avatar} alt='avatar' className='w-12' />
			<div className=' overflow-hidden '>
				<div className='text-lg truncate'>{name}</div>
				<div className='text-xs text-gray-400'>Ranking {ranking} </div>
			</div>
		</div>
	)
}
