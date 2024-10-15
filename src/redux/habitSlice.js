// src/redux/habitSlice.js
import { createSlice } from '@reduxjs/toolkit';

const habitSlice = createSlice({
  name: 'habits',
  initialState: {
    items: [],
  },
  reducers: {
    addHabit: (state, action) => {
      state.items.push({
        ...action.payload,
        dailyStatus: Array(7).fill('None'), // Initialize the last 7 days with 'None'
      });
    },
    updateHabit: (state, action) => {
      const { id, dayIndex, status } = action.payload;
      const habit = state.items.find((item) => item.id === id);
      if (habit) {
        habit.dailyStatus[dayIndex] = status; // Update status for the specific day
      }
    },
    deleteHabit: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        items: state.items.filter((habit) => habit.id !== id),
      };
    },
  },
});

export const { addHabit, updateHabit, deleteHabit } = habitSlice.actions;

export default habitSlice.reducer;
