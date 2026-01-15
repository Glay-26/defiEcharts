import * as echarts from 'echarts';
import LineChart from './component/LineChart'
import BarChart from './component/BarChart'
import PieChart from './component/PieChart'



function App() {

  return (
    <div className="App">
      {/* 在项目中引入Echarts，尝试用不同的图表对以下数据进行展示：
      1.DeFi中借贷业务的TVL变化（折线图）
      2.不同DEX的交易量比较（柱状图）
      3.某个ERC20前10持仓地址的份额比较（饼图）
      4.某个代币价格走向（K线图） */}
      <h1>hello world</h1>
      <div className="chartsArea" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {/* 创建4个div，分别用于展示以上4个图表，宽度为页面的50%，高度为页面高度的50% */}
        <div style={{ width: '50%', height: '500px'}}>
          <div className="title" style={{ display: 'flex'}}>
            <h2>DeFi中借贷业务的TVL变化</h2>
            <a href="https://defillama.com/" style={{ marginLeft: '20px', marginTop: '30px'}}> from defillama</a>
          </div>
          <LineChart />
        </div>
        <div style={{ width: '50%', height: '500px'}}>
          <div className="title" style={{ display: 'flex'}}>
            <h2>不同DEX的交易量比较</h2>
            <a href="https://dune.com/hagaetc/dex-metrics" style={{ marginLeft: '20px', marginTop: '30px'}}> from dune</a>
          </div>
          <BarChart />
        </div>
        <div style={{ width: '50%', height: '500px'}}>
          <div className="title" style={{ display: 'flex'}}>
            <h2>某个ERC20前10持仓地址的份额比较</h2>
            <a href="https://etherscan.io/token/tokenholderchart/0xdac17f958d2ee523a2206206994597c13d831ec7" style={{ marginLeft: '20px', marginTop: '30px'}}> from etherscan</a>
          </div>
          <PieChart />
        </div>
        <div style={{ width: '50%', height: '500px'}}>
          <div className="title" style={{ display: 'flex'}}>
            <h2>某个代币价格走向（K线图）</h2>
            <a href="https://pump.fun/coin/EPFiXAmiUVuiViw5hQubXev3DJTWPXLtatphQyjVpump" style={{ marginLeft: '20px', marginTop: '30px'}}> from pump</a>
          </div>
          <div className="kChart" style={{ width: '100%', height: '250px',backgroundColor: 'yellow'}}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
