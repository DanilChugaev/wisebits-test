import { INotes } from './types';

/**
 * Класс описывает компонент тегов
 */
export default class Notes implements INotes {
  /**
   * Возвращает готовый компонент с тегами
   *
   * @param notes - список тегов в виде строки
   * @param className - дополнительный CSS класс
   */
  public getComponent(notes: string, className: string): string {
    const notesResult = notes
      .split(', ')
      .map(note => `<span class="notes__item notes__item--${this.getRandomIndex()}">${note}</span>`)
      .join('');

    return `
      <div class="notes ${className}">
        ${notesResult}
      </div>
    `;
  }

  /**
   * Возвращает случайный индекс от 0 до 10 (для покраски тегов случайным цветом из списка)
   */
  private getRandomIndex(): number {
    return Math.floor(Math.random() * 10);
  }
}