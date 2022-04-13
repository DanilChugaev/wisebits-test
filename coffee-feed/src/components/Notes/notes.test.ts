import Notes from './index';
import { INotes } from '../Notes/types';

const notes = 'север, юг, запад, восток';
const className = 'notes-test';

let notesInstance: INotes;

describe('Notes', () => {
  beforeEach(() => {
    notesInstance = new Notes();
    // @ts-ignore
    notesInstance.getRandomIndex = jest.fn(() => 1);
  });

  test('should get notes component', () => {
    expect(notesInstance.getComponent(notes, className)).toEqual(`
      <div class="notes notes-test">
        <span class="notes__item notes__item--1">север</span><span class="notes__item notes__item--1">юг</span><span class="notes__item notes__item--1">запад</span><span class="notes__item notes__item--1">восток</span>
      </div>
    `);
  });
});