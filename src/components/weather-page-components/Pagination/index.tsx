import React, { FC } from 'react';
import { PaginationProps } from 'types';
import { paginationIcons } from 'assets/Icons';

const Pagination: FC<PaginationProps> = ({
  setSelectedPage,
  selectedPage,
  pagesLength,
}) => {
  const dots: string[] = new Array(pagesLength).fill('');

  return (
    <div className='flex justify-center mb-20'>
      <img
        onClick={() => setSelectedPage(selectedPage - 1)}
        className='mr-5 cursor-pointer'
        src={paginationIcons['arrow-left']}
        alt=''
      />
      {dots.map((_, i) => (
        <img
          key={i}
          className='mx-1'
          src={
            i === selectedPage
              ? paginationIcons['dot-active']
              : paginationIcons['dot']
          }
          alt=''
        />
      ))}
      <img
        onClick={() => setSelectedPage(selectedPage + 1)}
        className='ml-5 cursor-pointer'
        src={paginationIcons['arrow-right']}
        alt=''
      />
    </div>
  );
};

export default Pagination;
