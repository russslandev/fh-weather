import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { serviceIcons } from '../../../assets/Icons';
import LanguageButton from '../../buttons/LanguageButton';

const HeaderButtons: FC = () => {
  return (
    <div className='flex justify-between items-center'>
      <Link to={'/'}>
        <div className='mx-4 w-10'>
          <img src={serviceIcons['home-outlined']} />
        </div>
      </Link>
      <LanguageButton text='RU' selected />
      <LanguageButton text='UA' />
    </div>
  );
};

export default HeaderButtons;
