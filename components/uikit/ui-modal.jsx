import clsx from 'clsx'
import { createPortal } from 'react-dom'
import { CloseIcon } from '../game-new/icons/close-icon'

UiModal.Header = function UiModalHeader({ children, className }) {
	return (
		<div className={clsx('px-6 py-4 text-2xl w-72', className)}>{children}</div>
	)
}
UiModal.Body = function UiModalBody({ children, className }) {
	return <div className={clsx('px-6 py-4', className)}>{children}</div>
}
UiModal.Footer = function UiModalFooter({ children, className }) {
	return (
		<div className={clsx('p-6 mt-auto flex  gap-4 justify-end ', className)}>
			{children}
		</div>
	)
}
export function UiModal({
	width,
	className,
	children,
	isOpen = false,
	onClose,
}) {
	if (!isOpen) {
		return null
	}
	const handleClick = e => {
		const inModal = e.target.closest('[data-id=data-modal]')
		if (inModal) {
			return
		}
		onClose()
	}
	const modal = (
		<div
			className={clsx(
				className,
				'backdrop-blur fixed inset-0 bg-slate-900/60 pt-10 pb-10 overflow-y-auto'
			)}
		>
			<div
				onClick={handleClick}
				data-id='data-modal'
				className={clsx(
					'bg-white  rounded-lg min-h-[320px] mx-auto relative',
					'flex flex-col',
					{
						md: 'max-w-[640px] w-full',
						full: ' mx-5',
					}[width]
				)}
			>
				{children}
				<button
					onClick={onClose}
					className='flex items-center justify-center w-8 h-8 absolute top-0 rounded transition-color bg-white/10 left-[calc(100%+12px)] hover:bg-white/40'
				>
					<CloseIcon className='w-4 h-4 text-white' />
				</button>
			</div>
		</div>
	)
	return createPortal(modal, document.getElementById('modals'))
}
