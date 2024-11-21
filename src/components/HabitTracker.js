import React from 'react';
import HabitForm from './HabitForm';
import HabitList from './HabitList';

const HabitTracker = () => {
  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm />
      <HabitList />
    </div>
  );
};

export default HabitTracker;
