import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
import { Link, Route, Redirect, h } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, message,Icon, Avatar, Dropdown, Tooltip,Skeleton , Badge, Col, Row, Tabs, Popover, List,Spin  } from 'antd';
import { createHashHistory } from 'history';
import Index from './home_children/index';
import Test from './home_children/test';
import Me from './home_children/me';
import BiJi from './home_children/biji';
import StudentContent from './home_children/studentContent';
import Qs from 'qs';
import Wages from './home_children/wages';
import jumpMyPerformance from './home_children/jumpMyPerformance';

import { connect } from 'react-redux';
import * as action from './store/action';

const { Global } = require('../../API/Global')
const {dataTest } = require('../../API/testData');
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;
let users;
let http="";
let isload=true;

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
            ROM: <Spin size="large" style={{display:"block", margin:"20px auto",}} spinning={isload}/>,
            dataList2: [
                'Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.',
            ],
            userInfo:{
                name:"",
                Avatar:""
            }
        }; 
        http =  this.__proto__.__proto__.$http


       
    }

    user=(obj)=>{
      console.log(obj)
      if(obj.key=="item_2"){
          path: createHashHistory().push('/login')  
      } else if(obj.key=="item_0"){
        path: createHashHistory().push('/home/BiJi')  
      } 
    }
   
    componentWillMount() {
        var {Aname,Bname,Apws,Bpws,userFun}= Global;
        var user=  userFun(Aname,Bname,Apws,Bpws,()=>{
           createHashHistory().push("/Login"); 
       });
       users=user
       this.httpRender()
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
        <div style={{width:"350px" }} className="swsw">
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

    onSelect=(obj)=>{
    //    console.log(obj)
       var key = obj.key;
       if(key=="biji"){
         createHashHistory().push("/home/BiJi"); 
       }
    }
    render() {

        const menu = (
            <Menu  onClick={({ item, key, keyPath, selectedKeys, domEvent })=>this.user({ item, key, keyPath, selectedKeys, domEvent })}>
                <Menu.Item>
                    <a   >
                        <Icon type="user" />个人中心
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a   >
                        <Icon type="setting" /> 个人设置
                     </a>
                </Menu.Item>
                <Menu.Item>
                    <a    >
                        <Icon type="poweroff" />退出登录
                   </a>
                </Menu.Item>
            </Menu>
        );
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
                            {/* <SubMenu
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
                            </SubMenu> */}
                            <Menu.Item key="Wages">
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
                                 selectable={false}
                                theme="light"
                                mode="horizontal"
                                style={{ lineHeight: '24px' }}
                                onClick={({ item, key, keyPath, selectedKeys, domEvent })=>this.onSelect({ item, key, keyPath, selectedKeys, domEvent })}
                            >
 

                                <Menu.Item key="3">
                                    <Popover placement="bottomLeft" title={''}  
                                        trigger="click" 
                                       content={  this.content()   } 
                                        
                                        >
                                        <Badge count={1}>
                                           <a  href="/home/BiJi">  <Icon type="bell" /></a>
                                        </Badge>
                                    </Popover>

                                </Menu.Item>
                                <Menu.Item key="xx">
                                    <Dropdown overlay={menu}  >
                                         <span> <Avatar 
                                                 style={{ marginTop: "-3px", marginRight: 5 }} 
                                                 size={24} src={this.props.userInfo.Avatar} />{this.props.userInfo.name}</span>
                                    </Dropdown>
                                </Menu.Item>



                            </Menu>



                        </Header>
                        <Content style={{ margin: '3px 5px', overflow: "auto", height: Global.pagesHeight, backgroundColor: "#f0f2f5" }}>
                             {this.state.ROM}
                        </Content>

                    </Layout>
                </Layout>
            </div>
        )
    }

   httpRender=()=>{
     
   http.post("/qzadmin/userinfo",
   { name:users.userName }
  ,{ headers: {'Content-Type': 'application/x-www-form-urlencoded'},

     transformRequest:[
         (data)=>{
             var newData=data;
             newData=Qs.stringify({
                name:JSON.stringify(users.userName),  
             })
             return newData
         }
     ]
   }).then((res)=>{
       var data= res.data
      if(data.code=="1"){
           this.setState({
              userInfo:{
                  name:data.data.name,
                  Avatar:data.data.Avatar
              }
           })
             
            this.props.setUserInfoFun(data.data);
            this.setState({
                ROM:<div style={{ padding: 9, minHeight: '100%' }}>
                <Route exact path="/home" render={() => <Redirect to="/home/index" />}></Route>
                <Route path="/home/index" component={Index}></Route>
                <Route path="/home/test" component={Test}></Route>
                <Route path="/home/me" component={Me}></Route>
                <Route path="/home/jumpMyPerformance" component={jumpMyPerformance}></Route>
                <Route path="/home/Wages" component={Wages}></Route>
                <Route path="/home/BiJi" component={BiJi}></Route>
                <Route path="/home/StudentContent" component={StudentContent}></Route>
            </div>,
            
            },()=>{
                isload=false
            })
      }else{
            
          message.error(data.msg);
      }
   }) 
   }

     




}


const stateProps = (state)=>{
    return {
        userInfo:state.home.userInfo
    }
};
const dispatchProps =(dispatch)=>{
    return {
        setUserInfoFun(userInfo){
            dispatch(action.setUserInfo(userInfo)); 
        }
    }
}

export default  connect(stateProps,dispatchProps)(Home)  ;