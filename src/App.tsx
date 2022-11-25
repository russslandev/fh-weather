import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import { WeatherService, weatherExample } from './services/weather.service';
import RequireAuth from 'hoc/RequireAuth';
import CityPage from 'pages/CityPage';
import LoginPage from 'pages/LoginPage';
import WeatherPage from 'pages/WeatherPage';
import { WeatherContext } from './Context';

const App: FC = () => {
  // const { data, isLoading, error } = useQuery('weatherData', () =>
  //   WeatherService.getAllData({ lat: '44.34', lon: '10.99' }),
  // );
  // console.log(data);

  return (
    <WeatherContext.Provider value={[weatherExample]}>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route
          index
          element={
            // Need RequireAuth?
            <RequireAuth>
              <WeatherPage />
            </RequireAuth>
          }
        />
        <Route
          path='/:placeId'
          element={
            <RequireAuth>
              <CityPage />
            </RequireAuth>
          }
        />
      </Routes>
    </WeatherContext.Provider>
  );
};

export default App;
