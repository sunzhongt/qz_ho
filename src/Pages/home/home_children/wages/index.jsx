import React, { Component } from 'react';
import './style.scss';


import { createHashHistory } from "history"
import ReactEcharts from 'echarts-for-react';
import { Table, Tag, Rate, Divider, Button, Icon, Progress, Row, Col, Card, Statistic, Descriptions, Badge ,Steps } from 'antd';
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
const windowHieght = window.innerHeight;
const inputBoxHeight = window.innerHeight / 100 * 40;
const { Step } = Steps;
class Wages extends Component {
    constructor() {
        super();

        this.state = {
            data: "Wages"
        }
    }

    submitUserLogin = () => {
        createHashHistory().push("/home/index");
    }
    render() {
        return (
            <div className="Wages">
                <Card >
                    <Descriptions title="单号：234231029431">
                        <Descriptions.Item label="创建人">申院长</Descriptions.Item> 
                        <Descriptions.Item label="职位">高级教师</Descriptions.Item>
                        <Descriptions.Item label="地址">北京</Descriptions.Item>
                        <Descriptions.Item label="工作时间">2019/02/17</Descriptions.Item>
                        <Descriptions.Item label="审核人">
                            李xx
                        </Descriptions.Item>
                        <Descriptions.Item label="状态">
                             <Badge status="processing" text="审核中" />
                        </Descriptions.Item>
                        
                    </Descriptions>
                </Card>
                <Card  title="审核流程" style={{ marginTop: "13px" }}>

                <Steps current={2}    >
                    <Step title="创建工资单"  subTitle={
                        <div style={{padding:0,margin:0}}>
                              <Icon type="user"/> 申院长 
                        </div>
                    } description="date:2019-02-17" />
                    <Step title="部门初审" subTitle={
                        <div style={{padding:0,margin:0}}>
                           <Icon type="user"/> 王xx
                        </div>
                    } description={ "date:2019-02-17" } />
                    <Step title="财务部终审"     subTitle={
                        <div style={{padding:0,margin:0}}>
                           <Icon type="user"/> 李xx
                        </div>
                    }      description={<a>催一下</a> }  />
                    <Step     title="审核成功"   />
                </Steps>
                </Card>
                


                <Card style={{ marginTop: "13px" }}>
                    <Descriptions title="月绩效单" bordered>
                        <Descriptions.Item label="教级">大学</Descriptions.Item>
                        <Descriptions.Item label="学生数量">10</Descriptions.Item>
                        <Descriptions.Item label="教育级别">优秀</Descriptions.Item>
                        <Descriptions.Item label="绩效时间">2019-11-1</Descriptions.Item>
                        <Descriptions.Item label="领取时间" span={2}>
                            2019-12-05  
                         </Descriptions.Item>
                        <Descriptions.Item label="请假" span={3}>
                            <Badge status="processing" text="无" />
                        </Descriptions.Item>
                        <Descriptions.Item label="小学工时">￥80.00</Descriptions.Item>
                        <Descriptions.Item label="中学工时">￥120.00</Descriptions.Item>
                        <Descriptions.Item label="大学工时">￥160.00</Descriptions.Item>
                        <Descriptions.Item label="工时计算" span={3}>
                             
                        <Card  style={{ marginTop: "13px" }}>
                           <Row>
                               <Col span={6}>  学生：李灵慧  </Col>
                               <Col span={6}>  学级：小学  </Col>
                               <Col span={6}>  课时：30h </Col>
                               <Col span={6}>
                                  总金额：<span style={{color:"red",fontSize:"20px",fontWeight:"bold" }}>￥2400</span> 
                               </Col>
                           </Row>  
                            
                        </Card>    
                        <Card  style={{ marginTop: "13px" }}>
                            <Row>
                               <Col span={6}>  学生：葛国玲  </Col>
                               <Col span={6}>  学级：中学  </Col>
                               <Col span={6}>  课时：30h </Col>
                               <Col span={6}>
                                  总金额：<span style={{color:"red",fontSize:"20px",fontWeight:"bold" }}>￥3600</span> 
                               </Col>
                             </Row>  
                        </Card>    
                        <Card  style={{ marginTop: "13px" }}>
                            <Row>
                               <Col span={6}>  学生：蔡知恩  </Col>
                               <Col span={6}>  学级：大学  </Col>
                               <Col span={6}>  课时：30h </Col>
                               <Col span={6}>
                                  总金额：<span style={{color:"red",fontSize:"20px",fontWeight:"bold" }}>￥4800</span> 
                               </Col>
                             </Row>  
                        </Card>    
                                
                            
                             
                        </Descriptions.Item>
                        <Descriptions.Item label="结算"> 
                              <span style={{color:"red",fontSize:"20px",fontWeight:"bold",float:"right" }}>￥ 10800</span>
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>
        )
    }
}

export default Wages;