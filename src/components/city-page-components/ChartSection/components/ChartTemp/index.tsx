import React, { FC } from 'react';
import { getDay } from 'helpers';
import { ChartProps } from 'types';
import {
  VictoryChart,
  VictoryArea,
  VictoryAxis,
  VictoryScatter,
  VictoryTooltip,
  VictoryBrushContainer,
  LineSegment,
  Background,
  Line,
} from 'victory';
import Tooltip from 'components/city-page-components/ChartSection/components/Tooltip';
import { weatherIcons } from 'assets/Icons';

const getGridColor = (y: any): string =>
  y.index === 0 || y.index === 6 ? 'transparent' : '#ECECEC';

const ChartTemp: FC<ChartProps> = ({ dailyForecast }) => {
  const data = dailyForecast
    .map(day => {
      return {
        x: day.dt,
        y: day.temp.max,
      };
    })
    .slice(0, 7);

  return (
    <>
      <svg style={{ position: 'absolute', top: -500000, left: -500000 }}>
        <defs>
          <linearGradient
            id='stroke-gradient'
            x1='528'
            y1='68.5'
            x2='528.25'
            y2='337.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1D6294' />
            <stop offset='0.28125' stopColor='#3F7898' stopOpacity='0.81875' />
            <stop offset='0.480219' stopColor='#299ADA' stopOpacity='0.8' />
            <stop offset='0.856562' stopColor='#8AD0DF' />
            <stop offset='0.873958' stopColor='#B0E5F0' />
          </linearGradient>
          <linearGradient
            id='blue-gradient'
            x1='528'
            y1='0'
            x2='528'
            y2='470'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#216596' />
            <stop
              offset='0.262637'
              stopColor='#4482B0'
              stopOpacity='0.734375'
            />
            <stop offset='0.6' stopColor='#A3D3F6' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>

      <VictoryChart
        // backgroundComponent={
        //   <foreignObject>
        //     <div className='bg-black'></div>
        //   </foreignObject>
        // }
        backgroundComponent={
          <rect
            vectorEffect='non-scaling-stroke'
            role='presentation'
            shapeRendering='auto'
            x='50'
            y='50'
            width='350'
            height='200'
            stroke='#ECECEC'
            rx={15}
            fill='transparent'></rect>
        }
        style={{
          background: {},
        }}
        domainPadding={{ y: 25 }}>
        <VictoryAxis
          dependentAxis
          tickFormat={tick => `${tick} °`}
          style={{
            grid: { stroke: '#ECECEC', strokeWidth: 0.5 },
            axis: { stroke: 'transparent', strokeWidth: 0.5 },
            tickLabels: {
              fill: '#fff',
              fontSize: 8,
              fontFamily: '"Mulish", sans-serif',
            },
          }}
        />

        <VictoryAxis
          tickFormat={tick => getDay(tick).toUpperCase()}
          tickValues={data.map(day => day.x)}
          style={{
            grid: {
              stroke: (y: any) => getGridColor(y),
              strokeWidth: 0.5,
            },
            axis: { stroke: 'transparent', strokeWidth: 0.5 },
            tickLabels: {
              fill: '#fff',
              fontSize: 8,
              fontFamily: '"Mulish", sans-serif',
            },
          }}
        />

        <VictoryArea
          interpolation='catmullRom'
          style={{
            data: {
              fill: 'url(#blue-gradient)',
              stroke: 'url(#stroke-gradient)',
              strokeWidth: '2px',
            },
          }}
          data={data}
        />
        <VictoryScatter
          containerComponent={
            <rect
              vectorEffect='non-scaling-stroke'
              role='presentation'
              shapeRendering='auto'
              x='50'
              y='50'
              width='350'
              height='200'
              stroke='#ECECEC'
              rx={15}
              fill='transparent'></rect>
          }
          labels={() => ''}
          labelComponent={
            <VictoryTooltip
              flyoutComponent={<Tooltip dailyForecast={dailyForecast} />}
              pointerOrientation='bottom'
            />
          }
          // dataComponent={}
          style={{
            data: { fill: '#fff' },
          }}
          size={3}
          data={data}
        />
      </VictoryChart>
    </>
  );
};

export default ChartTemp;
