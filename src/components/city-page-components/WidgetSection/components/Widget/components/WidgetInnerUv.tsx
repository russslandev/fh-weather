import React, { FC } from 'react';
import { WidgetUvProps } from 'types';

const uvIndexGrade = {
  max: 13,
  high: 10,
  normal: 7,
  low: 5,
  veryLow: 2,
};

const calculateMovePosition = (uvIndex: number): string => {
  if (uvIndex > uvIndexGrade.max) return '100%';
  return `${(uvIndex / uvIndexGrade.max) * 100}%`;
};

const returnTextDescription = (uvIndex: number): string => {
  if (uvIndex <= uvIndexGrade.veryLow) return 'Very low';
  if (uvIndex <= uvIndexGrade.low) return 'Low';
  if (uvIndex <= uvIndexGrade.normal) return 'Normal';
  if (uvIndex <= uvIndexGrade.high) return 'High';
  return 'Very high';
};

const WidgetInnerUv: FC<WidgetUvProps> = ({ uvIndex }) => {
  return (
    <div className='flex flex-col items-center mt-8'>
      <div className='font-light text-4.5xl text-start'>
        {uvIndex} <br />
        {returnTextDescription(uvIndex)}
      </div>
      <div className='mt-10 rounded-primary bg-grade-gradient w-4/5 h-14'>
        <div className='relative h-full mx-5'>
          <div
            style={{ left: calculateMovePosition(uvIndex) }}
            className='absolute translate-y-center translate-x-center top-1/2 h-10 w-10 bg-white bg-opacity-70 rounded-primary ${movePosition}'></div>
        </div>
      </div>
    </div>
  );
};

export default WidgetInnerUv;
