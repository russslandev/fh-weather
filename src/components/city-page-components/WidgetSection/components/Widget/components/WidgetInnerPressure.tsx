import React, { FC } from 'react';
import pressureEllipse from 'components/img/dynamic-widgets-icons/pressure/Ellipse 7.svg';
import pressureArrow from 'components/img/dynamic-widgets-icons/pressure/Arrow.svg';
import { WidgetPressureProps } from 'types';

const calculateAngle = (amount: number): number => {
  const minPressure = 870;
  const maxPressure = 1085;
  if (amount < minPressure) return -120;
  if (amount > maxPressure) return 120;
  return amount - minPressure - 110;
};

const WidgetInnerPressure: FC<WidgetPressureProps> = ({ pressureData }) => {
  return (
    <div className='mt-10 flex flex-col items-center h-full'>
      <div className='relative w-2/3 h-2/5'>
        <img
          className=' absolute top-1/2 left-1/2 translate-x-center translate-y-center'
          src={pressureEllipse}
          alt=''
        />
        <div
          className={`absolute w-1/3 translate-x-center translate-y-center top-2/3 left-1/2 flex justify-center items-center`}
          style={{
            transform: `translate(-50%, -50%) rotate(${calculateAngle(
              pressureData,
            )}deg)`,
          }}>
          <img
            src={pressureArrow}
            alt=''
            className='-rotate-[40deg] -translate-y-[40%]'
          />
        </div>
      </div>
      <div className='-mt-4 font-light text-2xl text-center font-Open-Sans'>
        {pressureData} <br /> hPa
      </div>
    </div>
  );
};

export default WidgetInnerPressure;
