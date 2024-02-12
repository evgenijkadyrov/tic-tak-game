import clsx from 'clsx'
/**
 * 
 * @param {{
 * children,
 * className,
 * size:'lg'|'mg',
 * variant:'primary'|'outlined'}} param0 
 * @returns 
 */

export function UiButton({ children, className, size, variant }) {
	const buttonClass = clsx(
		'  transition-colors ',
		className,
		{
			lg: 'w-44 h-11 rounded-lg px-5 py-2 text-2xl',
			md: 'w-23 h-6 rounded px-6  text-sm',
		}[size],
		{
			primary: 'bg-teal-600 text-white  hover:bg-teal-500',
			outlined: 'bg-white border border-teal-600 text-teal-600 hover:bg-teal-50',
		}[variant]
	)
	return <button className={buttonClass}>{ children }</button>
}
