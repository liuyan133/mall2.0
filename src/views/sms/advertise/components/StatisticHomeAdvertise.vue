<template>
  <div>
    <div id="myChart" ref="myChart"></div>
    <div id="myLine" ref="myLine"></div>
    <div id="myMap" ref="myMap"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'//引入中国地图

export default {
  name: "StatisticHomeAdvertise",
  mounted() {
    // 调用绘制图表的方法
    this.draw();
  },
  data() {
    return {
      myChart: '',
      myLine: '',
      myMap: ''
    }
  },
  methods: {
    draw() {
      // 实例化echarts对象
      this.myChart = echarts.init(this.$refs.myChart)
      // 绘制条形图
      this.myChart.setOption({
        title:{
          text:'近一周广告点击量'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['电影广告', '手机广告', '汽车广告', '其他广告']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '电影广告',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '手机广告',
            type: 'bar',
            stack: '广告',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '汽车广告',
            type: 'bar',
            stack: '广告',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '其他广告',
            type: 'bar',
            stack: '搜索引擎',
            emphasis: {
              focus: 'series'
            },
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      }),
        this.myLine = echarts.init(this.$refs.myLine)
      // 绘制条形图
      this.myLine.setOption({
        title: {
          text: '折线图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['电影广告', '手机广告', '汽车广告', '其他广告']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '电影广告',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '手机广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '汽车广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '其他广告',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }),
        this.myMap = echarts.init(this.$refs.myMap)
      // 绘制地图
      this.myMap.setOption({
        title: {
          text: '各地区不同广告的点击量',
          x:'center'
        },
        tooltip:{//提示信息
          trigger:'item',
          //地区的点击量和销量
          formatter:'地区：{b}</br> 电影广告：{c}</br> 手机广告：800</br> 汽车广告：800</br> 其他广告：800'
        },
        series: [
          {
            type: 'map',
            map: 'china',
            label: {
              show: true,
              color: 'red'
            },
            data: [
              {name: '北京', value: 20000},
              {name: '甘肃', value: 50000},
              {name: '黑龙江', value: 2000},
              {name: '吉林', value: 8000},
              {name: '辽宁', value: 2000},
              {name: '内蒙古', value: 3000},
              {name: '天津', value: 200},
              {name: '新疆', value: 2000},
              {name: '青海', value: 2000},
              {name: '西藏', value: 1000},
              {name: '云南', value: 3000},
              {name: '广西', value: 5000},
            ],
            zoom:1.2,
            itemStyle:{
              backgroundColor:'blue'
            },
            legend:{},
          }
        ],
        visualMap: {//视觉地图
          type:'piecewise',
          show:true,
          pieces: [
            {gt: 150000},            // (1500, Infinity]
            {gt: 9000, lte: 150000},  // (900, 1500]
            {gt: 3100, lte: 9000},  // (310, 1000]
            {gt: 200, lte: 3100},   // (200, 300]
            {gt: 10, lte: 200},       // (10, 200]
            {value: 123, color: 'grey'},  // [123, 123]
            {lt: 5}                 // (-Infinity, 5)
          ],
          inRange: {
            color: ['#99ff99', '#ffff99', '#33ffcc'],
            symbolSize: [30, 100]
          }
        }
      });
      }
    }
}
</script>

<style scoped>
#myChart {
  width: 100%;
  height: 300px;
  margin: 20px auto;
  border: 1px solid #CCC
}
#myLine {
  width: 100%;
  height: 300px;
  margin: 20px auto;
  border: 1px solid #CCC
}
#myMap {
  width: 100%;
  height: 500px;
  margin: 20px auto;
  border: 1px solid #CCC
}
</style>
