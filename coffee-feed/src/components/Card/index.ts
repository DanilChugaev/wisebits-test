import { ICard } from './types';
import { CoffeeData } from '../../services/types';

/**
 * Класс описывает основной компонент карточки
 */
export default class Card implements ICard {
  /**
   * Возвращает готовый компонент карточки
   *
   * @param cardData - сорт кофе
   */
  public getComponent({
    // eslint-disable-next-line
    id, uid, intensifier, origin, blend_name, variety,
  }: CoffeeData): string {
    return `
      <div class="card" id="${id}" uid="${uid}">
        <span class="card__intensifier">${intensifier}</span>

        <img class="card__img" src="https://loremflickr.com/500/500/coffee%20bean" alt="Изображение кофе">
        
        <div class="card__content">
          <div class="card__origin" title="${origin}">${origin}</div>
          <div class="card__blend-name" title="${blend_name}">${blend_name}</div>
          <div class="card__variety" title="${variety}">${variety}</div>

          <div class="card__notes notes">
            <span class="notes__item notes__item--1">crisp</span>
            <span class="notes__item notes__item--2">coating</span>
            <span class="notes__item notes__item--3">black-tea</span>
            <span class="notes__item notes__item--4">peanut</span>
            <span class="notes__item notes__item--5">tobacco</span>
            <span class="notes__item notes__item--6">tobacco</span>
            <span class="notes__item notes__item--7">tobacco</span>
            <span class="notes__item notes__item--8">tobacco</span>
            <span class="notes__item notes__item--9">tobacco</span>
            <span class="notes__item notes__item--10">tobacco</span>
          </div>
        </div>
      </div>
    `;
  }
}