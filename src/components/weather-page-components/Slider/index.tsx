import React, { useState, useEffect, FC } from 'react';
import { SliderProps } from 'types';
import Pagination from 'components/weather-page-components/Pagination';

const Slider: FC<SliderProps> = ({ pages }) => {
  const [translate, setTranslate] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const width = window.screen.width;
  useEffect(() => {
    setTranslate(width * selectedSlide);
  }, [selectedSlide]);
  const setSelectedPage = (page: number): void => {
    if (page > pages.length - 1) {
      setSelectedSlide(0);
      return;
    }
    if (page < 0) {
      setSelectedSlide(pages.length - 1);
      return;
    }
    setSelectedSlide(page);
  };
  return (
    <>
      <div className='flex items-center select-none'>
        <div className='overflow-hidden w-screen'>
          <div
            style={{
              transform: `translateX(-${translate}px)`,
              width: `${width * pages.length}px`,
              gridTemplateColumns: `repeat(${pages.length}, minmax(0, 1fr))`,
            }}
            className={`grid transition-transform duration-500`}>
            {pages.map(page => page)}
          </div>
        </div>
      </div>
      <Pagination
        setSelectedPage={setSelectedPage}
        selectedPage={selectedSlide}
        pagesLength={pages.length}
      />
    </>
  );
};

export default Slider;
