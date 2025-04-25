import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none';
  const variantStyles = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-100',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;