import clsx from 'clsx'
import Image from 'next/image'
import { GameSymbol } from '../game-symbol'



function formattedTime(time) {
	return String(Math.floor(time)).padStart(2, '0')
}

export function PlayerInfo({name, ranking, avatar, isRight,symbol ,seconds, isTimerRunning}) {

	const minute = formattedTime(seconds / 60)
	const secondsRemain = formattedTime(seconds % 60)
	const timeIsOut = seconds < 10

	return (
		<div className={clsx('flex gap-3 items-center')}>
			<div className={clsx('relative', isRight && 'order-3')}>
				<div
					className={clsx(
						
						'flex  items-center gap-2   text-teal-600 w-36'
					)}
				>
					<Image src={avatar} alt='avatar' className='w-12' />
					<div className=' overflow-hidden '>
						<div className='text-lg truncate'>{name}</div>
						<div className='text-xs text-gray-400'>Ranking {ranking} </div>
					</div>
				</div>
				<div className='w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center '>
					<GameSymbol symbol={symbol} />
				</div>
			</div>
			<div
				className={clsx('w-px h-6 bg-slate-200 ', isRight && 'order-2')}
			></div>
			<div
				className={clsx(
					'text-lg font-semibold text-gray-900 w-16',
					isRight && 'order-1',
					timeIsOut && 'text-orange-600',
					!isTimerRunning && 'opacity-30'
				)}
			>
				{minute}:{secondsRemain}
			</div>
		</div>
	)
}
