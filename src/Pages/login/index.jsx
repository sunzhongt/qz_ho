import React,{Component} from 'react'; 
import './style.scss'; 
import {Icon,message} from 'antd'
import {createHashHistory} from "history";
import {connect} from 'react-redux';

import Qs from 'qs';
import http from '../../API/http';

const {Global} = require('../../API/Global')
const windowHieght= window.innerHeight;
const inputBoxHeight= window.innerHeight/100*40;
 
class Login extends Component {
    constructor(props){
        super(props); 
        this.state={ }
       
    }

    submitUserLogin=()=>{
        var {Aname,Bname,Apws,Bpws,userFun}= Global;
        const error = () => {
            message.error('用户名或密码错误!!!!');
          };
         
        let userName=this.refs.user.value.trim();
        let passWord=this.refs.pws.value.trim();
        
        if(userName&&passWord){
             
            http.post("/qzadmin/login",
            { userName,passWord }
            ,{ headers: {'Content-Type': 'application/x-www-form-urlencoded'},

               transformRequest:[
                   (data)=>{
                       var newData=data;
                       newData=Qs.stringify({
                        userName:JSON.stringify(userName),
                        passWord:JSON.stringify(passWord),

                       })
                       return newData
                   }
               ]
             }).then((res)=>{
                 var data= res.data
                if(data.code=="1"){
                    message.success(data.msg); 

                    var qzadmin = {
                        userName:Aname+userName+Bname,
                        passWord:Apws+passWord+Apws ,
                        isl:"right",
                        isOkl:"right", 
                    } 
                    localStorage.setItem("qzadmin",JSON.stringify(qzadmin))
                    createHashHistory().push("/home/index");
                }else{
                     
                    
                    message.error(data.msg);
                }
            })
        }else {
            message.error('用户名或密码不能为空!!!!'); 
          
        }
     
        
    
    }


    render(){
        return (
            <div  className="loginBox"> 
                
                <img style={{height:windowHieght }} src={require('../../lib/images/login/background_images.png')} alt=""/>
                <div className="logoText">
                    <div>全知学院后台系统</div> 
                    <div>Backstage management system of omniscient College</div>
                </div>
                <div className="login_Main">
                    <div className="login_content">
                        <div className="inputBox">
                            <h5>用户登录</h5>
                            <div>
                                <div className="inputbor">
                                    <Icon type="user" />  <input type="text" ref="user" placeholder="输入用户名"/>
                                </div>
                                <div  className="inputbor">
                                    <Icon type="key" />  <input type="password" ref="pws" placeholder="输入密码"/>
                                </div>
                                <div className="passwordInfo">
                                    <span>
                                       <input type="checkbox"  /> 记住密码
                                    </span> 
                                    <span>
                                        忘记密码?
                                    </span>
                                </div>
                                <div>
                                    <button onClick={this.submitUserLogin}>登录</button>
                                </div> 
                            </div>
                        </div>
                         
                        <img style={{height:(inputBoxHeight) }} src={require('../../lib/images/login/www.png')} alt=""/>
                    </div>
                    
                </div>
            </div>
        )
    }
 }  

export default   Login  ;