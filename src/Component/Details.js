import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowLeft, FaMicrophoneAlt } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { getCountriesApi } from '../redux/countries';

function Details() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountriesApi());
  }, [dispatch]);
  const { name } = useParams();
  const index = countries.findIndex((item) => item.name.common === name);

  return (
    <div className="details-container" data-testid="detailsdiv">
      <div className="details-nav nav-bar">
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <p>COUNTRY DATA</p>
        <div className="nav-right">
          <p>
            <FaMicrophoneAlt />
          </p>

          <p>
            <AiFillSetting />

          </p>
        </div>

      </div>
      <div className="imagedetails">
        <img
          className="card-img-top"
          id="coat"
          src={countries[index].coatOfArms.png}
          alt="Card cap"
        />
        <p id="namepop" className="card-text">
          {countries[index].name.common}
          <br />
          {countries[index].population.toLocaleString()}
        </p>
      </div>
      <div className="breakdown">
        <p className="noto">COUNTRY DATA BREAKDOWN</p>
      </div>
      <div className="imagedetails">
        <p className="noto">NAME</p>
        <p className="card-text">
          {countries[index].name.common}
        </p>

      </div>
      <div className="imagedetails breakdown">
        <p className="noto">ALT NAME</p>
        <p className="card-text">
          {countries[index].altSpellings.toLocaleString()}
        </p>

      </div>
      <div className="imagedetails">
        <p className="noto">POPULATION</p>
        <p className="card-text">
          {countries[index].area.toLocaleString()}
        </p>

      </div>
      <div className="imagedetails breakdown">
        <p className="noto">CAPITAL CITY</p>
        <p className="card-text">
          {countries[index].capital}

        </p>

      </div>
      <div className="imagedetails">
        <p className="noto">AREA</p>
        <p className="card-text">
          {countries[index].continents}

        </p>

      </div>
    </div>
  );
}

export default Details;
