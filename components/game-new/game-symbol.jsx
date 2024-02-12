import { GAME_SYMBOL } from './constants'
import { CrossIcon } from './icons/cross-icon'
import { RoundIcon } from './icons/round-icon'
import { SquereIcon } from './icons/squere-icon'
import { TringleIcon } from './icons/tringle-icon'

export function GameSymbol({symbol, className}){
	const Icon={
[GAME_SYMBOL.CROSS]: CrossIcon,
[GAME_SYMBOL.ZERO]: RoundIcon,
[GAME_SYMBOL.SQUARE]: SquereIcon,
[GAME_SYMBOL.TRINGLE]: TringleIcon

	}[symbol]
	return (
	<Icon className={className} />)
}