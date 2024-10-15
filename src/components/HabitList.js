// src/components/HabitList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHabit } from '../redux/habitSlice';

const HabitList = () => {
  const habits = useSelector((state) => state.habits.items);
  const dispatch = useDispatch();

  const handleStatusChange = (id, dayIndex, currentStatus) => {
    const nextStatus = currentStatus === 'Done' ? 'Not done' : currentStatus === 'Not done' ? 'None' : 'Done';
    dispatch(updateHabit({ id, dayIndex, status: nextStatus }));
  };

  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <div key={habit.id} className="habit">
          <h3>{habit.name}</h3>
          <div className="habit-status">
            {habit.dailyStatus.map((status, index) => (
              <div
                key={index}
                className={`habit-status ${status}`}
                onClick={() => handleStatusChange(habit.id, index, status)}
              >
                Day {index + 1}: {status}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
