import './styles.css'

type ColorScheme = 'black' | 'gray' | 'red' | 'yellow' | 'cyan'
type Size = 'small' | 'medium' | 'large'

type ButtonProps = {
   children?: React.ReactNode
   colorScheme?: ColorScheme
   size?: Size
   isLoading?: boolean
   isDisabled?: boolean
   fullWidth?: boolean
} & React.DetailedHTMLProps<
   React.ButtonHTMLAttributes<HTMLButtonElement>,
   HTMLButtonElement
>

export function Button({
   children,
   colorScheme = 'black',
   className = '',
   size = 'medium',
   isLoading = false,
   isDisabled = false,
   fullWidth = false,
   ...rest
}: ButtonProps) {
   let _className = `button button-${colorScheme}`

   if (fullWidth) _className += ' w-100'
   if (size !== 'medium') _className += ` button-${size}`

   return (
      <button
         className={_className + ` ${className}`}
         {...rest}
      >
         {children}
      </button>
   )
}
