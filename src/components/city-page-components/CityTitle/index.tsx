import React, { FC } from 'react';
import { serviceIcons } from 'assets/Icons';
import { CityTitleProps } from 'types';
import { getStringDate, uppercaseFirstLetter } from 'helpers';

const CityTitle: FC<CityTitleProps> = ({
  image,
  date,
  placeName,
  weatherDescription,
  temp,
}) => {
  return (
    <div
      style={{ backgroundImage: `url('${image})'` }}
      className='w-full flex justify-between items-end py-24 px-24 rounded-primary font-Mulish relative bg-center bg-cover mb-20'>
      <div className='bg-blured-grey backdrop-blur-sm rounded-primary py-8 px-14 font-light text-8xl leading-tight'>
        <div className='mb-4'>{placeName}</div>
        {/* Default is Celsius or Fahrenheit?? */}
        <div className='mb-4'>{temp}°C</div>
        <div className='font-medium text-4.5xl leading-tight'>
          {uppercaseFirstLetter(weatherDescription)}
        </div>
      </div>
      <div className='bg-blured-grey backdrop-blur-sm py-6 px-14 font-light text-5xl rounded-primary ml-10'>
        {getStringDate(date)}
      </div>
      <img
        className='absolute right-8 top-5'
        src={serviceIcons['star-outlined']}
        alt='star'
      />
    </div>
  );
};

export default CityTitle;
