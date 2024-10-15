// src/components/Habit.js
import React from 'react';
import HabitStatus from './HabitStatus';

const Habit = ({ habit }) => {
  return (
    <div className="habit">
      <h3>{habit.name}</h3>
      <div className="habit-statuses">
        {habit.status.map((status, index) => (
          <HabitStatus key={index} habitId={habit.id} dayIndex={index} status={status} />
        ))}
      </div>
    </div>
  );
};

export default Habit;
