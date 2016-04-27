import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './test.less';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
@cssModules(styles)
export default class ComponentC extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('testEchart'));
    // 绘制图表
    myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
  render() {
    console.log('C renderd');
    return (
      <div id="testEchart" style={{width: '1300px', height: '300px'}} styleName="empty">
        C
      </div>
    );
  }
}
