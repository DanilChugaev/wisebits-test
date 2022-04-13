import Card from './components/Card/index';
import { ICard } from './components/Card/types';
import './index.styl';

const card: ICard = new Card();
let cardContainer: HTMLElement | null;
let addButton: HTMLElement | null;

/**
 * Вставляет новую карточку в контейнер
 */
function insertNewCardIntoContainer(): void {
  (cardContainer as HTMLDivElement).insertAdjacentHTML('beforeend', card.getComponent('новый компонент'));
}

/**
 * Получает новую карточку с сервера и вставляет в контейнер
 */
function getNewCard(): void {
  // тут делать запрос
  insertNewCardIntoContainer();
}

/**
 * Стартует приложение после загрузки DOM
 */
function startApp(): void {
  cardContainer = document.getElementById('container');
  addButton = document.getElementById('button');

  getNewCard();

  (addButton as HTMLButtonElement).addEventListener('click', getNewCard);
}

window.addEventListener('DOMContentLoaded', startApp);