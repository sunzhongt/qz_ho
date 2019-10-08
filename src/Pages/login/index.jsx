import React,{Component} from 'react'; 
import './style.scss'; 
import {Icon} from 'antd'
import {createHashHistory} from "history"
const {Global} = require('../../API/Global')
 
 const windowHieght= window.innerHeight;
 const inputBoxHeight= window.innerHeight/100*40;

class Login extends Component {
    constructor(){
        super();

        this.state={
            data:"login"
        }
    }

    submitUserLogin=()=>{
        createHashHistory().push("/home/index"); 
    }
    render(){
        return (
            <div  className="loginBox">
                {/* <h3 className="login">{this.state.data}</h3>
                <a href="www.baidu.com">百度一下</a> */}
                
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
                                    <Icon type="user" />  <input type="text" placeholder="输入用户名"/>
                                </div>
                                <div  className="inputbor">
                                    <Icon type="key" />  <input type="password" placeholder="输入密码"/>
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

export default Login;