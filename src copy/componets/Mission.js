import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchingMissionspi, joinMission } from '../redux/missions';

function Mission() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) dispatch(fetchingMissionspi());
  }, [dispatch]);
  const joinMissionEvent = (e) => {
    dispatch(joinMission(e.target.id));
  };
  const ma = missions.map((mission) => (
    <tbody key={mission.id} className="t-body">
      <tr>
        <th scope="row" className="description">
          {' '}
          {mission.mission_name}
        </th>
        <td className="description">
          {' '}
          {mission.description}
        </td>
        <td>
          {!mission.join && <button className="btn btn-secondary btn-sm" id="member" type="button"> NOT A MEMBER</button>}
          {mission.join && <button className="btn btn-primary btn-sm" id="member" type="button"> ACTIVE MEMBER</button>}
        </td>
        <td>
          {!mission.join && (
          <button id={mission.id} type="button" className="btn btn-outline-secondary" onClick={joinMissionEvent}>
            JOIN MISSION
          </button>
          )}
          {mission.join && (
          <button id={mission.id} type="button" className="btn btn-outline-danger" onClick={joinMissionEvent}>
            LEAVE MISSION
          </button>
          )}
        </td>
      </tr>
    </tbody>
  ));
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        {ma}
      </table>
    </div>
  );
}

export default Mission;
