import clsx from 'clsx'
export function GameLayout({
	backLink,
	title,
	gameInfo,
	playersList,
	gameMoveInfo,
	gameCells,
}) {
	return (
		<div>
			<div className='pl-2'>
				{backLink}
				{title}
				{gameInfo}
			</div>
			<div
				className={clsx(
					'mt-4 grid items-center justify-around gap-3  bg-white rounded-2xl px-8 py-2 grid-cols-2 shadow-md'
				)}
			>
				{playersList}
			</div>
			<div
				className={clsx(
					'mt-8 border-2 border-teal-600 rounded-2xl w-[616px] h-[671px] px-5 py-5 bg-white'
				)}
			>
				{gameMoveInfo}
				<div className='  grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] '>
					{gameCells}
				</div>
			</div>
		</div>
	)
}
