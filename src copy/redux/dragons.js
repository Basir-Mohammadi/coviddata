import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
export const fetchingDragonsApi = createAsyncThunk(
  'fetching dragon api',
  async () => {
    const fetchedDragons = await axios
      .get('https://api.spacexdata.com/v3/dragons')
      .catch((err) => err);
    const dragonsData = fetchedDragons.data;
    const fetchedEachDragons = dragonsData.map((dragon) => ({
      id: dragon.id,
      dragon_name: dragon.name,
      description: dragon.description,
      flickr_image: dragon.flickr_images[0],
      reserved: false,
    }));
    return fetchedEachDragons;
  },
);
const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    changeDragonReservation: (state, action) => state.map((dragon) => {
      if (dragon.id === action.payload) {
        return { ...dragon, reserved: !dragon.reserved };
      }
      return dragon;
    }),

  },
  extraReducers: {
    [fetchingDragonsApi.fulfilled]: (state, action) => action.payload,
  },
});
export const { changeDragonReservation } = dragonSlice.actions;

export default dragonSlice.reducer;
