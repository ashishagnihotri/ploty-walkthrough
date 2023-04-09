import React from 'react';
import { data } from './data.js';
import Plot from 'react-plotly.js';

/* Functional component to 3D modelling of a mountain */
const Topographical3DPlot = () => {
  // Generate headers for x, y, and z axes
  const headers = Array.from({ length: data[0].length }, (_, i) => i);
  const x = headers.slice(1);
  const y = headers;
  const z = data;

  // Create plot data with the generated values
  const plotData = [
    {
      type: 'surface', //plot type
      x,
      y,
      z,
      colorscale: 'Viridis',
    },
  ];

  // Define the layout for the plot
  const layout = {
    title: 'Mountain 3D Modelling',
    width: 800,
    height: 800,
    scene: {
      xaxis: { title: 'X Axis' },
      yaxis: { title: 'Y Axis' },
      zaxis: { title: 'Elevation' },
    },
  };

  // Define the configuration for the plot
  const config = {
    toImageButtonOptions: {
      format: 'svg', //download image format to SVG
      filename: 'chart',
      width: layout.width,
      height: layout.height,
    },
    displayModeBar: true, // display the mode bar with interactive chart options
    displaylogo: false, //hide plotly logo
  };

  // Rendering plot
  return <Plot data={plotData} layout={layout} config={config} />;
};

export default Topographical3DPlot;