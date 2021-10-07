import {} from './numCompair';

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});
