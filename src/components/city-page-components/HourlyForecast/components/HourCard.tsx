import React, { FC } from 'react';
import { HourCardProps } from 'types';

const HourCard: FC<HourCardProps> = ({ time, icon, text }) => {
  return (
    <div className='mx-2.5 font-Mulish'>
      <div className='font-light text-2xl text-center mb-5'>{time}</div>
      <div className='w-32 py-11 px-7 flex flex-col items-center justify-center bg-blured-grey backdrop-blur-sm rounded-primary'>
        <img className='h-16' src={icon} alt='cloudy' />
        <div className='mt-6 font-bold'>{text}</div>
      </div>
    </div>
  );
};

export default HourCard;
