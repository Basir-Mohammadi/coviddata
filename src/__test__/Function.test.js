import { getCountriesApi } from '../redux/countries';

it('getCountriesApi should return a promise', () => {
  expect(getCountriesApi()).toEqual(expect.any(Function));
});
