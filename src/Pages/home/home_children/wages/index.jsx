import React, { Component } from 'react';
import './style.scss';


import { createHashHistory } from "history"
import ReactEcharts from 'echarts-for-react';
import { Table, Tag, Rate, Divider, Button, Icon, Progress, Row, Col, Card, Statistic, Descriptions, Badge } from 'antd';
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
                    <Descriptions title="信息">
                        <Descriptions.Item label="姓名">xxxx</Descriptions.Item>
                        <Descriptions.Item label="职位">高级教师</Descriptions.Item>
                        <Descriptions.Item label="地址">北京</Descriptions.Item>
                        <Descriptions.Item label="工作时间">2019/02/17</Descriptions.Item>
                        <Descriptions.Item label="审核人">
                            李xx
                    </Descriptions.Item>
                    </Descriptions>
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
                        <Descriptions.Item label="小学工时">$80.00</Descriptions.Item>
                        <Descriptions.Item label="中学工时">$120.00</Descriptions.Item>
                        <Descriptions.Item label="大学工时">$160.00</Descriptions.Item>
                        <Descriptions.Item label="工时计算" span={3}>
                         
                                小学:  李灵慧   工时：30 ×   $80.00   --- $ 2400  | 高浏罗   工时：30 ×   $80.00   --- $ 2400
                            <hr />
                                中学: 葛国玲   工时：30 ×   $80.00   --- $ 2400
                             <hr  />
                                大学: 蔡知恩   工时：30 ×   $80.00   --- $ 2400
                            
                             
                        </Descriptions.Item>
                        <Descriptions.Item label="结算"> 
                              <span style={{color:"red",fontSize:"20px",fontWeight:"bold",float:"right" }}>$ 7200</span>
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>
        )
    }
}

export default Wages;