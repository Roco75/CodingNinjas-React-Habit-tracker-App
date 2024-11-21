// App.js
import React, { useState } from 'react';
import HabitForm from './components/HabitForm'; // Ensure correct import path
import HabitList from './components/HabitList'; // Ensure correct import path

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New Habit'}
      </button>

      {showForm && <HabitForm />}  {/* Conditionally render the HabitForm */}

      <HabitList />
    </div>
  );
}

export default App;
