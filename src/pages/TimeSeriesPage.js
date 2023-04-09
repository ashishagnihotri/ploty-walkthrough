import React from 'react';
import { Link } from 'react-router-dom';
import TimeSeriesChart from '../components/TimeSeriesChart';

const TimeSeriesPage = () => (
  <div>
    <h1>Time Series Chart</h1>
    <TimeSeriesChart />
    <Link to="/">Next Chart</Link>
  </div>
);

export default TimeSeriesPage;