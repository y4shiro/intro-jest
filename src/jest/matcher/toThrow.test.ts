import {} from './toThrow';

const throwError = () => {
  throw new Error('error!');
};

test('throwError goes as expected', () => {
  expect(() => throwError()).toThrow();
  expect(() => throwError()).toThrow(Error);
  expect(() => throwError()).toThrow('error!');
});
