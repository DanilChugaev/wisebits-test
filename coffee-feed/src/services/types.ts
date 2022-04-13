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
 * Список доступный урлов для запросов данных
 */
export enum URLS {
  CoffeeSorts = 'https://random-data-api.com/api/coffee/random_coffee',
}