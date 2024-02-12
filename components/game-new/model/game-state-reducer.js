import { GAME_SYMBOL } from '../constants'
import { getNextMove } from './get-next-move'

export const GAME_STATE_ACTIONS = {
	CLICK_CELL: 'click-cell',
}
export const gameStateReducer = (state, action) => {
	switch (action.type) {
		case GAME_STATE_ACTIONS.CLICK_CELL: {
			const index = action.i
			if (state.cells[index]) {
				return state
			}
			return {
				...state,
				currentMove: getNextMove(state.currentMove, state.playersCount),
				cells: state.cells.map((cell, i) =>
					i === index ? state.currentMove : cell
				),
			}
		}

		default: {
			return state
		}
	}
}
export const initialState = ({ playersCount }) => ({
	cells: new Array(19 * 19).fill(''),
	currentMove: GAME_SYMBOL.CROSS,
	playersCount,
})
