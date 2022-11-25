import React, { FC } from 'react';
import PrimaryButton from 'components/buttons/PrimaryButton';

const Subscription: FC = () => {
  return (
    <div className='flex flex-col items-center mb-20'>
      <div className='text-primary-blue font-Mulish text-4.5xl leading-tight mb-14'>
        Подписывайтесь на нашу новостную рассылку
      </div>
      <div className='flex justify-between border-1px border-primary-blue rounded-primary'>
        <input
          className='outline-none font-Mulish text-base my-5 mx-9 w-112'
          placeholder='E-mail'
          type='text'
        />
        <PrimaryButton text='Подписаться' />
      </div>
    </div>
  );
};

export default Subscription;
