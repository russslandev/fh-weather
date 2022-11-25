import React, { FC } from 'react';
import { WidgetSunriseProps } from 'types';
import curvedLine from 'components/img/dynamic-widgets-icons/sunrise-time/Vector 11.svg';
import { getStringTime } from 'helpers';

const getPositionOfLine = (sunrise: number, sunset: number): number => {
  const oneDay = 86400000;
  return ((sunset - sunrise) / oneDay) * 100;
};

const WidgetInnerSunrise: FC<WidgetSunriseProps> = ({ sunrise, sunset }) => {
  return (
    <div className='flex flex-col'>
      <div className='font-Open-Sans font-light text-7xl text-center mt-4 mb-2'>
        {getStringTime(sunrise)}
      </div>
      <div className='flex flex-col relative'>
        <img className='sunrise-curved' src={curvedLine} alt='line' />
        <div
          style={{ top: `${getPositionOfLine(sunrise, sunset)}%` }}
          className='absolute border-1px border-widget-sunrise-border w-full'></div>
      </div>
      <div className='font-light text-2xl text-center font-Open-Sans'>
        Sunset: {getStringTime(sunset)}
      </div>
    </div>
  );
};

export default WidgetInnerSunrise;
