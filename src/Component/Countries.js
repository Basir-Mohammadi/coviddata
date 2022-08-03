import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountriesApi, getSearchedCountries } from '../redux/countries';
import Continent from './Continent';

function Countries() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesApi());
  }, [dispatch]);
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getSearchedCountries(search));
  };
  const showAll = (e) => {
    e.preventDefault();
    dispatch(getCountriesApi());
    setSearch('');
  };

  const renderCountry = countries.map((country) => (
    <div key={country.name.common}>
      <Link to={`/details/${country.name.common}`} className="big">

        <img className="flag" src={country.flags.png} alt="flag" />
        <div className="name-population">
          <p className="name-p noto">{country.name.common.toUpperCase()}</p>
          <p className="name-p noto">
            {' '}
            POPULATION:
            {country.population.toLocaleString()}
          </p>
        </div>
      </Link>

    </div>
  ));
  return (
    <div>
      <Continent />
      <div id="search" className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="search country"
          onChange={handleChange}
          value={search}
        />
        <button className="btn btn-light" onClick={handleSearch} type="button">
          Search
        </button>
        <button className="btn btn-light" onClick={showAll} type="button">
          SEE ALL COUNTRIES
        </button>
      </div>
      <div className="all-countries">{renderCountry}</div>
    </div>
  );
}

export default Countries;
