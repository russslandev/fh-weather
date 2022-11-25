import React, { FC } from 'react';
import Logo from '../../img/searchbar-logo.png';

const HeaderLogo: FC = () => {
  return (
    <div className='flex items-center min-w-fit'>
      <img className='flex items-center w-52 xl:w-60' src={Logo} alt='' />
    </div>
  );
};

export default HeaderLogo;
