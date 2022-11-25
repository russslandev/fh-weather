import React from 'react';
import { weatherIcons } from 'assets/Icons';
import HourCard from 'components/city-page-components/HourlyForecast/components/HourCard';
import { getStringTime } from 'helpers';

export const returnSunriseOrSunset = (
  sunriseOrSunset: number,
  text: string,
): JSX.Element => {
  return (
    <HourCard
      icon={weatherIcons['sunrise']}
      text={text}
      time={getStringTime(sunriseOrSunset)}
    />
  );
};
