import { CoffeeData, URLS } from './types';

/**
 * Базовый метод запросов
 *
 * @param url - адрес запроса
 */
export function getRequest(url: string): Promise<any> {
  return fetch(url);
}

/**
 * Получение данных карточек
 */
export async function getNewCardsInfo(): Promise<CoffeeData> {
  const response = await getRequest(URLS.CoffeeSorts);

  return response.json();
}