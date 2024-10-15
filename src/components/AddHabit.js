// src/components/AddHabit.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../redux/habitSlice';

const AddHabit = () => {
  const [habitName, setHabitName] = useState('');
  const dispatch = useDispatch();

  const handleAddHabit = () => {
    if (habitName) {
      dispatch(addHabit({ id: Date.now(), name: habitName }));
      setHabitName('');
    }
  };

  return (
    <div className="add-habit">
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="New Habit"
      />
      <button onClick={handleAddHabit}>Add Habit</button>
    </div>
  );
};

export default AddHabit;
