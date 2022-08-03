import { getSearchedCountries } from '../redux/countries';

it('getSearchedCountries should return a promise', () => {
  expect(getSearchedCountries()).toEqual(expect.any(Function));
});
