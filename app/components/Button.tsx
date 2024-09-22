'use client';
import React from 'react';

interface ButtonProps {
  text: string;
//   onClick: () => void;
  className?: string;
  additionalStyles?: string;
}

const Button: React.FC<ButtonProps> = ({ text,className, additionalStyles }) => {
  return (
    <button
     
      className={`border border-green-700 text-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-white ${className} ${additionalStyles}`}
    >
      {text}
    </button>
  );
};

export default Button;
