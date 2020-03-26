import React, {Component} from 'react';
import {} from 'echarts'
import {Card, Button} from 'antd'
import ReactEcharts from "echarts-for-react";

/*
折线图路由
 */
class Pie extends Component {

  state = {
    sales: [5, 20, 36, 10, 10, 20],
    stores: [10, 30, 46, 20, 20, 30]
  }

  update = () => {
    this.setState(state => ({
      sales: state.sales.map(sale=> sale + 1),
      stores: state.stores.map(store=>store-1)
    }))
  }

  /*
  返回柱状图的配置对象
   */
  getOption = (sales, stores) => {
    return {
      backgroundColor: '#2c343c',

      title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },

      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 274, name: '联盟广告'},
            {value: 235, name: '视频广告'},
            {value: 400, name: '搜索引擎'}
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    }
  }

  render() {
    const {sales, stores} = this.state
    return (
        <div>
          <Card>
            <Button type='primary' onClick={this.update}>更新</Button>
          </Card>
          <Card title='xxx'>
            <ReactEcharts option={this.getOption(sales, stores)}/>
          </Card>
        </div>
    );
  }
}

export default Pie;