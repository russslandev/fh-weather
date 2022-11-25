import React, { FC } from 'react';
import { serviceIcons } from 'assets/Icons';
import { HourlyForecastProps } from 'types';
import { weatherIcons } from 'assets/Icons';
import { getStringTime } from 'helpers';
import HourCard from 'components/city-page-components/HourlyForecast/components/HourCard';
import { returnSunriseOrSunset } from 'components/city-page-components/HourlyForecast/components/returnSunriseOrSunset';

const HourlyForecast: FC<HourlyForecastProps> = ({
  hourForecast,
  sunrise,
  sunset,
}) => {
  return (
    <div className='w-full rounded-primary bg-gray-blue py-10 px-18 mb-20'>
      <div className='flex justify-center items-center mb-16 text-4xl'>
        <img
          className='mr-2.5'
          src={serviceIcons['calendar-outlined']}
          alt='img'
        />
        <div className='font-Mulish'>Почасовой прогноз</div>
      </div>
      <div className='overflow-x-scroll'>
        <div className='flex'>
          {hourForecast.slice(0, 24).map((item, i) => (
            <React.Fragment key={item.dt}>
              <HourCard
                icon={weatherIcons[item.weather[0].id]}
                text={`${item.temp}°C`}
                time={i === 0 ? 'Now' : getStringTime(item.dt)}
              />
              {sunrise > item.dt && sunrise < hourForecast[i + 1].dt
                ? returnSunriseOrSunset(sunrise, 'Sunrise')
                : null}
              {sunset > item.dt && sunset < hourForecast[i + 1].dt
                ? returnSunriseOrSunset(sunset, 'Sunset')
                : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
