/**
 * Формат данных для сортов кофе
 */
export type CoffeeData = {
  // eslint-disable-next-line
  blend_name: string;
  id: number;
  intensifier: string;
  notes: string;
  origin: string;
  uid: string;
  variety: string;
};

/**
 * Урлов для получение нового сорта кофе
 */
export const COFFEE_SORTS_URL = 'https://random-data-api.com/api/coffee/random_coffee';