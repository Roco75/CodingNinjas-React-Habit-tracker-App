import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../redux/reducers/habitReducer';

const HabitForm = () => {
  const [habitName, setHabitName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      dispatch(addHabit(habitName)); // Dispatch the addHabit action
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter a habit"
        required
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
