import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
export const fetchingRocketsApi = createAsyncThunk(
  'fetching rocket api',
  async () => {
    const fetchedRockets = await axios
      .get('https://api.spacexdata.com/v3/rockets')
      .catch((err) => err);
    const rocketsData = fetchedRockets.data;
    const fetchedEachRocket = rocketsData.map((rocket) => ({
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_image: rocket.flickr_images[0],
      reserved: false,
    }));
    return fetchedEachRocket;
  },
);
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    changeRocketReservation: (state, action) => state.map((rocket) => {
      if (rocket.id === action.payload) {
        return { ...rocket, reserved: !rocket.reserved };
      }
      return rocket;
    }),

  },
  extraReducers: {
    [fetchingRocketsApi.fulfilled]: (state, action) => action.payload,
  },
});
export const { changeRocketReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
