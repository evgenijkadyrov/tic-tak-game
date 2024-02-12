import { GameSymbol } from '../game-symbol'
import clsx from 'clsx'
export function GameCell({disabled, onClick, isWinner, symbol}){
	
	return (
		<button
		disabled={disabled}
			onClick={onClick}
			className={clsx(
				'border border-slate-200 flex items-center justify-center',
				isWinner && 'bg-orange-600/30'
			)}
		>
		{symbol && <GameSymbol symbol={symbol} className='w-5 h-5' />}
		</button>
	)
}