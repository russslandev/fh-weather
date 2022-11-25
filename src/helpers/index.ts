export const getStringDate = (date: number): string => {
  return `${new Date(date).toLocaleString('en-GB', {
    weekday: 'long',
  })}, ${new Date(date).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
};

export const getStringTime = (time: number): string => {
  return new Date(time).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getDay = (date: number): string =>
  new Date(date).toLocaleDateString('en-GB', {
    weekday: 'short',
  });

export const uppercaseFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const findMaxValue = (arr: number[]): number =>
  arr.reduce((acc, curr) => (acc > curr ? acc : curr));

export const findMinValue = (arr: number[]): number =>
  arr.reduce((acc, curr) => (acc < curr ? acc : curr));
