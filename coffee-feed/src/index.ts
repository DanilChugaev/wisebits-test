import Card from './components/Card/index';
import Notes from './components/Notes/index';
import { ICard } from './components/Card/types';
import { INotes } from './components/Notes/types';
import { getNewCardsInfo } from './services/requests';
import { CoffeeData } from './services/types';

import './index.styl';

const INTERVAL_TIME = 30000;

const notes: INotes = new Notes();
const card: ICard = new Card(notes);

let cardContainer: HTMLElement | null;
let addButton: HTMLElement | null;
let requestInterval: ReturnType<typeof setInterval>;

/**
 * Вставляет новую карточку в контейнер
 *
 * @param cardData - новый сорт кофе
 */
function insertNewCardIntoContainer(cardData: CoffeeData): void {
  (cardContainer as HTMLDivElement).insertAdjacentHTML('beforeend', card.getComponent(cardData));
  window.scrollTo(0, (cardContainer as HTMLDivElement).scrollHeight);
}

/**
 * Вставляет новую карточку в контейнер
 *
 * @param isLoading - состояние загрузки
 */
function setButtonIsLoading(isLoading: boolean): void {
  if (isLoading) {
    (addButton as HTMLButtonElement).classList.add('app__button--is-loading');
  } else {
    (addButton as HTMLButtonElement).classList.remove('app__button--is-loading');
  }

  (addButton as HTMLButtonElement).disabled = isLoading;
}

/**
 * Обновляет интервал дял запроса новых данных
 */
function updateInterval(): void {
  requestInterval = setInterval(getNewCard, INTERVAL_TIME);
}

/**
 * Получает новую карточку с сервера и вставляет в контейнер
 */
async function getNewCard(): Promise<void> {
  clearInterval(requestInterval);
  setButtonIsLoading(true);

  const cardData = await getNewCardsInfo();

  insertNewCardIntoContainer(cardData);

  setButtonIsLoading(false);
  updateInterval();
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