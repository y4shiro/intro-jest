import { fetchData } from './fetchData';

test('the data is peanut butter', (done) => {
  const callback = (str: string) => {
    try {
      expect(str).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  };
  fetchData(callback);
});
