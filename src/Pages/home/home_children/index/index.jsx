import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
import { Row, Col } from 'antd';
 
import ReactEcharts from 'echarts-for-react';
import Echarts from 'echarts/lib/echarts';
const { Global } = require('../../../../API/Global');
const { shine } = require('../../../../API/shine');
const { walden } = require('../../../../API/walden');
 
class Index extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 274, name: '联盟广告' },
                { value: 235, name: '视频广告' },
                { value: 400, name: '搜索引擎' }
            ],
            
        }
    }

    getOption = () => {
        return  {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data:['课时量','学生成绩趋势']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['20190901','20190902','20190903','20190904','20190905','20190906','20190907','20190908','20190909','20190910',
                           '20190911','20190912','20190913','20190914','20190915','20190916','20190917','20190918','20190919','20190920',
                           '20190921','20190922','20190923','20190924','20190925','20190926','20190927','20190928','20190929','20190930','20190931'
                        ],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '课时量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} 小时'
                    }
                },
                {
                    type: 'value',
                    name: '成绩趋势',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }
            ],
            series: [
                {
                    name:'课时量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4]
                },
                // {
                //     name:'学生量',
                //     type:'bar',
                //     data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5,]
                // },
                {
                    name:'学生成绩趋势',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 0.2, 0.3, 3.4, 3.0, 1.5, 1.0, 0.2,2.7, 3.7, 5.6, 2.2, 4.7, 1.8, 6.0, 2.3,2.0, 2.2, 12.0, 6.2,2.7, 3.7, 5.6, 2.2,2.7, 0.7, 1.6, 1.2]
                }
            ]
        };
    };
    getOption_a = () => {
        return{
          
            legend: {},
            tooltip: {},
            dataset: {
                source: [
                    ['product', '2015', '2016', '2017'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        };
        
    };
    getOption_b=()=>{
        return {
          
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: ({c}小时) ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['申院长','蒋程程','郑阳','申雪莲','钱盼盼']
            },
            series: [
                {
                    name:'教师月课时量',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: '400'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'申院长'},
                        {value:214, name:'蒋程程'},
                        {value:214, name:'郑阳'},
                        {value:214, name:'申雪莲'},
                        {value:214, name:'钱盼盼'}
                    ]
                }
            ]
        }
    }
    getOption_c=()=>{ 
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        }
            
    };
    onChartClick(param, echarts) {
        this.setState({
            data: [
                { value: 335, name: '直接访问' },
                { value: 100, name: '邮件营销' },
                { value: 193, name: '联盟广告' },
                { value: 800, name: '视频广告' },
                { value: 400, name: '搜索引擎' }
            ]
        })
    }
    render() {
        let onEvents = {
            'click': this.onChartClick.bind(this)
        }

        return (
            <div className="index">
                <Row>
                    <Col span={16}>
                        <div className="echarts_a">
                        <ReactEcharts
                            option={this.getOption()}
                            notMerge={true}
                            lazyUpdate={true}
                            onEvents={onEvents}
                            theme={walden}
                            style={{ width: '100%', height: Global.pagesHeight / 2 + 'px' }}
                        />
                        </div>
                       
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={24}>
                                <div className="echarts_min">
                                    <ReactEcharts
                                    option={this.getOption_b()}
                                    notMerge={true}
                                    lazyUpdate={true}
                                    onEvents={onEvents}
                                    theme={shine}
                                    style={{ width: '100%', height:( Global.pagesHeight / 2)  + 'px' }}
                                /> 
                                </div>
                               
                            </Col>
                             
                        </Row>
                    </Col>
                </Row>
                <ReactEcharts
                                    option={this.getOption_c()}
                                    notMerge={true}
                                    lazyUpdate={true}
                                    onEvents={onEvents}
                                    style={{ width: '100%', height:( Global.pagesHeight / 2)-0.5 + 'px' }}
                                />
            </div>
        )
    }
}

export default Index;