import React, { FC } from 'react';
import HeaderButtons from 'components/Header/components/HeaderButtons';
import HeaderLogo from 'components/Header/components/HeaderLogo';
import Search from 'components/Header/components/Search';

const Header: FC = () => {
  return (
    <div className='pt-8 pb-20 w-full flex justify-between text-black'>
      <HeaderLogo />
      <Search />
      <HeaderButtons />
    </div>
  );
};

export default Header;
