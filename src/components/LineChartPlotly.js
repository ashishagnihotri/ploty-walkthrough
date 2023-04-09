import React from 'react';
import Plot from 'react-plotly.js';

/* Functional component to Display simple Line chart with 5 randomly generated data points */
const LineChartPlotly = () => {

  /**
   * xData - array of integers with numbers 1 to 5
   * randomYData - array of 5 integers with random numbers
   */
  const xData = Array.from({ length: 5 }, (_, i) => i + 1);
  const randomYData = (length) => Array.from({ length }, () => Math.floor(Math.random() * 100));


  /**
   * x - x axis data
   * y - y axis data
   * type - kind of chart needed - 'scatter' makes line chart
   * mode - whether data points should be connected or not - 'lines' makes them connected
   * fill - tozeroy would fill the area under the line, tonexty - would fill area to next line graph
   */
  const data = [
    {
      x: xData,
      y: randomYData(5),
      type: 'scatter',
      mode: 'lines',
      line: { color: 'SeaGreen'},
      name: 'Line 1',
      fill: 'tozeroy'
    },
    {
      x: xData,
      y: randomYData(5),
      type: 'scatter',
      mode: 'lines',
      line: { color: 'DeepPink'},
      name: 'Line 2',
      fill: 'tonexty'
    },
    {
      x: xData,
      y: randomYData(5),
      type: 'scatter',
      mode: 'lines',
      line: { color: 'Firebrick'},
      name: 'Line 3',
      fill: 'tonexty'
    },
  ];

  const layout = {
    title: 'Line Graph',
    autosize: true,
    margin: { l: 40, r: 20, t: 60, b: 60 },
    dragmode: 'zoom',
    showlegend: true,
  };

/**
 * scrollZoom - enables zoom using mouse scroll
 * editable - edit chart axis, title and legend from browser
 * displayModeBar - hide or show interactive chart bar
 * toImageButtonOptions - change properties of downloaded chart
 */
  const config = {
    scrollZoom: true,
    editable: true,
    displayModeBar: true,
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