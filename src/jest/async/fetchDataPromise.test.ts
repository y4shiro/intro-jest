import { fetchDataPromise, fetchDataPromiseReject } from './fetchDataPromise';

test('the data is peanut butter', () => {
  return expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('promise is rejected', () => {
  return expect(fetchDataPromiseReject()).rejects.toBe('error');
});
