import React from 'react';
import { useDispatch } from 'react-redux';
import { updateHabitStatus } from '../redux/reducers/habitReducer';

const HabitStatus = ({ habitId, dayIndex, status }) => {
  const dispatch = useDispatch();

  const handleStatusChange = () => {
    const nextStatus = status === 'None' ? 'Done' : status === 'Done' ? 'Not done' : 'None';
    dispatch(updateHabitStatus({ habitId, dayIndex, newStatus: nextStatus }));
  };

  return (
    <button onClick={handleStatusChange}>
      {status}
    </button>
  );
};

export default HabitStatus;
