type ButtonProps = {
  label: string
  icon?: React.ElementType<React.SVGProps<SVGSVGElement>>
  className?: string
  disabled?: boolean
  onClick: () => void
}

const Button = ({
  label,
  icon: Icon,
  className = '',
  disabled = false,
  onClick
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-[10px] text-white bg-primary-dark hover:bg-gray-700 focus:outline-none ${className}`}
    >
      {label}
      {Icon && (
        <span className="ml-2">
          <Icon />
        </span>
      )}
    </button>
  )
}

export default Button
export { Button }
