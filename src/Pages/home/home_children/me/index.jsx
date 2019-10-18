import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
import { Table, Tag, Divider, Button, Icon, Row, Col,List
   ,Checkbox, Card, Avatar, Statistic, Comment } from 'antd';
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
import { createHashHistory } from "history"
import ReactEcharts from 'echarts-for-react';
import Echarts from 'echarts';
const { Global } = require('../../../../API/Global');
const { shine } = require('../../../../API/shine');
const { walden } = require('../../../../API/walden');
const { Text } = Guide;
class Me extends Component {
   constructor() {
      super();

      this.state = {
         data: [{
            gender: 'male',
            path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
            value: 98,
         }],
         stData:[
            {
               id:1,
               text:"预习一年级 英文",
               isOK:1, 
            },
            {
               id:2,
               text:"预习六年级 数学文",
               isOK:1, 
            },
            {
               id:3,
               text:"下午3点 1小时带小课",
               isOK:1, 
            },
            {
               id:4,
               text:"下午5点 2小时带大课",
               isOK:0, 
            },
            {
               id:5,
               text:"提交一天任务总结",
               isOK:0, 
            },
         ],
         option :{
           
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['数学', '英语', '语文']
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    axisTick: {show: true},
                    data: ['高浏罗', '李灵慧', '蔡知恩', '马瑜典', '郭品义']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '数学',
                    type: 'bar',
                    barGap: 0,
                    
                    data: [320, 332, 301, 334, 390]
                },
                {
                    name: '英语',
                    type: 'bar',
                     
                    data: [220, 182, 191, 234, 290]
                },
                {
                    name: '语文',
                    type: 'bar',
                  
                    data: [150, 232, 201, 154, 190]
                },
                
            ]
        }
      }
   }


   jumpMyPerformance = () => {
      createHashHistory().push("/home/jumpMyPerformance");
   }
   render() {
      const scale = {
         value: {
            min: 0,
            max: 100,
         },
      };

      Echarts.registerTheme('walden', walden);
      return (
         <div className="me_main">
            <div className="me_cover">
               <h1 style={{
                  fontSize: 20,
                  marginBottom: 20
               }}> 工作台

                   <span style={{
                     color: "rgba(0,0,0,.45)",
                     fontSize: "10px",
                     float: "right"
                  }}>2019 / 10 /20</span>

                  <Icon style={{ cursor: "pointer", marginTop: "2px", fontSize: "14px", float: "right", marginRight: "10px", color: "rgba(0,0,0,.45)" }} type="setting" />
                  <Icon style={{ cursor: "pointer", marginTop: "2px", fontSize: "14px", float: "right", marginRight: "10px", color: "rgba(0,0,0,.45)" }} type="appstore" />
               </h1>

               <div className="me_info">
                  <div className="av">
                     <Avatar size={70} src="http://img0.imgtn.bdimg.com/it/u=3172022227,2332429611&fm=26&gp=0.jpg" />
                  </div>
                  <div className="me_wh">
                     <div style={{ height: "40px", fontSize: 17, paddingLeft: 10, paddingTop: "7px" }}>早安，<strong>申院长</strong> ，祝你开心每一天！</div>
                     <div style={{ height: "30px", color: "rgba(0,0,0,.45)", fontSize: 13, paddingLeft: 10, paddingTop: "7px" }}>全知学院 | xx市总院 | xxx区 | ~~~院长~~~~~~</div>
                  </div>

                  <div className="me_tj">
                     <Statistic
                        style={{
                           float: "right",

                        }}
                        title="学生量" value={10} />
                     <div className="af"></div>
                     <Statistic

                        style={{
                           float: "right",
                           textAlign: "center",


                        }}
                        title="教师排名" value={1} suffix="/ 24" />
                     <div className="af"></div>
                     <Statistic

                        style={{
                           float: "right",
                           textAlign: "center",

                        }}
                        title="本月课时" value={121 + "小时"} />

                  </div>
               </div>

            </div>

            <div style={{ marginTop: "17px" }}>
               <Row>
                  <Col span={16} className="lgg">
                     <Card style={{ width: "98%" }} title="我的学生" extra={<a href="#">全部查看</a>}  >
                        <div style={{ overflow: "hidden" }}>
                           <div className="gezi">
                           <Comment  author={<a>高浏罗</a>} 
                                       content={
                                          <div className="pdiv"> 
                                              <strong>二年级 - 女孩 - 文科差 </strong> 

                                              <p style={{fontSize:"9px",color:"#c2c2c2"}}>
                                                该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                          </div> 
                                          } 
                                       avatar={ <Avatar src="http://img5.imgtn.bdimg.com/it/u=2477893629,2496599484&fm=15&gp=0.jpg"  alt="Han Solo" />} />
                                <div className="caozuo">
                                     <div>查看</div>  
                                     <div>编辑</div>  
                                     <div>联系</div>  
                                </div>
                           </div>
                           <div className="gezi">
                           <Comment  author={<a>高浏罗</a>} 
                                       content={
                                          <div className="pdiv"> 
                                              <strong>二年级 - 女孩 - 文科差 </strong> 

                                              <p style={{fontSize:"9px",color:"#c2c2c2"}}>
                                                该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                          </div> 
                                          } 
                                       avatar={ <Avatar src="http://img2.imgtn.bdimg.com/it/u=3998889723,4073319813&fm=26&gp=0.jpg"  alt="Han Solo" />} />
                                       <div className="caozuo">
                                     <div>查看</div>  
                                     <div>编辑</div>  
                                     <div>联系</div>  
                                </div>
                          </div>
                           <div className="gezi">
                           <Comment  author={<a>高浏罗</a>} 
                                       content={
                                          <div className="pdiv"> 
                                              <strong>二年级 - 女孩 - 文科差 </strong> 

                                              <p style={{fontSize:"9px",color:"#c2c2c2"}}>
                                                该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                          </div> 
                                          } 
                                       avatar={ <Avatar src="http://img3.imgtn.bdimg.com/it/u=2475849442,329715809&fm=26&gp=0.jpg"  alt="Han Solo" />} />
                                       <div className="caozuo">
                                     <div>查看</div>  
                                     <div>编辑</div>  
                                     <div>联系</div>  
                                </div>
                          </div>
                           <div className="gezi">
                           <Comment  author={<a>高浏罗</a>} 
                                       content={
                                          <div className="pdiv"> 
                                              <strong>二年级 - 女孩 - 文科差 </strong> 

                                              <p className="infos" style={{fontSize:"9px",color:"#c2c2c2"}}>
                                                该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                          </div> 
                                          } 
                                       avatar={ <Avatar src="http://img4.imgtn.bdimg.com/it/u=1357628744,178375004&fm=26&gp=0.jpg"  alt="Han Solo" />} />
                                       <div className="caozuo">
                                     <div>查看</div>  
                                     <div>编辑</div>  
                                     <div>联系</div>  
                                </div>
                          </div>
                           <div className="gezi">
                           <Comment  author={<a>高浏罗</a>} 
                                       content={
                                          <div className="pdiv"> 
                                              <strong>二年级 - 女孩 - 文科差 </strong> 

                                              <p style={{fontSize:"9px",color:"#c2c2c2"}}>
                                                该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                          </div> 
                                          } 
                                       avatar={ <Avatar src="http://img4.imgtn.bdimg.com/it/u=2482476292,4060215508&fm=26&gp=0.jpg"  alt="Han Solo" />} />
                                       <div className="caozuo">
                                     <div>查看</div>  
                                     <div>编辑</div>  
                                     <div>联系</div>  
                                </div>
                          </div>
                           <div className="gezi">
                           <Comment  author={<a>高浏罗</a>} 
                                       content={
                                          <div className="pdiv"> 
                                              <strong>二年级 - 女孩 - 文科差 </strong> 

                                              <p style={{fontSize:"9px",color:"#c2c2c2"}}>
                                                该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                          </div> 
                                          } 
                                       avatar={ <Avatar src="http://img4.imgtn.bdimg.com/it/u=1050973335,3741690257&fm=26&gp=0.jpg"  alt="Han Solo" />} />
                                       <div className="caozuo">
                                     <div>查看</div>  
                                     <div>编辑</div>  
                                     <div>联系</div>  
                                </div>
                          </div>

                        </div>

                     </Card>
                     <Card style={{ width: "98%",marginTop:"15px" }}  title="学生综合情况"  >
                        <div style={{ overflow: "hidden" }}>
                                   <ReactEcharts
                                        option={this.state.option}
                                        notMerge={true}
                                        lazyUpdate={true} 
                                        theme={'walden'}
                                        style={{ width: '100%', height: (Global.pagesHeight / 2) + 'px' }}
                                    />
                        </div> 
                     </Card>


                  </Col>
                  <Col span={8} >
                     <Card style={{ width: "100%" }} title="日计划" extra={<a href="#">操作</a>} >
                            <List     dataSource={this.state.stData} 
                                   renderItem={(item,i) => (
                                             <List.Item key={i}>
                                                  <div style={{overflow:"hidden",width:"100%"}}>
                                                        {i+1} . <span>{item.text}</span> {item.isOK? <Checkbox defaultChecked={true}  style={{float:"right"}} />:<Checkbox style={{float:"right"}}  defaultChecked={false}   />}   
                                                  </div>
                                             </List.Item>
                                       )}
                                 />
                         
                     </Card>

                     <Card style={{ width: "100%",marginTop:"15px" }} title="我的工作台"  > 
                            <Button style={{marginBottom:"10px"}} icon={"plus"} type="primary" block> 创建今日任务总结 </Button>  
                            <Button style={{marginBottom:"10px"}} icon={"plus"}  type="default" block> 创建明日任务单</Button>   
                            <Button style={{marginBottom:"10px"}} icon={"plus"}  type="danger" block> 创建请假单</Button>  
                            <Button.Group size="small" style={{margin:"0 auto"}}>
                            <Button   icon={"container"}  >我的月计划</Button>
                            <Button type="primary"   icon={"setting"}  >设置</Button>
                            <Button  type="primary"  icon={"to-top"}  >我的提交</Button>
                            </Button.Group>
                              
                     </Card>

                  </Col>
               </Row>
            </div>
         </div>
      )
   }
}

export default Me;