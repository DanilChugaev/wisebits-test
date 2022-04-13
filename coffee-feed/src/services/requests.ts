import { CoffeeData, COFFEE_SORTS_URL } from './types';

/**
 * Базовый метод запросов
 *
 * @param url - адрес запроса
 */
export function getRequest(url: string): Promise<Response> {
  return fetch(url);
}

/**
 * Получение данных карточек
 */
export async function getNewCardsInfo(): Promise<CoffeeData> {
  const response = await getRequest(COFFEE_SORTS_URL);

  return response.json();
}