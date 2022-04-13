import { ICard } from './types';
import { CoffeeData } from '../../services/types';
import { INotes } from '../Notes/types';

/**
 * Класс описывает основной компонент карточки
 */
export default class Card implements ICard {
  /**
   * Конструктор класса Card
   *
   * @param notesInstance - компонент для работы с тегами
   */
  constructor(private notesInstance: INotes) {}

  /**
   * Возвращает готовый компонент карточки
   *
   * @param cardData - сорт кофе
   */
  public getComponent({
    // eslint-disable-next-line
    id, uid, intensifier, origin, blend_name, variety, notes,
  }: CoffeeData): string {
    return `
      <div class="card" id="${id}" uid="${uid}">
        <div class="card__img-container">
          <span class="card__intensifier">${intensifier}</span>

          <img class="card__img" loading="lazy" src="https://loremflickr.com/500/500/coffee%20bean?id=${id}" alt="Изображение ${blend_name}">
        </div>

        <div class="card__content">
          <div class="card__origin" title="${origin}">${origin}</div>
          <div class="card__blend-name" title="${blend_name}">${blend_name}</div>
          <div class="card__variety" title="${variety}">${variety}</div>

          ${this.notesInstance.getComponent(notes, 'card__notes')}
        </div>
      </div>
    `;
  }
}