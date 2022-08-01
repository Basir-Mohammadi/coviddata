import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchingMissionspi = createAsyncThunk('fetching from missions api', async () => {
  const fetchedMissions = await axios.get('https://api.spacexdata.com/v3/missions').catch((err) => err);
  const missionData = fetchedMissions.data;
  const fetchedEachMission = missionData.map((mission) => ({
    id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    join: false,
  }));
  return fetchedEachMission;
});
const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, join: !mission.join };
      }
      return mission;
    }),

  },
  extraReducers: {
    [fetchingMissionspi.fulfilled]: (state, action) => action.payload,

  },
});

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
