import { DATE_OPTIONS } from './formatter';

const generateToken = (days: number, date: Date) => {
  switch (days) {
    case 1:
      return `${date.getHours()}${date.getDate()}${
        date.getMonth() + 1
      }${date.getFullYear()}`;
    case 30:
    case 180:
      return `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}`;
    case 360:
    case 1800:
      return `${date.getMonth() + 1}${date.getFullYear()}`;

    default:
      return `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}`;
  }
};

export const groupData = (days: number, prices: number[][]) => {
  const objPrices: any = {};

  prices.forEach((element) => {
    const date = new Date(element[0]);
    const token = generateToken(days, date);

    if (!objPrices[token]) {
      const obj = {
        date: new Intl.DateTimeFormat('default', DATE_OPTIONS)
          .format(new Date(element[0]))
          .toString(),
        price: element[1],
      };
      objPrices[token] = obj;
    }
  });

  const formatedData: Array<{ date: string; price: number }> = [];

  Object.keys(objPrices).forEach((key) => {
    formatedData.push(objPrices[key]);
  });

  return formatedData;
};
