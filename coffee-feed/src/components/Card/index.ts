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
    return `
      <div class="card" id="3417" uid="9c772363-8362-48a2-b871-cdbbea018b86">
        <span class="card__intensifier">${title}</span>

        <img class="card__img" src="https://loremflickr.com/500/500/coffee%20bean" alt="Изображение кофе">
        
        <div class="card__content">
          <div class="card__origin" title="Chiriqui, Panama">Chiriqui, Panama Chiriqui, Panama Chiriqui, Panama Chiriqui, Panama</div>
          <div class="card__blend-name" title="Blue Enlightenment">Blue Enlightenment Blue Enlightenment Blue Enlightenment Blue Enlightenment</div>
          <div class="card__variety" title="Ethiopian Heirloom">Ethiopian Heirloom Ethiopian Heirloom Ethiopian Heirloom</div>

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