export interface ICard {
  /**
   * Возвращает готовый компонент карточки
   */
  getComponent(title: string): string;
}