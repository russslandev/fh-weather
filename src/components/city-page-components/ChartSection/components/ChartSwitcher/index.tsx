import React, { useState, FC } from 'react';
import { chartSwitcherIcons } from 'assets/Icons';
import { ChartSwitcherProps } from 'types';

const icons: { dark: string; light: string }[] = [
  {
    dark: chartSwitcherIcons['warm-dark'],
    light: chartSwitcherIcons['warm-light'],
  },
  {
    dark: chartSwitcherIcons['drop-dark'],
    light: chartSwitcherIcons['drop-light'],
  },
  {
    dark: chartSwitcherIcons['sun-dark'],
    light: chartSwitcherIcons['sun-light'],
  },
];

const ChartSwitcher: FC<ChartSwitcherProps> = ({
  selectedChart,
  setSelectedChart,
}) => {
  return (
    <div className='flex justify-around'>
      {icons.map((icon, i) => (
        <img
          onClick={() => setSelectedChart(i)}
          key={i}
          className={`py-2.5 px-6 border-primary-blue first:rounded-l-primary first:border-r-1px last:border-l-1px last:rounded-r-primary transition-colors cursor-pointer ${
            selectedChart === i ? 'bg-primary-blue' : 'bg-white'
          }`}
          src={selectedChart === i ? icon.light : icon.dark}
          alt='img'
        />
      ))}
    </div>
  );
};

export default ChartSwitcher;
