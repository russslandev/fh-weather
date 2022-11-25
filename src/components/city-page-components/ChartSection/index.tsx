import React, { FC, useState } from 'react';
import { serviceIcons } from 'assets/Icons';
import ChartSwitcher from 'components/city-page-components/ChartSection/components/ChartSwitcher';
import ChartTemp from 'components/city-page-components/ChartSection/components/ChartTemp';
import ChartUv from 'components/city-page-components/ChartSection/components/ChartUv';
import ChartPrecipitation from 'components/city-page-components/ChartSection/components/ChartPrecipitation';
import { ChartSectionProps, WeatherResponseDay } from 'types';

const onChartSelect = (
  dailyForecast: WeatherResponseDay[],
  selectedChart: number,
): JSX.Element => {
  const arrOfCharts = [
    <ChartTemp key={0} dailyForecast={dailyForecast} />,
    <ChartPrecipitation key={1} dailyForecast={dailyForecast} />,
    <ChartUv key={2} dailyForecast={dailyForecast} />,
  ];
  return arrOfCharts[selectedChart];
};

const ChartSection: FC<ChartSectionProps> = ({ dailyForecast }) => {
  const [selectedChart, setSelectedChart] = useState(0);
  return (
    <div className='relative mb-20 py-18 px-10 bg-light-blue w-full rounded-primary'>
      <div className='flex justify-center items-center mb-12'>
        <div className='flex items-center whitespace-nowrap text-4xl'>
          <img
            className='mr-2.5'
            src={serviceIcons['calendar-outlined']}
            alt=''
          />
          Прогноз на неделю
        </div>
        <div className='absolute right-12'>
          <ChartSwitcher
            selectedChart={selectedChart}
            setSelectedChart={setSelectedChart}
          />
        </div>
      </div>
      {onChartSelect(dailyForecast, selectedChart)}
    </div>
  );
};

export default ChartSection;
