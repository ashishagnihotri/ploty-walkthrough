import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

/* Functional component to Display bitcoin price from Coibnase website */
const TimeSeriesChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    /**
     * fetchData - fetches Bitcoin prices
    */
    const fetchData = async () => {
      try {
        // GET request to coinbase for Bitcoin prices, data spaced by 1 hour (3600 seconds)
        const response = await axios.get(
          'https://api.pro.coinbase.com/products/BTC-USD/candles?granularity=3600'
        );

        //API returns array of objects, only need 2 entries
        const formattedData = response.data.map((entry) => ({
          x: new Date(entry[0] * 1000), //timestamp data in milliseconds, multiply by 1000 to convert in seconds
          open: entry[3],
        }));

        setData(formattedData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

    //Mapping data from API to chart
    const plotData = [
      {
        x: data.map((entry) => entry.x), //map timestamps to data array
        y: data.map((entry) => entry.open), // map prices to data array
        type: 'scatter', //plot type
        mode: 'lines', //'lines' - data points connected by lines
        line: { color: 'black' },
      },
    ];

  //Configuring layout of chart
  const layout = {
    title: 'Time Series Chart with Range Sliders for Bitcoin Prices',
    xaxis: {
      type: 'date', 
      rangeslider: { visible: true }, // Add range slider to the x-axis
      rangeselector: {
        buttons: [
          //custom slider buttons
          { count: 1, label: '1h', step: 'hour', stepmode: 'backward' },
          { count: 6, label: '6h', step: 'hour', stepmode: 'backward' },
          { count: 12, label: '12h', step: 'hour', stepmode: 'backward' },
          { count: 24, label: '1d', step: 'hour', stepmode: 'backward' },
          { step: 'all', label: 'All' },
        ],
      },
    },
    yaxis: { autorange: true }, //automatic y axis range adjustment
  };

  // Rendering chart
  return <Plot data={plotData} layout={layout}  />;
};

export default TimeSeriesChart;