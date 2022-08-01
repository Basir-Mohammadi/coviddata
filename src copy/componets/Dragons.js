import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchingDragonsApi, changeDragonReservation } from '../redux/dragons';

function Dragon() {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!dragons.length) dispatch(fetchingDragonsApi());
  }, [dispatch]);
  const changeReservation = (e) => {
    dispatch(changeDragonReservation(e.target.id));
  };
  const render = dragons.map((dragon) => (
    <div className="each-rocket" key={dragon.id}>
      <img src={dragon.flickr_image} alt="flick" />
      <div className="rocket-details">
        <h3>
          {' '}
          {dragon.dragon_name}
        </h3>
        <p className="description">
          {dragon.reserved && (
          <button type="button" className="btn btn-primary btn-sm">
            Reserved
          </button>
          )}
          {' '}
          {dragon.description}
        </p>
        {!dragon.reserved && (
        <button id={dragon.id} type="button" className="btn btn-primary btn-lg" onClick={changeReservation}>
          RESERVE
        </button>
        )}
        {dragon.reserved && (
        <button id={dragon.id} type="button" className="btn btn-outline-secondary" onClick={changeReservation}>
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

export default Dragon;
