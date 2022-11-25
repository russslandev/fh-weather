export interface ButtonProps {
  text: string;
  selected?: boolean;
  disabled?: boolean;
}

export interface WidgetSectionProps {
  currentWeather: WeatherResponseCurrent;
}

export interface WidgetProps {
  children: JSX.Element;
  titleImage: any;
  title: string;
}

export interface WidgetStaticProps {
  textMain: string;
  textSecondary: string;
}

export interface WidgetCompassProps {
  rotateAngle: number;
  windSpeed: number;
}

export interface WidgetUvProps {
  uvIndex: number;
}

export interface WidgetSunriseProps {
  sunrise: number;
  sunset: number;
}

export interface WidgetPressureProps {
  pressureData: number;
}

export interface RequireAuthProps {
  children: JSX.Element;
}

export interface SliderProps {
  pages: JSX.Element[];
}

export interface PaginationProps {
  setSelectedPage: (page: number) => void;
  selectedPage: number;
  pagesLength: number;
}

export interface WeatherCardProps {
  cityName: string;
  mainTemp: number;
  descr: string;
  wind: number;
  humidity: number;
  precipitation: number;
  hourTemp: number[];
}

export interface BackdropShadowProps {
  hidden: boolean;
}

export interface CityTitleProps {
  temp: number;
  image: string;
  placeName: string;
  date: number;
  weatherDescription: string;
}

export interface HourForecast {
  dt: number;
  temp: number;
  weather: {
    id: number;
    main: string;
    description: string;
  }[];
}

export interface HourlyForecastProps {
  hourForecast: HourForecast[];
  sunrise: number;
  sunset: number;
}

export interface HourCardProps {
  icon: string;
  text: string;
  time: string;
}

export interface GooglePlaceInfo {
  name: string;
  lat: number;
  lng: number;
  photoUrl: string;
}

export interface WeatherResponseCurrent {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  [propName: string]: any;
}

export interface WeatherResponseHour {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  pop: number;
  [propName: string]: any;
}

export interface WeatherResponseDay {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: number;
  pop: number;
  rain?: number;
  uvi: number;
  [propName: string]: any;
}

export interface WeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherResponseCurrent;
  hourly: WeatherResponseHour[];
  daily: WeatherResponseDay[];
  [propName: string]: any;
}

export interface ChartSwitcherProps {
  selectedChart: number;
  setSelectedChart: React.Dispatch<React.SetStateAction<number>>;
}

export interface ChartSectionProps {
  dailyForecast: WeatherResponseDay[];
}

export interface ChartProps {
  dailyForecast: WeatherResponseDay[];
}

export interface TooltipProps {
  dailyForecast: WeatherResponseDay[];
  datum?: { x?: number; y?: number };
  x?: number;
  y?: number;
  center?: any;
}
