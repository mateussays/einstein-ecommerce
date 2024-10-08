type CheckboxProps = {
  label: string
  checked: boolean
  value: string
  onChange: () => void
}

const Checkbox = ({ label, checked, onChange, value }: CheckboxProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <div
        className={`w-4 h-4 flex items-center justify-center border-2 rounded ${
          checked
            ? 'bg-tertiary-dark border-tertiary-dark'
            : 'border-tertiary-lightest'
        }`}
      >
        {checked && (
          <svg
            className="w-3.5 h-3.5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      {label && (
        <span className="text-tertiary-dark text-sm ml-1">{label}</span>
      )}
    </label>
  )
}

export default Checkbox
export { Checkbox }
