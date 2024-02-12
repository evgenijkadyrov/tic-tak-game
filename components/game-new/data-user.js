import avatar1 from './images/avatar-1.png'
import avatar2 from './images/avatar-2.png'
import avatar3 from './images/avatar-3.png'
import avatar4 from './images/avatar-4.png'
import { GAME_SYMBOL } from './constants'
 export const PLAYERS = [
	{
		id: 1,
		name: 'Paramag',
		avatar: avatar1,
		ranking: 1204,
		symbol: GAME_SYMBOL.CROSS,
	},
	{
		id: 2,
		name: 'Lara',
		avatar: avatar2,
		ranking: 1400,
		symbol: GAME_SYMBOL.ZERO,
	},
	{
		id: 3,
		name: 'David',
		avatar: avatar4,
		ranking: 765,
		symbol: GAME_SYMBOL.SQUARE,
	},
	{
		id: 4,
		name: 'Valerija',
		avatar: avatar3,
		ranking: 344,
		symbol: GAME_SYMBOL.TRINGLE,
	},
]