import React from 'react';
import Plot from 'react-plotly.js';

/* Function to Display simple Line chart with 5 randomly generated data points */
const LineChartPlotly = () => {

  const xData = Array.from({ length: 5 }, (_, i) => i + 1);
  
  const randomYData = (length) => Array.from({ length }, () => Math.floor(Math.random() * 100));

  const data = [
    {
      x: xData,
      y: randomYData(5),
      type: 'scatter', //plot type
      mode: 'lines',
      line: { color: 'SeaGreen', shape: 'linear' },
      name: 'Line 1',
      // fill: 'tozeroy', // Added fill property
    },
    {
      x: xData,
      y: randomYData(5),
      type: 'scatter', //plot type
      mode: 'lines',
      line: { color: 'DeepPink', shape: 'linear' },
      name: 'Line 2',
      // fill: 'tonexty', // Added fill property
    },
    {
      x: xData,
      y: randomYData(5),
      type: 'scatter', //plot type
      mode: 'lines',
      line: { color: 'Firebrick', shape: 'linear' },
      name: 'Line 3',
      // fill: 'tonexty', // Added fill property
    },
  ];

  const layout = {
    title: 'Line Graph',
    autosize: true,
    // width: chartSize.width * 0.8,
    // height: chartSize.height * 0.8,
    margin: { l: 40, r: 20, t: 60, b: 60 },
    dragmode: 'zoom',
    showlegend: true,
  };

  const config = {
    scrollZoom: true,
    editable: true,
    displayModeBar: false,
    responsive: true,
    toImageButtonOptions: {
      format: 'svg',
      filename: 'chart',
      width: layout.width,
      height: layout.height,
    },
  };
  // Rendering chart
  return <Plot data={data} layout={layout} config={config} />;
};

export default LineChartPlotly;