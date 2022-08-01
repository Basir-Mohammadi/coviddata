import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchingRocketsApi, changeRocketReservation } from '../redux/rocket';

function Rocket() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) dispatch(fetchingRocketsApi());
  }, [dispatch]);
  const handleRocketResevation = (e) => {
    dispatch(changeRocketReservation(Number(e.target.id)));
  };
  const render = rockets.map((rocket) => (
    <div className="each-rocket" key={rocket.id}>
      <img src={rocket.flickr_image} alt="flick" />
      <div className="rocket-details">
        <h3>
          {' '}
          {rocket.rocket_name}
        </h3>

        <p className="description">
          {rocket.reserved && (
          <button type="button" className="btn btn-primary btn-sm">
            Reserved
          </button>
          )}
          {' '}
          {rocket.description}
        </p>
        {!rocket.reserved && (
        <button id={rocket.id} className="btn btn-primary btn-lg" type="button" onClick={handleRocketResevation}>
          RESERVE
        </button>
        )}
        {rocket.reserved && (
        <button id={rocket.id} className="btn btn-outline-secondary" type="button" onClick={handleRocketResevation}>
          CANCEL RESERVATION
        </button>
        )}

      </div>
    </div>
  ));
  return (
    <div>
      {render}
    </div>
  );
}

export default Rocket;
