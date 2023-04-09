import React from 'react';
import { Link } from 'react-router-dom';
import Topographical3DSurfacePlot from '../components/Topographical3DSurfacePlot';

const TopographicalPage = () => (
  <div>
    <h1>Topographical Chart</h1>
    <Topographical3DSurfacePlot />
    <Link to="/timeseries">Next Chart</Link>
  </div>
);

export default TopographicalPage;