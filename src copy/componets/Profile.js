import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const newRockets = reservedRockets.map((reservedRocket) => (
    <tbody key={reservedRocket.id}>
      <tr>
        <td>
          {' '}
          {reservedRocket.rocket_name}
        </td>
      </tr>
    </tbody>

  ));
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);
  const newDragons = reservedDragons.map((reservedDragon) => (
    <tbody key={reservedDragon.id}>
      <tr>
        <td>
          {' '}
          {reservedDragon.dragon_name}
        </td>
      </tr>
    </tbody>
  ));
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.join);
  const newMissions = reservedMissions.map((reservedMission) => (
    <tbody key={reservedMission.id}>
      <tr>
        <td>
          {' '}
          {reservedMission.mission_name}
        </td>
      </tr>
    </tbody>
  ));

  return (
    <div className="profiles">
      <div>
        <h2>MY ROCKETS</h2>
        <table className="table table-bordered">{newRockets}</table>
      </div>
      <div>
        <h2>MY DRAGONS</h2>
        <table className="table table-bordered">{newDragons}</table>
      </div>
      <div>
        <h2>MY MISSIONS</h2>
        <table className="table table-bordered">{newMissions}</table>
      </div>
    </div>
  );
}

export default Profile;
