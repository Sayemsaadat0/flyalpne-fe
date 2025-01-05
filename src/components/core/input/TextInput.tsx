import { cn } from '../../../lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

// Define the props type for TextInput component using 'type'
type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: any;
  className?: string;
};

// Variants using class-variance-authority
const inputVariants = cva(
  'py-2.5 px-3 md:px-[30px] md:px-[32px] md:py-[18px] border w-full rounded-[10px] remove-arrow outline-none bg-inherit text-[14px] peer bg-white m-0 border-f-primary-1 text-f-primary-1-900',
);

const TextInput: React.FC<TextInputProps> = ({
  label,
  className,
  type = 'text', // Default type is 'text'
  id,
  error,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <div className="relative">
        <input
          autoComplete="off"
          type={type}
          id={id}
          className={cn(inputVariants({ className }))}
          placeholder={placeholder || ''}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="absolute bg-white rounded-lg text-sm duration-300 transform px-3 -translate-y-3 scale-75 z-10 origin-[0] peer-focus:px-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            {label}
          </label>
        )}
      </div>
      {error && <p className="text-red-600 pt-2">{error}</p>}
    </div>
  );
};

export default TextInput;
