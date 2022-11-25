const importAll = (r: __WebpackModuleApi.RequireContext) => {
  const images: {
    [propName: string]: string;
  } = {};
  r.keys().map(item => {
    images[item.replace('./', '').replace('.svg', '')] = r(item);
  });
  return images;
};

export const weatherIcons: {
  [propName: string]: string;
} = importAll(require.context('./weather-icons', false, /\.(png|jpe?g|svg)$/));

export const serviceIcons: {
  [propName: string]: string;
} = importAll(require.context('./service-icons', false, /\.(png|jpe?g|svg)$/));

export const paginationIcons: {
  [propName: string]: string;
} = importAll(
  require.context(
    './service-icons/pagination-icons',
    false,
    /\.(png|jpe?g|svg)$/,
  ),
);

export const widgetCompassIcons: {
  [propName: string]: string;
} = importAll(
  require.context(
    './service-icons/dynamic-widgets-icons/compas-big',
    false,
    /\.(png|jpe?g|svg)$/,
  ),
);

export const widgetPressureIcons: {
  [propName: string]: string;
} = importAll(
  require.context(
    './service-icons/dynamic-widgets-icons/pressure',
    false,
    /\.(png|jpe?g|svg)$/,
  ),
);

export const widgetSunriseIcons: {
  [propName: string]: string;
} = importAll(
  require.context(
    './service-icons/dynamic-widgets-icons/sunrise-time',
    false,
    /\.(png|jpe?g|svg)$/,
  ),
);

export const chartSwitcherIcons: {
  [propName: string]: string;
} = importAll(
  require.context(
    './service-icons/chart-switcher-icons',
    false,
    /\.(png|jpe?g|svg)$/,
  ),
);

export const widgetTitleIcons: {
  [propName: string]: string;
} = importAll(
  require.context(
    './service-icons/widget-title-icons',
    false,
    /\.(png|jpe?g|svg)$/,
  ),
);
