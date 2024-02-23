import React from 'react';

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<IButtonProps> = ({ children }) => {
  return <button className='py-[9px] px-[20px] bg-blueviolet-dark rounded-md text-white text-md font-semibold'>{children}</button>;
};

export default Button;
