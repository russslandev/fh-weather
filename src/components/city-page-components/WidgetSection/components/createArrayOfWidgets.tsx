import React from 'react';
import { widgetTitleIcons } from 'assets/Icons';
import { WeatherResponseCurrent } from 'types';
import WidgetInnerStatic from 'components/city-page-components/WidgetSection/components/Widget/components/WidgetInnerStatic';
import WidgetInnerCompass from 'components/city-page-components/WidgetSection/components/Widget/components/WidgetInnerCompass';
import WidgetInnerUv from 'components/city-page-components/WidgetSection/components/Widget/components/WidgetInnerUv';
import WidgetInnerSunrise from 'components/city-page-components/WidgetSection/components/Widget/components/WidgetInnerSunrise';
import WidgetInnerPressure from 'components/city-page-components/WidgetSection/components/Widget/components/WidgetInnerPressure';

const feelsLikeGrade = {
  muchWarmerUpperLimit: -5,
  littleWarmerUpperLimit: -2,
  sameUpperLimit: 2,
  littleColderUpperLimit: 5,
  // Much colder is upper then 5
};

const cloudGrade = {
  clearSkyUpperLimit: 25,
  fewCloudsUpperLimit: 50,
  cloudyUpperLimit: 75,
  mainlyCloudyUpperLimit: 100,
  // Max value in response is 100
};

const visibilityGrade = {
  minVisUpperLimit: 3333,
  averageVisUpperLimit: 6666,
  maxVisUpperLimit: 10000,
  // Max value in response is 10000
};

const getFeelsLikeText = (temp: number, feelsLike: number): string => {
  if (temp - feelsLike < feelsLikeGrade.muchWarmerUpperLimit)
    return 'Feels much warmer';
  if (temp - feelsLike < feelsLikeGrade.littleWarmerUpperLimit)
    return 'Feels a little warmer';
  if (temp - feelsLike < feelsLikeGrade.sameUpperLimit) return 'Feels the same';
  if (temp - feelsLike < feelsLikeGrade.littleColderUpperLimit)
    return 'Feels a little colder';
  return 'Feels much colder';
};

const getCloudText = (cloudPercentage: number): string => {
  if (cloudPercentage < cloudGrade.clearSkyUpperLimit) return 'Clear sky';
  if (cloudPercentage < cloudGrade.fewCloudsUpperLimit) return 'Few clouds';
  if (cloudPercentage < cloudGrade.cloudyUpperLimit) return 'Cloudy';
  return 'Mainly cloudy';
};

const getVisibilityText = (visibility: number): string => {
  if (visibility < visibilityGrade.minVisUpperLimit)
    return 'Minimum visibility';
  if (visibility < visibilityGrade.averageVisUpperLimit)
    return 'Average visibility';
  return 'Maximum visibility';
};

export const createArrayOfWidgets = (
  currentWeather: WeatherResponseCurrent,
): {
  title: string;
  icon: string;
  inner: JSX.Element;
}[] => [
  {
    title: 'Feels like',
    icon: widgetTitleIcons['temp'],
    inner: (
      <WidgetInnerStatic
        textMain={`${currentWeather.temp}°C`}
        textSecondary={getFeelsLikeText(
          currentWeather.temp,
          currentWeather.feels_like,
        )}
      />
    ),
  },
  {
    title: 'Wind',
    icon: widgetTitleIcons['wind'],
    inner: (
      <WidgetInnerCompass
        rotateAngle={currentWeather.wind_deg}
        windSpeed={currentWeather.wind_speed}
      />
    ),
  },
  {
    title: 'UV Index',
    icon: widgetTitleIcons['uv'],
    inner: <WidgetInnerUv uvIndex={currentWeather.uvi} />,
  },
  {
    title: 'Humidity',
    icon: widgetTitleIcons['humidity'],
    inner: (
      <WidgetInnerStatic
        textMain={`${currentWeather.humidity}%`}
        textSecondary={`Dev point now: ${currentWeather.dew_point}°C`}
      />
    ),
  },
  {
    title: 'Sunrise',
    icon: widgetTitleIcons['sunruse'],
    inner: (
      <WidgetInnerSunrise
        sunrise={currentWeather.sunrise}
        sunset={currentWeather.sunset}
      />
    ),
  },
  {
    title: 'Visibility',
    icon: widgetTitleIcons['visibility'],
    inner: (
      <WidgetInnerStatic
        textMain={`${Math.round(currentWeather.visibility / 1000)} km`}
        textSecondary={getVisibilityText(currentWeather.visibility)}
      />
    ),
  },
  {
    title: 'Pressure',
    icon: widgetTitleIcons['pressure'],
    inner: <WidgetInnerPressure pressureData={currentWeather.pressure} />,
  },
  {
    title: 'Cloud percentage',
    icon: widgetTitleIcons['cloud'],
    inner: (
      <WidgetInnerStatic
        textMain={`${currentWeather.clouds}%`}
        textSecondary={getCloudText(currentWeather.clouds)}
      />
    ),
  },
];
