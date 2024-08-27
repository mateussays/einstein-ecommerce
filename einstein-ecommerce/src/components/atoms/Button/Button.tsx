type ButtonProps = {
  label: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  className?: string
  onClick: () => void
}

const Button = ({ label, icon: Icon, className, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-[10px] text-white bg-primary-dark hover:bg-gray-700 focus:outline-none' ${
        className
      }`}
    >
      {label}
      {Icon && <Icon className="ml-2" />}
    </button>
  )
}

export default Button
export { Button }
