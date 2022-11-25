import React, { FC } from 'react';
import { BackdropShadowProps } from '../../../types';

const BackdropShadow: FC<BackdropShadowProps> = ({ hidden }) => {
  return (
    <div
      className={`${
        hidden ? 'hidden' : ''
      } w-screen h-screen fixed top-0 left-0 bg-search-shadow bg-opacity-50 z-10`}></div>
  );
};

export default BackdropShadow;
