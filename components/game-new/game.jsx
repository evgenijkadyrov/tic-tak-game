import { useReducer } from 'react'
import { PLAYERS } from './data-user'
import {
	GAME_STATE_ACTIONS,
	gameStateReducer,
	initialState,
} from './model/game-state-reducer'
import { getNextMove } from './model/get-next-move'
import { getWinner } from './model/get-winner'
import { GameCell } from './ui/game-cell'
import { GameInfo } from './ui/game-info'
import { GameLayout } from './ui/game-layout'
import { GameLink } from './ui/game-link'
import { GameMoveInfo } from './ui/game-move-info'
import { GameOverModal } from './ui/game-over-modal'
import { GameTitle } from './ui/game-title'
import { PlayerInfo } from './ui/player-info'

const PLAYERS_COUNT = 2

export function Game({}) {
	const [gameState, dispatch] = useReducer(
		gameStateReducer,
		{ playersCount: PLAYERS_COUNT },
		initialState
	)

	const winnerSequence = getWinner(gameState.cells)

	const nextMove = getNextMove(gameState.currentMove, gameState.playersCount)
	const winnerSymbol =
		gameState.currentMove === nextMove
			? gameState.currentMove
			: gameState.cells[winnerSequence?.[0]]

	const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol)

	return (
		<>
			<GameLayout
				backLink={<GameLink />}
				gameInfo={
					<GameInfo playersCount={2} timeMode={'1 min'} isRatingGame={true} />
				}
				title={<GameTitle />}
				playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
					return (
						<PlayerInfo
							key={player.id}
							isRight={index % 2}
							avatar={player.avatar}
							name={player.name}
							ranking={player.ranking}
							symbol={player.symbol}
							seconds={60}
							isTimerRunning={true}
						/>
					)
				})}
				gameMoveInfo={
					<GameMoveInfo
						currentMove={gameState.currentMove}
						nextMove={nextMove}
					/>
				}
				gameCells={gameState.cells.map((cell, i) => {
					return (
						<GameCell
							key={i}
							onClick={() =>
								dispatch({ type: GAME_STATE_ACTIONS.CLICK_CELL, i })
							}
							disabled={!!winnerSymbol}
							isWinner={winnerSequence?.includes(i)}
							symbol={cell}
						/>
					)
				})}
			></GameLayout>
			<GameOverModal
				players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
					return (
						<PlayerInfo
							key={player.id}
							isRight={index % 2}
							avatar={player.avatar}
							name={player.name}
							ranking={player.ranking}
							symbol={player.symbol}
							seconds={60}
							isTimerRunning={true}
						/>
					)
				})}
				winnerName={winnerPlayer?.name}
			/>
		</>
	)
}
