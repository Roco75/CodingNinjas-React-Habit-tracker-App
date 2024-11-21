// HabitForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../redux/reducers/habitReducer'; // Ensure correct import path

const HabitForm = () => {
  const [habitName, setHabitName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName) {
      dispatch(addHabit(habitName));  // Dispatch action to add habit
      setHabitName('');
    }
  };

  return (
    <div className="habit-form">
      <h2>Add New Habit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="Enter habit name"
        />
        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
};

export default HabitForm;
