import React, { FC } from 'react';
import { WidgetStaticProps } from 'types';

const WidgetInnerStatic: FC<WidgetStaticProps> = ({
  textMain,
  textSecondary,
}) => {
  return (
    <div className='mt-14'>
      <div className='font-Open-Sans font-light text-7xl text-center mb-14'>
        {textMain}
      </div>

      <div className='font-light text-2xl text-center font-Open-Sans'>
        {textSecondary}
      </div>
    </div>
  );
};

export default WidgetInnerStatic;
