import { default as sortParams } from '../js/sort';
import { default as params } from '../js/params';

test('contains fields', () => {
  const myBeverage = {
    name: expect.any(String), 
    health: expect.any(Number),
  };
  for (const values of params) {
    expect(values).toEqual(myBeverage);
  }
});

test('array sorted?', () => {
  expect(sortParams(params)).not.toContainEqual(params);
});