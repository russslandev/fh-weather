import React, { FC } from 'react';
import { ButtonProps } from 'types';

const PrimaryButton: FC<ButtonProps> = ({ text, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`border-1px rounded-primary text-center hover:drop-shadow-button active:bg-dark-blue disabled:bg-disabled-grey disabled:border-disabled-grey disabled:text-disabled-grey-dark disabled:drop-shadow-none text-white py-4 px-10 font-Mulish text-xl font-bold bg-primary-blue border-none`}>
      {text}
    </button>
  );
};

export default PrimaryButton;
