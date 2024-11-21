import React from 'react';
import { useParams } from 'react-router-dom';
import HabitTracker from '../components/HabitTracker';

const HabitDetails = () => {
  const { habitId } = useParams();
  return <HabitTracker habitId={Number(habitId)} />;
};

export default HabitDetails;
