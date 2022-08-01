import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './planet.png';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo-name">
          <img src={planet} alt="planet" className="logo" />
          <h3>Space Travellers Hub</h3>
        </div>
        <div>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Rockets
          </NavLink>
          <NavLink
            to="/dragons"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Dragons
          </NavLink>
          <NavLink
            to="/missions"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Missions
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Profile
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
