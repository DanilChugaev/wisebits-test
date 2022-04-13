export interface INotes {
  /**
   * Возвращает готовый компонент с тегами
   *
   * @param notes - список тегов в виде строки
   * @param className - дополнительный CSS класс
   */
  getComponent(notes: string, className: string): string;
}