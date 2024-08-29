import { ChangeEventHandler, ReactNode } from 'react'

type InputProps = {
  placeholder?: string
  value: string
  icon?: ReactNode
  type?: 'text'
  className?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onClick?: () => void
}

const Input = ({
  placeholder,
  value,
  icon,
  type = 'text',
  className = '',
  onChange,
  onKeyDown,
  onClick
}: InputProps) => {
  return (
    <div className={`relative ${className}`}>
      {icon && (
        <div
          className="absolute inset-y-0 left-0 flex items-center pl-3.5 cursor-pointer"
          onClick={onClick}
        >
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        className="block pl-12 pr-3 py-2.5 text-sm text-tertiary-light font-medium border border-tertiary-lightest rounded-md focus:outline-none focus:ring-1 focus:ring-tertiary-light focus:border-transparent"
      />
    </div>
  )
}

export default Input
export { Input }
