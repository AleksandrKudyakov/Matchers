import sortArr from '../index';

const arr = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const arrNew = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test(('Sorting by health toEqual'), () => {
  expect(sortArr(arr)).toEqual(arrNew);
});

test(('Sorting by health toBe'), () => {
  expect(sortArr(arr)).not.toBe(arrNew);
});