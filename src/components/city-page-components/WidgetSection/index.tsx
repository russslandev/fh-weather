import React, { FC } from 'react';
import Widget from 'components/city-page-components/WidgetSection/components/Widget';
import { createArrayOfWidgets } from 'components/city-page-components/WidgetSection/components/createArrayOfWidgets';
import { WidgetSectionProps } from 'types';

const WidgetSection: FC<WidgetSectionProps> = ({ currentWeather }) => {
  return (
    <div className='mb-20 w-full grid justify-items-center items-center grid-cols-4 grid-rows-2 gap-4'>
      {createArrayOfWidgets(currentWeather).map(widget => (
        <Widget
          key={widget.title}
          title={widget.title}
          titleImage={widget.icon}>
          {widget.inner}
        </Widget>
      ))}
    </div>
  );
};

export default WidgetSection;
