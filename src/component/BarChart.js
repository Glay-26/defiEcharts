// src/components/LineChart.js
import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = () => {
  const options = {
    title: {
      text: '7 Days Volume'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['volume']
    },
    xAxis: {
      type: 'category',
      data: [ 'pancakeswap', 'uniswap', 'aerodrome', 'fluid', 'mento', 'curve', 'native', 'blackhole', 'pharaoh_v3', 'dodo']
    },
    yAxis: {
      type: 'value',
      name: '亿美元',
    },
    series: [{
      name: 'volume',
      type: 'bar',
      // 折线过度，不要平滑过渡
      smooth: false,
      data: [488.84,171.99,27.48,20.11,16.43,0.88,0.60,0.48,0.47,0.45],
    }]
  };

  return <ReactECharts option={options} style={{ height: '400px' }} />;
};

export default BarChart;