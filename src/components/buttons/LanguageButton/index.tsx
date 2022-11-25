import React, { FC } from 'react';
import { ButtonProps } from 'types';

const LanguageButton: FC<ButtonProps> = ({ disabled, text, selected }) => {
  return (
    <button
      disabled={disabled}
      className={`border-[1px] rounded-primary text-center 
      disabled:bg-disabled-grey disabled:border-disabled-grey disabled:text-disabled-grey-dark disabled:drop-shadow-none py-3 px-9 font-Montserrat font-light text-xl ml-6 ${
        selected
          ? 'text-white bg-primary-blue border-primary-blue'
          : 'text-light-blue bg-white hover:drop-shadow-button'
      }`}>
      {text}
    </button>
  );
};

export default LanguageButton;
