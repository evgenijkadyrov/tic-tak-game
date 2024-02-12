import { Header } from '../components/header'
import {Game} from '../components/game-new'
export default function HomePage() {
	
	return (
		<HomePageLayout header={<Header />}>
      <Game/>

    
			{/* <GameTitle playersCount={playersCount} />
			<GameInfo
				className='mt-5'
				playersCount={playersCount}
				currentMove={currentMove}
				winnerSequence={winnerSequence}
				handleCellClick={handleCellClick}
			/>
			{/* <div>{winnerSymbol && <GameSymbol symbol={winnerSymbol} />}</div> */}
			{/* */}
			{/* <GameField
				className='mt-5'
				cells={cells}
				currentMove={currentMove}
				nextMove={nextMove}
				handleCellClick={handleCellClick}
				winnerSequence={winnerSequence}
				winnerSymbol={winnerSymbol}
			/>  */}
		</HomePageLayout>
	)
}
function HomePageLayout({ children, header }) {
	return (
		<div className='bg-slate-50 '>
			{header}
			<main className='max-w-[614px] mx-auto h-screen mt-6'>{children}</main>
		</div>
	)
}
