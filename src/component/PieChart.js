// src/components/LineChart.js
import React from 'react';
import ReactECharts from 'echarts-for-react';

const PieChart = () => {
  const options = {
    title: {
      text: 'Tether USD Top 10 Token Holders'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [{
      name: 'Token Holders',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 21.38, name: 'Binance: Hot Wallet 20' },
        { value: 8.75, name: 'Binance: Binance-Peg Tokens' },
        { value: 5.92, name: 'Binance 70 ' },
        { value: 4.61, name: 'USDT0 ' },
        { value: 2.71, name: 'Tether: Treasury ' },
        { value: 1.93, name: 'Binance 14 ' },
        { value: 0.79, name: 'Binance 74 ' },
        { value: 0.62, name: 'Binance 93 ' },
        { value: 0.58, name: 'OKX14 ' },
        { value: 52.71, name: 'Other Accounts ' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
    }]
  };

  return <ReactECharts option={options} style={{ height: '400px' }} />;
};

export default PieChart;