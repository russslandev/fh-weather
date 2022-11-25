import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cloud from 'components/img/weather-icons/cards/cloud.svg';
import cloudy from 'components/img/weather-icons/cards/cloudy.svg';
import sun from 'components/img/weather-icons/cards/sun.svg';
import rainy from 'components/img/weather-icons/cards/rainy.svg';
import star from 'components/img/service-icons/star-twotone.svg';
import PrimaryButton from 'components/buttons/PrimaryButton';

const someHours: any[] = [cloud, cloudy, sun, rainy];
const someInfo: { text: string; data: string }[] = [
  { text: 'Ветер', data: '20%' },
  { text: 'Влажность', data: '20%' },
  { text: 'Осадки', data: '15%' },
];
// Add props when have some data?
const WeatherCard: FC = () => {
  return (
    <div className="relative font-Mulish text-center text-white w-full bg-[url('/src/components/img/cards/bg1.jpg')] bg-center bg-cover rounded-primary shadow-card-shadow px-6">
      <img src={star} alt='star' className='absolute top-5 right-8' />
      <div className='font-bold text-2xl mt-20'>Нью-Йорк</div>
      <div className='font-medium text-base mt-2'>Вторник, 11:00</div>
      <div className='font-bold text-8xl leading-tight mt-2 relative'>
        29
        <div className='text-6xl font-light absolute -top-3 left-[65%]'>°</div>
      </div>
      <div className='font-medium text-base mt-2.5'>Переменная облачность</div>

      <div className='flex justify-between mt-20'>
        {someHours.map((item, i) => (
          <div key={i} className='w-1/5'>
            <div className='text-sm font-medium'>Сейчас</div>
            <div className='mt-2 w-full py-7 flex flex-col justify-center items-center rounded-2.5xl backdrop-blur-sm bg-blured-grey'>
              <img className='w-9 h-9 mb-6' src={item} alt='sunny' />
              <div>29°C</div>
            </div>
          </div>
        ))}
      </div>

      <div className='py-4 rounded-2.5xl backdrop-blur-sm bg-blured-grey flex justify-around items-center mt-8 mb-6'>
        {someInfo.map((item, i) => (
          <div
            key={i}
            className={`weather-item-info-segment w-2/5 ${
              i === 1 ? 'border-x-1px' : ''
            }`}>
            <div className='font-bold text-base'>{item.data}</div>
            <div className='font-medium text-sm'>{item.text}</div>
          </div>
        ))}
      </div>
      <Link to='/city-page'>
        <div className='translate-y-1/2'>
          <PrimaryButton text='Подробнее' />
        </div>
      </Link>
    </div>
  );
};

export default WeatherCard;
