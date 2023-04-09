import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LineChartPage from './pages/LineChartPage';
import TimeSeriesPage from './pages/TimeSeriesPage';
import TopographicalPage from './pages/TopographicalPage';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Plotly.js Walkthrough with React</h1>
        <Routes>
          <Route path="/" element={<LineChartPage />} />
          <Route path="/topographical" element={<TopographicalPage />} />
          <Route path="/timeseries" element={<TimeSeriesPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
