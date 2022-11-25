import React from 'react';
import AddNewCard from 'components/weather-page-components/AddNewCard';
import WeatherCard from 'components/weather-page-components/WeatherCard';

export const createPagesWithCards = (): JSX.Element[] => {
  const someCards: number[] = [0, 1, 2, 3, 4, 5]; // Will recieve data in props
  const pages: JSX.Element[] = [];

  let onePage: JSX.Element[] = [];

  someCards.forEach((item, i) => {
    onePage.push(<WeatherCard key={i} />);
    if (((i + 1) % 4 === 0 && i !== 0) || i === someCards.length - 1) {
      pages.push(
        <div className='grid grid-cols-4 w-screen px-20 gap-x-6 mb-20' key={i}>
          {onePage.map((item, i) => (
            <WeatherCard key={i} />
          ))}
          {onePage.length !== 4 ? <AddNewCard /> : null}
        </div>,
      );

      if (onePage.length === 4 && i === someCards.length - 1) {
        pages.push(
          <div
            className='grid grid-cols-4 w-screen px-20 gap-x-6 mb-20'
            key={'addNewCard'}>
            <AddNewCard />
          </div>,
        );
      }
      onePage = [];
    }
  });

  return pages;
};
