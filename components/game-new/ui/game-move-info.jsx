import { GameSymbol } from '../game-symbol'
export function GameMoveInfo({currentMove, nextMove}){
	return(
		<div className='flex items-center justify-between w-[570px] h-10 mb-3'>
			<div className='flex flex-col w-23 '>
				<div className='text-xl flex items-center gap-2'>
					Move:
					<GameSymbol symbol={currentMove} className='w-5 h-5' />
				</div>
				<div className='text-xs text-slate-400 flex items-center gap-2'>
					Next: <GameSymbol symbol={nextMove} className='w-3 h-3' />
				</div>
			</div>
		</div>
	)
}