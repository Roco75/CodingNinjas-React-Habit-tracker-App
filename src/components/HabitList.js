import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHabitStatus } from '../redux/reducers/habitReducer';
import './HabitList.css';

const getLast7Days = () => {
  const days = [];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    days.push(dayNames[date.getDay()]);
  }
  return days;
};

const HabitList = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();
  const days = getLast7Days();

  const toggleDone = (habitId, dayIndex, currentStatus) => {
    const newStatus =
      currentStatus === 'Done' ? 'Not done' : currentStatus === 'Not done' ? 'None' : 'Done';
    dispatch(updateHabitStatus({ habitId, dayIndex, newStatus }));
  };

  return (
    <div className="habit-tracker-container">
      <h2>Your Habits</h2>
      <div className="days-header">
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      {habits.map((habit) => (
        <div key={habit.id} className="habit-container">
          <div className="habit-title">{habit.name}</div>
          <div className="habit-status-grid">
            {habit.status.map((status, index) => (
              <button
                key={index}
                className={`habit-status-button ${
                  status === 'Done' ? 'done' : status === 'Not done' ? 'not-done' : 'none'
                }`}
                onClick={() => toggleDone(habit.id, index, status)}
              >
                {status === 'Done' ? '✔️' : status === 'Not done' ? '❌' : 'Mark'}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
