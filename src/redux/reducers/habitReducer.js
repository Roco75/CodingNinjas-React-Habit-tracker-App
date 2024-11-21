import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // Initialize with an empty array for habits

const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.push({
        id: Date.now(),
        name: action.payload,
        status: ['None', 'None', 'None', 'None', 'None', 'None', 'None'], // Default 7-day status
      });
    },
    updateHabitStatus: (state, action) => {
      const { habitId, dayIndex, newStatus } = action.payload;
      const habit = state.find((habit) => habit.id === habitId);
      if (habit) {
        habit.status[dayIndex] = newStatus;
      }
    },
  },
});

export const { addHabit, updateHabitStatus } = habitSlice.actions;
export default habitSlice.reducer;
