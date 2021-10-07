import { fetchDataPromise, fetchDataPromiseReject } from './fetchDataPromise';

test('the data is peanut butter', () => {
  return fetchDataPromise().then((str) => {
    expect(str).toBe('peanut butter');
  });
});

test('promise is rejected', () => {
  expect.assertions(1);
  return fetchDataPromiseReject().catch((str) => {
    expect(str).toBe('error');
  });
});
