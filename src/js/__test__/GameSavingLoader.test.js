import GameSavingLoader from '../app';

test('works with async/await', async () => {
  expect.assertions(1);
  const saving = await GameSavingLoader.load();
  expect(saving).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
});
