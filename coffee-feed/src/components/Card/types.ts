import { CoffeeData } from '../../services/types';

export interface ICard {
  /**
   * Возвращает готовый компонент карточки
   *
   * @param cardData - сорт кофе
   */
  getComponent(cardData: CoffeeData): string;
}