// src/pages/HomePage.js
import React from 'react';
import AddHabit from '../components/AddHabit';
import HabitList from '../components/HabitList';

const HomePage = () => {
  return (
    <div>
      <h2>Track Your Habits</h2>
      <AddHabit />
      <HabitList />
    </div>
  );
};

export default HomePage;
