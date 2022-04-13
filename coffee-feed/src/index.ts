import Card from './components/Card/index';
import './index.styl';

const card = new Card();

/**
 * Стартует приложение после загрузки DOM
 */
function startApp(): void {
  const cardContainer = document.getElementById('container');

  (cardContainer as HTMLDivElement).insertAdjacentHTML('beforeend', card.getComponent('новый компонент'));
}

window.addEventListener('DOMContentLoaded', startApp);