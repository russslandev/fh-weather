import React, { FC } from 'react';
import { WidgetProps } from 'types';

const Widget: FC<WidgetProps> = ({ children, title, titleImage }) => {
  return (
    <div className='relative pr-full pb-full rounded-primary bg-cover bg-center bg-[url(/src/assets/images/widget-bg.png)] font-Mulish'>
      <div className='absolute w-full h-full'>
        <div className='flex justify-center items-center text-4xl mt-[15%]'>
          <img className='mr-2.5' src={titleImage} alt='' />
          <div>{title}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Widget;
