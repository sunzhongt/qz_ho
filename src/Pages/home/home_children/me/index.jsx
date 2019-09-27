import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
 import {Table,Tag,Divider,Button,Icon,Row,Col,Card} from 'antd';
 
 import ReactEcharts from 'echarts-for-react';
import Echarts from 'echarts';
const { Global } = require('../../../../API/Global');
const { shine } = require('../../../../API/shine'); 
const { walden } = require('../../../../API/walden');
const columns = [
    // {

    //     title: '序号',
    //     align:'center',
    //     width:70, 
    //     key: 'num',
    //     render:(text,record,index)=>`${index+1}`
        
    //     },
    {
      title: '学生姓名',
      dataIndex: 'name',
      key: 'name',
      width:90, 
      align:'center',
      render: text =>  text ,
    },
     
    {
      title: '学生情况',
      width:90, 
      dataIndex: 'address',
      key: 'address',
      align:'center',
    },
    {
        title: '作业完成情况',
        dataIndex: 'action',
        width:110,
        align:'center',
        key: 'action',
        render: (text, record) => {
          var color,con ;
          if(text==0){
            color="orange";
            con="不理想"
          }else if(text==1){
              color="green";
              con="良好"
          }else {
              color="red";
              con="优秀"
          }
          return (
              <span style={{color}}>{con}</span>
          )
        },
      },
    {
      title: '特点',
      key: 'tags',
      width:100, 
      align:'center',
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
      title: '操作',
      width:190, 
      dataIndex: 'caozuo',
      align:'center',
      key: 'caozuo', 
      render: (text, record) => {
        var bom ;
        
        if(text){
            return (
              <span>
                    <Button.Group>
                        <Button size="small" type="primary" ghost>
                        <Icon type="rollback" />
                             撤销
                        </Button>
                        <Button size="small" type="primary" >
                             
                             <Icon type="edit" />修改
                        </Button>
                    </Button.Group>
              </span>  
            );
        }else {
          return (
                <Button.Group>
                        <Button size="small" type="primary" ghost>
                           <Icon type="upload" />
                              提交
                        </Button>
                        <Button size="small" type="primary"  ghost>
                              
                              <Icon type="edit" /> 修改
                        </Button>
                        <Button size="small" type="danger" ghost>
                              
                              <Icon type="delete" />删除 
                        </Button>
               </Button.Group>
          )  
        }

        
      }
    }
  ];
  
  const data = [
    {
      key: '1',
      name: '高浏罗',
      teacher: "申院长",
      action:"1",
      address: '英文不好',
      tags: [ '不好好学'],
      isClick:1,
      caozuo:1,
    },
    {
      key: '2',
      name: '金?熙',
      teacher: '申雪莲',
      action:"1",
      address: '数学不好',
      tags: ['逃避'],
      isClick:1,
      caozuo:1,
    },
    {
      key: '3',
      name: '爱谁谁 记不得',
      teacher: '蒋程程',
      action:"0",
      address: '语文不好',
      tags: ['识字困难'],
      isClick:0,
      caozuo:1,
    },
    {
      key: '4',
      name: '爱谁谁 记不得',
      teacher: '钱盼盼',
      action:"2",
      address: '背书不好',
      tags: ['学习努力'],
      isClick:0,
      caozuo:0,
    },
    {
      key: '5',
      name: '爱谁谁 记不得',
      teacher: '郑阳',
      action:"2",
      address: '听写',
      tags: ['不听话'],
      isClick:1,
      caozuo:1,
    },
  ];  
class Me extends Component {
    constructor() {
        super();

        this.state = {
          
        }
    }
    getOption = () => {
        return  {
            title : {
                text: '学生课时占比', 
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : ({c}小时) ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['马瑜典','马瑜阳','葛国令','李灵慧','蔡知恩']
            },
            series : [
                {
                    name: '学生课时占比',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '55%'],
                    data:[
                        {value:12, name:'马瑜典'},
                        {value:15, name:'马瑜阳'},
                        {value:20, name:'葛国令'},
                        {value:20, name:'李灵慧'},
                        {value:40, name:'蔡知恩'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    };
 
    render() {
        console.log(typeof(walden));
        var themeString =JSON.stringify(walden)
        Echarts.registerTheme('walden', walden);
        return (
            <div className="me">
               <div  style={{ width: '100%', height:( Global.pagesHeight / 2)-30  + 'px' }}>
                  <Row>
                        <Col span={12}>
                            <div className="jihua keshi">
                            <Row>
                                <Col span={12} className="over">
                                    <h4><Icon type="crown" />120h</h4>
                                </Col>
                                <Col span={12}>

                                  <h5>
                                   本月计划课时 
                                 </h5>
                                 <div className="yiwanc">
                                    已完成课时：108h 
                                 </div>
                                 <div className="weiwanc">
                                    未完成课时：12h 
                                 </div>
                                </Col>
                            </Row>
                                 
                                  
                                 
                            </div>
                        </Col>
                        <Col span={12}>
                           <div className=" keshi"  style={{paddingLeft:"30px",paddingTop:20,border:"1px #ccc solid"}}>
                           <ReactEcharts
                            option={this.getOption()}
                            notMerge={true}
                            lazyUpdate={true}
                            // onEvents={onEvents}
                            theme={'walden'}
                            style={{ width: '100%', height: Global.pagesHeight / 2 -80+ 'px' }}
                        />
                           </div>
                        </Col>
                    </Row>
               </div>
               <div  style={{ width: '100%', height:( Global.pagesHeight / 2)  + 'px' }}>
                  <Row>
                        <Col span={16}>
                          <Table columns={columns} scroll={{x: true, y: ( Global.pagesHeight / 2-50) } } size="small"  bordered dataSource={data} />
                        </Col>
                       
                        <Col span={8} style={{paddingLeft:"20px",paddingRight:10}}>
                            <div  >
                            <Card title="操作" extra={<a href="#">用户</a>} style={{ width: 300 }}>
                                <p> 
                                    <Button style={{marginBottom:"10px"}} block>创建任务完成单</Button>
                                  
                                    <Button style={{marginBottom:"10px"}} type="dashed" block>
                                      创建请假单
                                    </Button>  
                                    <Button style={{marginBottom:"10px"}} type="danger" block>
                                       我的学生
                                    </Button>  
                                    <Button style={{marginBottom:"10px"}} type="link" block>
                                      刷新
                                    </Button>
                                  </p>
                               
                            </Card>
                            </div>
                        </Col>
                       
                    </Row>
               </div>
               
            </div>
        )
    }
}

export default Me;