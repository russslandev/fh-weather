import React, { FC } from 'react';
import { TooltipProps, WeatherResponseDay } from 'types';
import { weatherIcons } from 'assets/Icons';

const getIcon = (dailyForecast: WeatherResponseDay[], dt: number): string => {
  return weatherIcons[
    dailyForecast.find(day => day.dt === dt)?.weather[0]?.id as number
  ];
};

export const Tooltip: FC<TooltipProps> = ({ datum, x, y, dailyForecast }) => {
  return (
    <g>
      <foreignObject
        fontSize={'16px'}
        x={x}
        y={y}
        width='300'
        height='800'
        style={{ overflow: 'visible' }}>
        <div className='scale-[.3] -translate-x-[35%] -translate-y-[35%] max-w-xxs bg-white rounded-primary text-black font-Mulish py-10 px-6'>
          <div className='flex flex-wrap justify-between items-center mb-2.5 font-semibold'>
            {/* UV Bar */}
            {/* <div className='h-5 w-full rounded-primary mb-4 bg-grade-gradient px-2.5'>
              <div className='relative h-full'>
                <div className='absolute top-1/2 left-[100%] h-4 w-4 rounded-full bg-white bg-opacity-70 -translate-y-1/2 -translate-x-1/2'></div>
              </div>
            </div> */}

            {/* Precipitation tooltip header */}
            {/* <div className='text-base'>0.7 mm</div> */}

            {/* Temp tooltip header */}
            <div className='text-base'>
              {datum?.y}° <span className='text-secondary-grey'>Min??°</span>
            </div>
            <img
              className='h-10'
              src={getIcon(dailyForecast, datum?.x as number)}
              alt=''
            />

          </div>
          <div className='font-light leading-5 text-base'>
            <div className='mb-2'>
              В понедельник минимальная температура воздуха составит ???° в
              00:00.
            </div>
            <div>Воздух прогреется до {datum?.y}° между 14:00 и 15:00.</div>
          </div>
        </div>
      </foreignObject>
    </g>
  );
};

export default Tooltip;
