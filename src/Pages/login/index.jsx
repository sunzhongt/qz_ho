import React,{Component} from 'react'; 
import './style.scss';

class Login extends Component {
    constructor(){
        super();

        this.state={
            data:"login"
        }
    }


    render(){
        return (
            <div>
                <h3 className="login">{this.state.data}</h3>
                <a href="www.baidu.com">百度一下</a>
            </div>
        )
    }
 }  

export default Login;