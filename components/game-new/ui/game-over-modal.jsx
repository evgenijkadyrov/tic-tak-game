import {UiModal} from '../../uikit/ui-modal'
import {UiButton} from '../../uikit/Ui-Button'
export function GameOverModal({winnerName,players}){
	return (
		<UiModal width={'md'} isOpen={winnerName}>
				<UiModal.Header>Game finished!</UiModal.Header>
				<UiModal.Body>
					<div className='text-sm'>
						Winner: <span className='text-teal-600'>{winnerName} </span>
						
					</div>
					<div className=' mt-4 grid grid-cols-2 gap-3 justify-center'>
						{players}
					</div>
				</UiModal.Body>
				<UiModal.Footer>
					<UiButton size='md' variant='outlined'>
						{' '}
						Go back
					</UiButton>
					<UiButton size='md' variant='primary'>
						{' '}
						Play again
					</UiButton>
				</UiModal.Footer>
			</UiModal> 
	)
}