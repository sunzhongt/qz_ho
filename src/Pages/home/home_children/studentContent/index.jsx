import React, { Component } from 'react';
 
import './style.scss';
import { connect } from 'react-redux';
import * as action from './store/action';
import {  Row, Col ,Card ,Avatar,Divider,Statistic ,Spin,Descriptions,Icon} from 'antd';
 
import http from '../../../../API/http';

import { createHashHistory } from "history";
import { Global } from '../../../../API/Global';
 
 

 
 



class StudentContent extends Component {
    constructor(props){
        super(props); 
        this.state={
            data:"login",
            
            load:true
        }
        
    }
   
    componentWillMount(){ 
    //     http.get("/qzadmin/mestudent?id="+this.props.userInfo.id,  
    //     { headers: {'Content-Type': 'application/x-www-form-urlencoded'},
   
    //     }).then((res)=>{
             
    //        this.props.setStudent(res.data.data)
    //        this.props.getItemStudentContent(res.data.data[0].id);
            
          
    //    }) 

        this.props.setStudent(this.props.userInfo.id)
    }

    render(){
        let {studentContent} = this.props;
        return (
            <div>
                 <Row>
                     <Col span={6}>
                        <Card>
                            {
                              
                                this.props.studentList.map((item,index)=>{
                                   return (
                                     <div className="studentList" key={index} onClick={()=>this.props.getItemStudentContent(item.id)}>
                                         <Row>
                                            <Col span={5}> <Avatar  size={40} src={item.avatar}/></Col>
                                            <Col span={17}>
                                            <Row>
                                                <Col span={24}> <h2 style={{fontSize:"15px",fontWeight:"bold",margin:0,padding:0}}>{item.name}</h2></Col>
                                                <Col span={24}> 
                                                  <span style={{color:"#c2c2c2"}}>{item.class}-{item.gender.data[0]?"男孩":"女孩"}</span>
                                                 </Col>
                                              </Row>
                                             
                                             <Divider/>
                                            </Col> 
                                          </Row>
                                       
                                        
                                          
                                     </div>
                                   )
                                }) 
                            }
                            
                        </Card>
                     </Col>
                     <Col span={16} style={{paddingLeft:"15px"}}>
                        <Card>
                         
                            
                               
                             <div>
               <div style={{textAlign:"center"}}>
                   <Avatar  size={150} src={studentContent.avatar }/>
               </div>
               <Descriptions title={studentContent.name}>
                   <Descriptions.Item label="年级">{studentContent.class}</Descriptions.Item>
                   <Descriptions.Item label="性别">{studentContent.gender?(studentContent.gender.data[0]||""?"男孩":"女孩"):""}</Descriptions.Item>
                   <Descriptions.Item label="入院时间">{Global.timeFormatter(studentContent.startDate||"2019-10-07T02:57:24.000Z")}</Descriptions.Item>
                   <Descriptions.Item label="联系">{studentContent.phone}</Descriptions.Item>
                   <Descriptions.Item label="Address">
                   No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                   </Descriptions.Item>
               </Descriptions>
             </div>
                             
                             
                        </Card>
                     </Col>
                     <Col span={2} style={{paddingLeft:"15px"}}> 
                         <Card>
                            <Row style={{textAlign:'center'}} className="iconRow">
                                <Col span={24}>
                                    <Icon type="edit" />
                                </Col>
                                <Col span={24}>
                                    <Icon type="delete" />
                                </Col>
                                <Col span={24}>
                                    <Icon type="plus-circle" />
                                </Col>
                                
                            </Row>
                         </Card>
                                               
                       </Col>
                 </Row>
            </div>
        )
    }

}

const stateProps = (state)=>{
    return {
        userInfo:state.home.userInfo,
        studentList:state.student.studentList,
        studentContent:state.student.studentContent,
    
    }
 };
 const dispatchProps =(dispatch, ownProps)=>{
    return {
        setStudent:(id)=>{
            dispatch(action.setStudent(id))
        },
        getItemStudentContent :(id)=>{
            dispatch(action.getItemStudentContent(id))
        }
    }
 }
 export default  connect(stateProps,dispatchProps)(StudentContent)   ; 
