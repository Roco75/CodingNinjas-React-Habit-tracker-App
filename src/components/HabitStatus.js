// src/components/HabitStatus.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../redux/habitSlice';

const HabitStatus = ({ habitId, dayIndex, status }) => {
  const dispatch = useDispatch();

  const toggleStatus = () => {
    const newStatus = status === 'None' ? 'Done' : status === 'Done' ? 'Not done' : 'None';
    dispatch(updateStatus({ habitId, dayIndex, newStatus }));
  };

  return (
    <div className={`habit-status ${status}`} onClick={toggleStatus}>
      {status}
    </div>
  );
};

export default HabitStatus;
