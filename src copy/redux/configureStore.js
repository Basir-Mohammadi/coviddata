import { configureStore } from '@reduxjs/toolkit';
import misssionsReducer from './missions';
import rocketReducer from './rocket';
import dragonReducer from './dragons';

const store = configureStore({
  reducer: {
    missions: misssionsReducer,
    rockets: rocketReducer,
    dragons: dragonReducer,
  },
});
export default store;
