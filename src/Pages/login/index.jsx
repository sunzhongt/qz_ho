import React,{Component} from 'react'; 
import './style.scss'; 
import {Icon,message} from 'antd'
import {createHashHistory} from "history"
const {Global} = require('../../API/Global')
 
 const windowHieght= window.innerHeight;
 const inputBoxHeight= window.innerHeight/100*40;

class Login extends Component {
    constructor(){
        super();

        this.state={
            data:"login",

        }
    }

    submitUserLogin=()=>{
        const error = () => {
            message.error('用户名或密码错误!!!!');
          };
         
     let user=this.refs.user.value;
     let pws=this.refs.pws.value;
         if(user=="什么呢我就不告诉你"&&pws=="这个我真忘了"){
            createHashHistory().push("/home/index"); 
         }else {
            error()      
         }
        
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

export default Login;