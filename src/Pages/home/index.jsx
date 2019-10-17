import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
import { Link, Route, Redirect, h } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Avatar, Dropdown, Tooltip, Badge, Col, Row, Tabs, Popover, List } from 'antd';
import { createHashHistory } from 'history';
import Index from './home_children/index';
import Test from './home_children/test';
import Me from './home_children/me';
import jumpMyPerformance from './home_children/jumpMyPerformance';
const { Global } = require('../../API/Global')
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                <Icon type="user" />个人中心
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                <Icon type="setting" /> 个人设置
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                <Icon type="poweroff" />退出登录
        </a>
        </Menu.Item>
    </Menu>
);

let dataList= [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
let dataList2=[
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
class Home extends Component {
    constructor() {
        super();

        this.state = {
            data: "home",
            collapsed: false,
            path: '/home/index',
            dataList: [
                'Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.',
            ],
            dataList2: [
                'Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.',
            ],
        }
    }
    componentWillMount() {
        this.setState({
            path: createHashHistory().location.pathname
        })
        //  console.log(createHashHistory().location.pathname)
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    handleClick = e => {
        console.log('click ', e.key);
        createHashHistory().push(e.key)
    };

    content = () => (
        <div style={{width:"350px"}} className="swsw">
            <Tabs defaultActiveKey="1"  
            tabBarStyle={
                {
                    marginRight:"20px"
                }
            }
            >
            <TabPane tab={<span>   通知(4) </span>} key="1" >
              
                <List

                    size={"small"} dataSource={this.state.dataList} className="demo-loadmore-list"
                    footer={
                        <div>
                            <div style={{ display: "inline-block", width: "50%", textAlign: 'center', borderRight: "1px #ccc solid", padding: "15px 0px" }}  >清空消息</div>
                            <div style={{ display: "inline-block", textAlign: 'center', width: "50%", padding: "15px 0px" }}   >查看更多</div>
                        </div>
                    }
                    renderItem={item => (
                        <List.Item >
                            <List.Item.Meta
                                avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png" />}
                                title={<a href="https://ant.design" >{item}</a>}
                                description="1年前"
                            />

                        </List.Item>
                    )}
                />
            </TabPane>

            <TabPane tab={<span>  消息(3)  </span>} key="2" >
                
                <List size={"small"} dataSource={dataList2} className="demo-loadmore-list"
                    footer={
                        <div>
                            <div style={{ display: "inline-block", width: "50%", textAlign: 'center', borderRight: "1px #ccc solid", padding: "15px 0px" }}  >清空消息</div>
                            <div style={{ display: "inline-block", textAlign: 'center', width: "50%", padding: "15px 0px" }}   >查看更多</div>
                        </div>
                    }
                    renderItem={item => (
                        <List.Item

                        >
                            <List.Item.Meta
                                avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg" />}
                                title={<a href="https://ant.design">曲丽丽 评论了你</a>}
                                description={<div>{item} <br /> 1年前</div>}
                            />

                        </List.Item>
                    )}
                />
            </TabPane>
            <TabPane tab={<span>  待办(1)  </span>} key="3" >
                
                <List


                    size={"small"} dataSource={ dataList} className="demo-loadmore-list"
                    footer={
                        <div>
                            <div style={{ display: "inline-block", width: "50%", textAlign: 'center', borderRight: "1px #ccc solid", padding: "15px 0px" }}  >清空消息</div>
                            <div style={{ display: "inline-block", textAlign: 'center', width: "50%", padding: "15px 0px" }}   >查看更多</div>
                        </div>
                    }
                    renderItem={item => (
                        <List.Item

                        >
                            <List.Item.Meta
                                avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png" />}
                                title={<a href="https://ant.design">{item}</a>}
                                description="1年前"
                            />

                        </List.Item>
                    )}
                />
            </TabPane>
        </Tabs>
        </div>
        
    );
    render() {
        return (
            <div className="home">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo">
                            <h3 className="logo_text">全知后台系统</h3>
                        </div>
                        <Menu theme="dark" defaultSelectedKeys={[this.state.path]} mode="inline" onClick={(e) => this.handleClick(e)} >
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
                            <Menu.Item key="/home/me">
                                <Icon type="smile" />
                                <span>我的</span>
                            </Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{ float: 'left', marginTop: 5, fontSize: 15 }}
                            />
                            <Menu
                                theme="light"
                                mode="horizontal"
                                style={{ lineHeight: '24px' }}
                            >

                                <Menu.Item key="2">
                                    <Tooltip title="我的笔记">
                                        <Icon type="form" />
                                    </Tooltip>
                                </Menu.Item>

                                <Menu.Item key="3">
                                    <Popover placement="bottomLeft" title={''} 
                                            
                                        trigger="click"
                                        
                                       content={ 
                                         
                                         
                                                           this.content()   } 
                                        
                                        >
                                        <Badge count={1}>
                                            <Icon type="bell" />
                                        </Badge>
                                    </Popover>

                                </Menu.Item>
                                <Menu.Item key="xx">
                                    <Dropdown overlay={menu}  >
                                        <a href="#"><Avatar style={{ marginTop: "-3px", marginRight: 5 }} size={24} src="http://img0.imgtn.bdimg.com/it/u=3172022227,2332429611&fm=26&gp=0.jpg" />申院长 </a>
                                    </Dropdown>
                                </Menu.Item>



                            </Menu>



                        </Header>
                        <Content style={{ margin: '3px 5px', overflow: "auto", height: Global.pagesHeight, backgroundColor: "#f0f2f5" }}>

                            <div style={{ padding: 9, minHeight: '100%' }}>
                                <Route exact path="/home" render={() => <Redirect to="/home/index" />}></Route>
                                <Route path="/home/index" component={Index}></Route>
                                <Route path="/home/test" component={Test}></Route>
                                <Route path="/home/me" component={Me}></Route>
                                <Route path="/home/jumpMyPerformance" component={jumpMyPerformance}></Route>
                            </div>
                        </Content>

                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Home;