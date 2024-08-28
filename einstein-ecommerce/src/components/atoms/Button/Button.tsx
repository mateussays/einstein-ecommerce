type ButtonProps = {
  label: string
  icon?: React.ElementType<React.SVGProps<SVGSVGElement>>
  className?: string
  onClick: () => void
  disabled?: boolean
}

const Button = ({
  label,
  icon: Icon,
  className,
  onClick,
  disabled = false
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-[10px] text-white bg-primary-dark hover:bg-gray-700 focus:outline-none ${
        className || ''
      }`}
    >
      {label}
      {Icon && (
        <div className="ml-2">
          <Icon />
        </div>
      )}
    </button>
  )
}

export default Button
export { Button }
