import { ChangeEventHandler, ReactNode } from 'react';

type TInputProps = {
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  icon?: ReactNode; 
  type?: string;
  className?: string
};

const Input = (props:TInputProps) => {
  const { placeholder, value, onChange, icon, type = 'text', className = '' } = props;

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="block pl-12 pr-3 py-2.5 text-sm text-tertiary-light font-medium border border-tertiary-lightest rounded-md focus:outline-none focus:ring-1 focus:ring-tertiary-light focus:border-transparent"
      />
    </div>
  );
};

export { Input };
export default Input;
