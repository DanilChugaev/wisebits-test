import { ICard } from './types';

/**
 * Класс описывает основной компонент карточки
 */
export default class Card implements ICard {
  /**
   * Возвращает готовый компонент карточки
   *
   * @param title - заголовок карточки
   */
  public getComponent(title: string): string {
    return `<div class="card">${title}</div>`;
  }
}