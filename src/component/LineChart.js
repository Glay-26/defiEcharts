// src/components/LineChart.js
import React from 'react';
import ReactECharts from 'echarts-for-react';

const LineChart = () => {
  const options = {
    title: {
      text: '折线图示例'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['销量']
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '销量',
      type: 'line',
      data: [150, 230, 224, 218, 135, 147, 260],
      smooth: true
    }]
  };

  return <ReactECharts option={options} style={{ height: '400px' }} />;
};

export default LineChart;