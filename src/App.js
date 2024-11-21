import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HabitTracker from './components/HabitTracker';

function App() {
  return (
    <Router basename="/Coding-Ninjas-Bootcamp-React-Full-Stack-Development-Bootcamp-React-Group-3-Habit-tracker-React">
  <Routes>
    <Route path="/" element={<HabitTracker />} />
  </Routes>
</Router>
  );
}



export default App;
