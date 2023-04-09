import React from 'react';
import { Link } from 'react-router-dom';
import MyLineChart from '../components/LineChartPlotly';

const LineChartPage = () => (
  <div>
    <h1>Line Chart</h1>
    <MyLineChart />
    <Link to="/topographical">Next Chart</Link>
  </div>
);

export default LineChartPage;