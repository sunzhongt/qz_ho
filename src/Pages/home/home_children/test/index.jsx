import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
import { createHashHistory } from "history"
import ReactEcharts from 'echarts-for-react';
import { Table, Tag, Rate, Divider, Button, Icon, Progress, Row,   Col, Card, Statistic } from 'antd';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,

} from "bizcharts";
const { Text } = Guide;
const columns = [
  {

    title: '序号',
    align: 'center',
    width: 70,
    key: 'num',
    render: (text, record, index) => `${index + 1}`

  }, {
    title: '学生姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render: text => text,
  },
  {
    title: '负责教师',
    dataIndex: 'teacher',
    key: 'teacher',
    align: 'center',
  },
  {
    title: '学生情况',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
  },
  {
    title: '特点',
    key: 'tags',
    align: 'center',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: '作业完成情况',
    dataIndex: 'action',
    align: 'center',
    key: 'action',
    render: (text, record) => {
      var color, con;
      if (text == 0) {
        color = "orange";
        con = "不理想"
      } else if (text == 1) {
        color = "green";
        con = "良好"
      } else {
        color = "red";
        con = "优秀"
      }
      return (
        <span style={{ color }}>{con}</span>
      )
    },
  },
  {
    title: '审阅',
    dataIndex: 'isClick',
    align: 'center',
    key: 'isClick',
    render: (text, record) => {
      var bom;

      if (text) {
        return (
          <span><Icon type="check" style={{ color: 'green' }} /><span style={{ color: 'green' }}>已审阅</span> </span>
        );
      } else {
        return (
          <Button size="small">
            <Icon type="form" /> 审阅
             </Button>
        )
      }


    }
  }
];
const datas = [
  {
    month: "Jan",
    city: "Tokyo",
    temperature: 7
  },
  {
    month: "Jan",
    city: "London",
    temperature: 3.9
  },
  {
    month: "Feb",
    city: "Tokyo",
    temperature: 6.9
  },
  {
    month: "Feb",
    city: "London",
    temperature: 4.2
  },
  {
    month: "Mar",
    city: "Tokyo",
    temperature: 9.5
  },
  {
    month: "Mar",
    city: "London",
    temperature: 5.7
  },
  {
    month: "Apr",
    city: "Tokyo",
    temperature: 14.5
  },
  {
    month: "Apr",
    city: "London",
    temperature: 8.5
  },
  {
    month: "May",
    city: "Tokyo",
    temperature: 18.4
  },
  {
    month: "May",
    city: "London",
    temperature: 11.9
  },
  {
    month: "Jun",
    city: "Tokyo",
    temperature: 21.5
  },
  {
    month: "Jun",
    city: "London",
    temperature: 15.2
  },
  {
    month: "Jul",
    city: "Tokyo",
    temperature: 25.2
  },
  {
    month: "Jul",
    city: "London",
    temperature: 17
  },
  {
    month: "Aug",
    city: "Tokyo",
    temperature: 26.5
  },
  {
    month: "Aug",
    city: "London",
    temperature: 16.6
  },
  {
    month: "Sep",
    city: "Tokyo",
    temperature: 23.3
  },


];
const cols = {
  value: {
    min: 0
  },
  year: {
    range: [0, 1000]
  }
};
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const data = [
  {
    key: '1',
    name: '高浏罗',
    teacher: "申院长",
    action: "1",
    address: '英文不好',
    tags: ['聪明', '不好好学'],
    isClick: 1,
  },
  {
    key: '2',
    name: '金?熙',
    teacher: '申雪莲',
    action: "1",
    address: '数学不好',
    tags: ['看见数学就逃避'],
    isClick: 1,
  },
  {
    key: '3',
    name: '爱谁谁 记不得',
    teacher: '蒋程程',
    action: "0",
    address: '语文不好',
    tags: ['识字困难'],
    isClick: 0,
  },
  {
    key: '4',
    name: '爱谁谁 记不得',
    teacher: '钱盼盼',
    action: "2",
    address: '背书不好',
    tags: ['学习努力', '学习能力欠佳'],
    isClick: 0,
  },
  {
    key: '5',
    name: '爱谁谁 记不得',
    teacher: '郑阳',
    action: "2",
    address: '听写',
    tags: ['不听话'],
    isClick: 1,
  },
  {
    key: '6',
    name: '爱谁谁 记不得',
    teacher: '郑阳',
    action: "2",
    address: '听写',
    tags: ['不听话'],
    isClick: 1,
  },
  {
    key: '7',
    name: '爱谁谁 记不得',
    teacher: '郑阳',
    action: "2",
    address: '听写',
    tags: ['不听话'],
    isClick: 1,
  },
  {
    key: '8',
    name: '爱谁谁 记不得',
    teacher: '郑阳',
    action: "2",
    address: '听写',
    tags: ['不听话'],
    isClick: 1,
  },
  {
    key: '9',
    name: '爱谁谁 记不得',
    teacher: '郑阳',
    action: "2",
    address: '听写',
    tags: ['不听话'],
    isClick: 1,
  },

];

const data4 = [
  {
    year: "2001",
    population: 41.8
  },
  {
    year: "2002",
    population: 38
  },
  {
    year: "2003",
    population: 33.7
  },
  {
    year: "2004",
    population: 30.7
  },
  {
    year: "2005",
    population: 25.8
  },
  {
    year: "2006",
    population: 31.7
  },
  {
    year: "2007",
    population: 33
  },
  {
    year: "2008",
    population: 46
  },
  {
    year: "2009",
    population: 38.3
  },
  {
    year: "2010",
    population: 28
  },
  {
    year: "2011",
    population: 42.5
  },
  {
    year: "2012",
    population: 30.3
  }
];

const cols4 = {
  sales: {
    tickInterval: 20
  }
};
class Test extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    const scalex = {
      city: {
        type: "polar",
        range: [0 + 0.01, 1 + 1 - 0.01]
      },
    }
    const w = window.innerWidth - 200;
    const data3 = [
      {
        x: "马瑜典",
        Fraction: [76, 90]
      },
      {
        x: "李灵慧",
        Fraction: [56, 90]
      },
      {
        x: "葛国玲",
        Fraction: [38, 99]
      },
      {
        x: "知恩",
        Fraction: [58, 95]
      },
      {
        x: "雨涵",
        Fraction: [45, 100]
      },
      {
        x: "高浏罗",
        Fraction: [23, 89]
      },
      {
        x: "李灵慧1",
        Fraction: [56, 90]
      },
      {
        x: "葛国玲1",
        Fraction: [38, 99]
      },
      {
        x: "知恩1",
        Fraction: [58, 95]
      },
      {
        x: "李灵慧2",
        Fraction: [56, 90]
      },
      {
        x: "葛国玲3",
        Fraction: [38, 99]
      },
      {
        x: "知恩4",
        Fraction: [58, 95]
      },

    ];
    return (
      <div className="test">
        <div className="test_header_Card">
          <Row>

            <Col span={6} style={{ padding: "0px 10px" }}>
              <Card  >
                <Row>
                  <Col span={15}>
                    <Statistic title="学费上涨" value={"￥ " + 14241.1} />
                  </Col>
                  <Col span={1} offset={8}>
                    <Icon style={{ color: "rgba(0,0,0,.45)" }} type="exclamation-circle" />
                  </Col>
                </Row>
                <h3>学生好评<Icon type="like" style={{ color: "orange" }} />
                  <Progress percent={90} status="active" />

                </h3>
                <h3>家长好评<Icon type="like" style={{ color: "orange" }} />
                  <Progress percent={100} status="active" strokeColor="orange" />


                </h3>
              </Card>


            </Col>
            <Col span={6} style={{ padding: "0px 10px" }}>
              <Card      >
                <Row>
                  <Col span={15}>
                    {/* <span style={{color:"rgba(0,0,0,.45)"}}>
                       平均完成量
                       </span> */}

                    <Statistic
                      title="成绩上浮" value={30}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<Icon type="arrow-up" />}
                      suffix="%"
                    />



                  </Col>
                  <Col span={1} offset={8}>
                    <Icon style={{ color: "rgba(0,0,0,.45)" }} type="exclamation-circle" />
                  </Col>
                </Row>
                <Chart height={110} padding={20} data={data3} scale={scalex} forceFit >

                  <Tooltip 
                  
                  //inPlot={true} 
                  crosshairs={{
                    //rect: 矩形框,x: 水平辅助线,y: 垂直辅助线,cross: 十字辅助线。
                    type: 'cross',
                    style:{
                     // 图形样式
                     fill:"red", // 填充的颜色
                    //  stroke: {string}, // 边框的颜色
                    //  strokeOpacity: {number}, // 边框颜色的透明度，数值为 0 - 1 范围
                      fillOpacity: 0.1, // 填充的颜色透明度，数值为 0 - 1 范围
                    //  lineWidth: {number}, // 边框的粗细
                    //  lineDash: {number} | {array} // 线的虚线样式
                  }}
                }
                  
                  //position={"bottom"} offset={100}
                  />
                  <Geom
                    style={{
                      fill: 'rgb(149, 95, 226)', // 图表背景色
                      // fillOpacity: number, // 图表背景透明度
                      // stroke: string, // 图表边框颜色
                      // strokeOpacity: number, // 图表边框透明度
                      // opacity: number, // 图表整体透明度
                        lineWidth: 6, // 图表边框粗度
                      // radius: number // 图表圆角大小
                    }}
                    type="interval" position="x*Fraction" />

                </Chart>
              </Card>
            </Col>
            <Col span={6} style={{ padding: "0px 10px" }}>
              <Card   >
                <Row>
                  <Col span={15}>
                    {/* <span style={{color:"rgba(0,0,0,.45)"}}>
                         平均完成量
                       </span> */}
                    <Statistic
                      title="学习能力" value={43.63}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<Icon type="arrow-up" />}
                      suffix="%"
                    />
                  </Col>
                  <Col span={1} offset={8}>
                    <Icon style={{ color: "rgba(0,0,0,.45)" }} type="exclamation-circle" />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <h4 style={{ fontWeight: "1000" }}>自学能力</h4>
                    <div style={{ width: '90%', textAlign: "center" }}>
                      <Progress type="circle" percent={95} width={85} strokeColor="rgb(15, 236, 70)" />
                    </div>
                  </Col>

                  <Col span={12}  >
                    <h4 style={{ fontWeight: "1000" }}>灵活性</h4>
                    <div style={{ width: '90%', textAlign: "center" }}>
                      <Progress type="circle" percent={93} width={85} strokeColor="orange" />
                    </div>

                  </Col>
                </Row>





              </Card>
            </Col>

            <Col span={6} style={{ padding: "0px 10px" }}>
              <Card   >
                <Row>
                  <Col span={15}>
                    <span style={{ color: "rgba(0,0,0,.45)" }}>
                      主抓科目
                     </span>

                  </Col>
                  <Col span={1} offset={8}>
                    <Icon style={{ color: "rgba(0,0,0,.45)" }} type="exclamation-circle" />
                  </Col>
                </Row>

               <div className = "tagBox">
               <h4>学前：
                  <Tag color="red">心理</Tag> 
                  <Tag color="orange">品德</Tag></h4>
            

                <h4>小学：
                  <Tag color="red">英语</Tag> 
                  <Tag color="orange">数学</Tag>
                  <Tag color="gold">语文</Tag></h4>
                <h4>初中： 
                  <Tag color="cyan">物理</Tag>
                  <Tag color="blue">地理</Tag>
                  <Tag color="geekblue">历史</Tag></h4>
                <h4>高中： <Tag color="lime">化学</Tag>  <Tag color="green">微积分</Tag>  <Tag color="purple">政治</Tag></h4>
                <h4>大学：<Tag color="volcano">社会</Tag><Tag color="magenta">考研</Tag></h4>
               </div>
               
            
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ padding: 10, marginTop: "20px" }}>
          <Card title="学生情况"    >
            <Table columns={columns} size="small" key="2" tablerow={data} dataSource={data} />
          </Card>

        </div>

      </div>
    )
  }
}

export default Test;