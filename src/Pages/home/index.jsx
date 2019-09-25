import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
import {Link,Route,Redirect,h} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {createHashHistory} from 'history';
import Index from './home_children/index';
import Test from './home_children/test';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Home extends Component {
    constructor() {
        super();

        this.state = {
            data: "home",
            collapsed: false,
            path:''
        }
    }
     componentWillMount(){
         this.setState({
             path:createHashHistory().location.pathname
         })
        //  console.log(createHashHistory().location.pathname)
     }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    handleClick = e => {
        console.log('click ', e.key);
        createHashHistory().push(e.key) 
      };
    render() {
        return (
            <div className="home">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo">
                            <h3 className="logo_text">全知后台系统</h3>
                        </div>
                        <Menu theme="dark" defaultSelectedKeys={[this.state.path]} mode="inline" onClick={(e)=> this.handleClick(e)} >
                            <Menu.Item key="/home/index">
                                <Icon type="pie-chart" />
                                {/* <Link taget="span" to="/home/index" className="menu_link">本月教师计划 </Link>  */}
                                <span>本月教师计划</span>   
                            </Menu.Item>
                            <Menu.Item key="/home/test">
                                <Icon type="desktop" />
                                {/* <Link  to="/home/test" className="menu_link">学生情况</Link> */}
                                <span>学生情况 </span> 
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>教师本月工作详情</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="3">蒋程程</Menu.Item>
                                <Menu.Item key="4">申雪莲</Menu.Item>
                                <Menu.Item key="5">钱盼盼</Menu.Item>
                                <Menu.Item key="6">郑阳</Menu.Item> 
                            </SubMenu>
                            <Menu.Item key="7">
                                <Icon type="history" />
                                <span>本月教师工资公时</span>
                            </Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff'  }}>
                            <Menu
                                theme="light"
                                mode="horizontal" 
                                style={{ lineHeight: '24px' }}
                            >
                                
                                <Menu.Item key="2">
                                   <Icon type="user" />用户：申院长 
                                </Menu.Item>
                                <Menu.Item key="3">
                               <Icon type="logout" />退出 
                                </Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{ margin: '3px 5px' }}>

                            <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
                            <Route exact path="/home" render={()=><Redirect to="/home/index" />}></Route>
                            <Route path="/home/index" component={Index}></Route>
                            <Route path="/home/test" component={Test}></Route> 
                            </div>
                        </Content>

                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Home;