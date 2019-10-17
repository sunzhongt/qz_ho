import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
 import {Table,Tag,Divider,Button,Icon,Row,Col,Card,Avatar,Statistic} from 'antd';
 import {createHashHistory} from "history"
 import ReactEcharts from 'echarts-for-react';
import Echarts from 'echarts';
const { Global } = require('../../../../API/Global');
const { shine } = require('../../../../API/shine'); 
const { walden } = require('../../../../API/walden');


class Me extends Component {
    constructor() {
        super();

        this.state = {
          
        }
    }
    
 
    jumpMyPerformance=()=>{
      createHashHistory().push("/home/jumpMyPerformance"); 
    } 
    render() {
        
        return (
           <div className="me_main">
               <div className="me_cover">
                  <h1 style={{
                    fontSize:20, 
                    marginBottom:20
                  }}> 工作台
                  
                   <span style={{
                     color:"rgba(0,0,0,.45)",
                     fontSize:"10px",
                     float:"right"
                   }}>2019 / 10 /20</span>
 
                   <Icon    style={{cursor:"pointer" ,marginTop:"2px", fontSize:"14px", float:"right",marginRight:"10px",color:"rgba(0,0,0,.45)"}} type="setting" />
                   <Icon    style={{ cursor:"pointer",marginTop:"2px", fontSize:"14px",float:"right",marginRight:"10px",color:"rgba(0,0,0,.45)"}} type="appstore" />
                  </h1>   

                  <div className="me_info">
                       <div className="av">
                          <Avatar size={70} src="http://img0.imgtn.bdimg.com/it/u=3172022227,2332429611&fm=26&gp=0.jpg" />
                       </div>
                       <div className="me_wh">
                          <div style={{height:"40px",fontSize:17,paddingLeft:10,paddingTop:"7px"}}>早安，<strong>申院长</strong> ，祝你开心每一天！</div>  
                          <div style={{height:"30px",color:"rgba(0,0,0,.45)",fontSize:13,paddingLeft:10,paddingTop:"7px"}}>全知学院 | xx市总院 | xxx区 | ~~~院长~~~~~~</div>  
                       </div>

                       <div className="me_tj">
                         <Statistic 
                           style={ {
                             float:"right",
                             
                           } } 
                           title="学生量" value={10} />  
                               <div className="af"></div> 
                          <Statistic
                           
                           style={ {
                            float:"right",
                            textAlign: "center",
                          
                            
                          } } 
                          title="教师排名" value={1} suffix="/ 24" /> 
                          <div className="af"></div>
                          <Statistic 
                            
                           style={ {
                            float:"right",
                            textAlign: "center",
                           
                          } } 
                          title="本月课时" value={121+"小时"} />
                        
                       </div>
                  </div>
                         
               </div>
           
               <div style={{marginTop:"17px"}}>
                 <Row>
                   <Col span={16} className="lgg">
                       <Card  style={{width:"98%"}} title="我的学生" extra={<a href="#">全部查看</a>}  >
                          <div className="gezi">
                             1
                          </div>
                          <div className="gezi">
                             1
                          </div>
                          <div className="gezi">
                             1
                          </div>
                          <div className="gezi">
                             1
                          </div>
                          <div className="gezi">
                             1
                          </div>
                          <div className="gezi">
                             1
                          </div>
                       </Card>
                   </Col>
                   <Col span={8} >
                      <Card  style={{width:"100%"}} title="我的学生" extra={<a href="#">全部查看</a>} >
                         1
                       </Card>

                   </Col>
                 </Row>
               </div>
           </div> 
        )
    }
}

export default Me;