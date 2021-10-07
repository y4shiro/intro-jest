import { fetchDataPromise, fetchDataPromiseReject } from './fetchDataPromise';

test('the data is peanut butter', async () => {
  await expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('promise is rejected', async () => {
  await expect(fetchDataPromiseReject()).rejects.toMatch('error');
});
