export const ADD_HABIT = 'ADD_HABIT';
export const UPDATE_HABIT_STATUS = 'UPDATE_HABIT_STATUS';

export const addHabit = (habit) => ({
  type: ADD_HABIT,
  payload: habit,
});

export const updateHabitStatus = (habitId, dayIndex, status) => ({
  type: UPDATE_HABIT_STATUS,
  payload: { habitId, dayIndex, status },
});
