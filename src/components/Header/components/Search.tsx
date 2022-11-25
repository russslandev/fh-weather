import React, { FC, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PlacesAutocomplete, {
  geocodeByPlaceId,
} from 'react-places-autocomplete';
import { serviceIcons } from '../../../assets/Icons';
import BackdropShadow from './BackdropShadow';

const Search: FC = () => {
  const [input, setInput] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const naviate = useNavigate();

  // Need this func?
  // const getLatAndLng = async (
  //   placeId: string,
  // ): Promise<{ lat: number; lon: number }> => {
  //   const res: google.maps.GeocoderResult[] = await geocodeByPlaceId(placeId);
  //   return {
  //     lat: res[0].geometry.location.lat(),
  //     lon: res[0].geometry.location.lng(),
  //   };
  // };

  // const navigateToCityPage = async (placeId: string): Promise<void> => {
  //   setIsHidden(true);
  //   const res: google.maps.GeocoderResult[] = await geocodeByPlaceId(placeId);
  //   naviate(
  //     `/${res[0].geometry.location.lat()}/${res[0].geometry.location.lng()}`,
  //   );
  // };

  return (
    <>
      <PlacesAutocomplete
        value={input}
        onChange={setInput}
        onError={() => console.log('err')}
        debounce={1000}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='relative flex items-center justify-between border-1px border-primary-blue rounded-primary bg-white mx-4 w-1/2 min-w-fit z-20'>
            <input
              {...getInputProps({
                placeholder: 'Название населенного пункта , страны или региона',
                className:
                  'outline-none font-Mulish font-light text-2xl placeholder:text-base placeholder:font-Montserrat mx-7 py-5 w-4/5',
                onBlur: () => setIsHidden(true),
                onFocus: () => setIsHidden(false),
              })}
            />
            <img
              className='cursor-pointer px-5'
              src={serviceIcons['search-outlined']}
              alt=''
            />
            <ul
              className={`${
                suggestions.length || loading ? '' : 'hidden'
              } py-7 absolute w-full border-1px border-primary-blue bg-white rounded-primary top-[110%]`}>
              {suggestions.map(item => (
                <li
                  {...getSuggestionItemProps(item, {
                    className:
                      'font-Mulish font-normal text-2xl py-2.5 px-8 hover:bg-light-blue hover:text-white cursor-pointer z-30',
                  })}
                  key={item.placeId}>
                  <Link
                    onClick={() => setIsHidden(true)}
                    to={`/${item.placeId}`}>
                    <div>
                      <span className='font-bold'>
                        {item.formattedSuggestion.mainText},{' '}
                      </span>
                      {item.formattedSuggestion.secondaryText}
                    </div>
                  </Link>
                </li>
              ))}
              {loading && (
                <li className='font-Mulish font-normal text-2xl py-2.5 px-8 hover:bg-light-blue hover:text-white cursor-pointer z-30'>
                  Loading
                </li>
              )}
            </ul>
          </div>
        )}
      </PlacesAutocomplete>
      <BackdropShadow hidden={isHidden} />
    </>
  );
};

export default Search;
