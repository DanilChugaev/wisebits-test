import { CoffeeData } from '../../services/types';
import { INotes } from '../Notes/types';
import Card from './index';
import { ICard } from './types';

const notesInstance: INotes = {
  getComponent(notes: string, className: string): string {
    return `<div class="test ${className}">${notes}</div>`;
  },
};
const coffeeData: CoffeeData = {
  id: 1084,
  uid: '271cfcc2-f358-4f2f-8559-b4015d0a7d68',
  // eslint-disable-next-line
  blend_name: 'Pumpkin-spice Been',
  origin: 'Mbeya Region, Tanzania',
  variety: 'Kent',
  notes: 'delicate, tea-like, rubber, passion fruit, sage',
  intensifier: 'dirty',
};

let card: ICard;

describe('Card', () => {
  beforeEach(() => {
    card = new Card(notesInstance);
  });

  test('should get card component', () => {
    expect(card.getComponent(coffeeData)).toEqual(`
      <div class="card" id="1084" uid="271cfcc2-f358-4f2f-8559-b4015d0a7d68">
        <div class="card__img-container">
          <span class="card__intensifier">dirty</span>

          <img class="card__img" loading="lazy" src="https://loremflickr.com/500/500/coffee%20bean?id=1084" alt="Изображение Pumpkin-spice Been">
        </div>

        <div class="card__content">
          <div class="card__origin" title="Mbeya Region, Tanzania">Mbeya Region, Tanzania</div>
          <div class="card__blend-name" title="Pumpkin-spice Been">Pumpkin-spice Been</div>
          <div class="card__variety" title="Kent">Kent</div>

          <div class="test card__notes">delicate, tea-like, rubber, passion fruit, sage</div>
        </div>
      </div>
    `);
  });
});