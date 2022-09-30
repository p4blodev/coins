import { DATE_OPTIONS } from './formatter';

/**
 * Generate a key token.
 *
 * @param days - quantity days.
 * @param date - value at which the token will be obtained
 * @returns a token.
 *
 * @example Getting a token
 *
 * ```ts
 *  const aDays = 30;
 *  const aDate = Sunday, 20 December 2020 at 00:23:16 GMT-3
 *
 *  const token = generateToken(aDays, aDate)
 *
 * console.log(token) -> 2320122020
 * ```
 */
const generateToken = (days: number, date: Date): string => {
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

/**
 * Grouping array data by date.
 *
 * @param days - quantity days.
 * @param prices: number[][] - array data price | date
 * @returns json with data grouped.
 *
 * @example Grouping array data by date
 *
 */
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
