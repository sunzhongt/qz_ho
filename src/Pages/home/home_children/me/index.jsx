import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
import {
   Table, Tag, Divider, Button, Icon, Row, Col, List
   , Checkbox, Card, Avatar, Statistic, Comment, Modal, Form,Radio,Input,DatePicker,Select,Cascader
} from 'antd';
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
import { createHashHistory } from "history";
import moment from 'moment';
import ReactEcharts from 'echarts-for-react';
import Echarts from 'echarts';
const { Global } = require('../../../../API/Global');
const { shine } = require('../../../../API/shine');
const { walden } = require('../../../../API/walden');
const { Text } = Guide;
const FormItem = Form.Item;
const { MonthPicker, RangePicker } = DatePicker;
const { Option } = Select;
 
function hasErrors(fieldsError) {
   // getFieldsError
   // console.log(fieldsError)
   return Object.keys(fieldsError).some(field => fieldsError[field]);
 };

 
 function  deepClone(data) {
   const type = judgeType(data);
   let obj;
   if (type === 'array') {
     obj = [];
   } else if (type === 'object') {
     obj = {};
   } else {
 // 不再具有下一层次
     return data;
   }
   if (type === 'array') {
     // eslint-disable-next-line
     for (let i = 0, len = data.length; i < len; i++) {
       obj.push( deepClone(data[i]));
     }
   } else if (type === 'object') {
     // 对原型上的方法也拷贝了....
     // eslint-disable-next-line
     for (const key in data) {
       obj[key] =  deepClone(data[key]);
     }
   }
   return obj;
 }


function  judgeType(obj) {
// tostring会返回对应不同的标签的构造函数
   const toString = Object.prototype.toString;
   const map = {
     '[object Boolean]': 'boolean',
     '[object Number]': 'number',
     '[object String]': 'string',
     '[object Function]': 'function',
     '[object Array]': 'array',
     '[object Date]': 'date',
     '[object RegExp]': 'regExp',
     '[object Undefined]': 'undefined',
     '[object Null]': 'null',
     '[object Object]': 'object',
   };
   if (obj instanceof Element) {
     return 'element';
   }
   return map[toString.call(obj)];
 }

class Me extends Component {
 
   constructor(props) {
       
      super(props);
       var form = props.form;
      this.state = { 
         data: [{
            gender: 'male',
            path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
            value: 98,
         }],
         stData: [
            {
               id: 1,
               text: "预习一年级 英文",
               isOK: 1,
            },
            {
               id: 2,
               text: "预习六年级 数学文",
               isOK: 1,
            },
            {
               id: 3,
               text: "下午3点 1小时带小课",
               isOK: 1,
            },
            {
               id: 4,
               text: "下午5点 2小时带大课",
               isOK: 0,
            },
            {
               id: 5,
               text: "提交一天任务总结",
               isOK: 0,
            },
         ],
         option: {

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
                  mark: { show: true },
                  dataView: { show: true, readOnly: false },
                  magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                  restore: { show: true },
                  saveAsImage: { show: true }
               }
            },
            calculable: true,
            xAxis: [
               {
                  type: 'category',
                  axisTick: { show: true },
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
         },
         visible: false,
         loading: false,
         formLayout: 'horizontal',
         date:"",
         isShowQingJia:false,

         propsRenWu:deepClone(form),
         propsQingJia:deepClone(form)
      }
      
     
   }
  
  
   showModal = (e) => {
   
      this.setState({
         visible: true,
      },()=>{
         this.state.propsRenWu.validateFields((err, values) => {
            if (!err) {
            //   console.log('Received values of form: ', values);
            }
          });
          

         //  this.setState({
         //     date:"2017-09-12"
         //  })
           
       
      });
   };
   // handleOk = () => {
   //    this.setState({ loading: true });
   //    setTimeout(() => {
   //       this.setState({ loading: false, visible: false });
   //    }, 3000);
   // };
   handleCancel = () => {
      this.setState({ visible: false });
      this.state.propsRenWu.resetFields([ "username","college","rangePicker","cascader","zuoye"])
   };
   onChange(date,datas){
      // console.log(date,datas);

   }
   onOk(){
      this.state.propsRenWu.validateFields((err, values) => {
         // console.log( values);
      })
      
   }
   jumpMyPerformance = () => {
      createHashHistory().push("/home/jumpMyPerformance");
   }
    formOK(){
      this.state.propsRenWu.validateFields((err, values) => {
         if (err) {
           return;
         }
   
         // Should format date value before submit.
         // const rangeValue = values['rangepicker']; 
         // const valuess = {
         //   ...values,
         //   'datepicker': values['datepicker'].format('YYYY-MM-DD'), 
         // };
         // console.log('Received values of form: ', valuess);

         // console.log(values['rangePicker'].format('YYYY-MM-DD') )   
       });
    }
   componentDidMount() {
      // this.props.form.validateFields();
      var aaa = this.state.propsRenWu;
      aaa.test="test"
      this.setState({
         propsRenWu:aaa
      },()=>{
         // console.log(this.state.propsRenWu ,this.state.propsQingJia ) 
      })
   }
   handleSubmit = e => {
      e.preventDefault();
      this.state.propsRenWu.validateFields((err, values) => {
        if (!err) {
         //  console.log('Received values of form: ', values);
        }
      });
    };


    QingjiaShow=()=>{
      this.setState({ isShowQingJia:true },()=>{
         this.state.propsQingJia.validateFields((err,val)=>{
                   
         })
      })
   }

    QingjiaCancel=()=>{
       this.setState({ isShowQingJia:false })
    }
    QingjiaSubmit=()=>{
       this.setState({ isShowQingJia:false })
    }
    
    QingjiaError=()=>{
      const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,resetFields,} = this.state.propsQingJia; 
       return {
          name: isFieldTouched('QingJiaName') && getFieldError('QingJiaName'),
          jiaxing: isFieldTouched('jiaxing') && getFieldError('jiaxing'), 
       }
    };
    QingjiaConFig=()=>{
      const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,resetFields } = this.state.propsQingJia; 
       return {
          name: { rules: [{ required: true, message: '请填写姓名!' }] }
       }
    };

    
   render() { 
      const { formLayout } = this.state;
      const scale = {
         value: {
            min: 0,
            max: 100,
         },
      };
      const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,resetFields } = this.state.propsRenWu; 
      const { visible, loading } = this.state;


      const usernameError = isFieldTouched('username') && getFieldError('username');
      const collegeError = isFieldTouched('college') && getFieldError('college');
      const rangePickerError = isFieldTouched('rangePicker') && getFieldError('rangePicker');
      const cascaderError = isFieldTouched('cascader') && getFieldError('cascader');
      const zuoyeError = isFieldTouched('zuoye') && getFieldError('zuoye');
      Echarts.registerTheme('walden', walden);
   
      const formItemLayout ={ labelCol: { span: 5}, wrapperCol: { span:17 }, };

       const config = { rules: [{ type: 'object', required: true, message: '请选择时间!' }],
                        // initialValue:moment("2019-09-09 02:01:20"),
                      };
       const rangeConfig = {
         rules: [{ type: 'array', required: true, message: 'Please select time!' }],
         // initialValue:[moment( "2019-01-01"),moment( "2019-01-02")],
       };

       const residences = [
         {
           value: '1',
           label: '小学',
           children: [
             {
               value: '1.1',
               label: '一年级', 
             },
             {
               value: '1.2',
               label: '二年级', 
             },
             {
               value: '1.3',
               label: '三年级', 
             },
             {
               value: '1.4',
               label: '四年级', 
             },
             {
               value: '1.5',
               label: '五年级', 
             },
             {
               value: '1.6',
               label: '六年级', 
             },
           ],
         },
         {
           value: '2',
           label: '初中',
           children: [
             {
               value: '2.1',
               label: '初一', 
             },
             {
               value: '2.2',
               label: '初二', 
             },
             {
               value: '2.3',
               label: '初三', 
             },
           ],
         },
         {
           value: '3',
           label: '高中',
           children: [
               {
                  value: '3.1',
                  label: '高一', 
               },
               {
                  value: '3.2',
                  label: '高二', 
               },
               {
                  value: '3.3',
                  label: '高三', 
               },
           ],
         },
         {
           value: '4',
           label: '大学',
           children: [
            {
               value: '4.1',
               label: '大一', 
            },
            {
               value: '4.2',
               label: '大二', 
            },
            {
               value: '4.3',
               label: '大三', 
            },
            {
               value: '4.3',
               label: '大三', 
            },
           ],
         },
       ];


       const  QingJiaFootr =  [
          <Button key={"Cancel"} onClick={()=>this.QingjiaCancel()}>取消</Button>,
          <Button key={"Submit"} onClick={()=>this.QingjiaSubmit()} type="primary" disabled={hasErrors(this.state.propsQingJia.getFieldsError(["QingJiaName","jiaxing"] ))} >创建并提交</Button> 
       ];

       const  QingJiaItemLayout ={ labelCol: { span: 5}, wrapperCol: { span:17 }, };
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
                        title="已完成课时" value={100} suffix="/ 121" />
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
                              <Comment author={<a>高浏罗</a>}
                                 content={
                                    <div className="pdiv">
                                       <strong>二年级 - 女孩 - 文科差 </strong>

                                       <p style={{ fontSize: "9px", color: "#c2c2c2" }}>
                                          该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                    </div>
                                 }
                                 avatar={<Avatar src="http://img5.imgtn.bdimg.com/it/u=2477893629,2496599484&fm=15&gp=0.jpg" alt="Han Solo" />} />
                              <div className="caozuo">
                                 <div>查看</div>
                                 <div>编辑</div>
                                 <div>联系</div>
                              </div>
                           </div>
                           <div className="gezi">
                              <Comment author={<a>高浏罗</a>}
                                 content={
                                    <div className="pdiv">
                                       <strong>二年级 - 女孩 - 文科差 </strong>

                                       <p style={{ fontSize: "9px", color: "#c2c2c2" }}>
                                          该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                    </div>
                                 }
                                 avatar={<Avatar src="http://img4.imgtn.bdimg.com/it/u=1637919777,3494323715&fm=15&gp=0.jpg" alt="Han Solo" />} />
                              <div className="caozuo">
                                 <div>查看</div>
                                 <div>编辑</div>
                                 <div>联系</div>
                              </div>
                           </div>
                           <div className="gezi">
                              <Comment author={<a>高浏罗</a>}
                                 content={
                                    <div className="pdiv">
                                       <strong>二年级 - 女孩 - 文科差 </strong>

                                       <p style={{ fontSize: "9px", color: "#c2c2c2" }}>
                                          该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                    </div>
                                 }
                                 avatar={<Avatar src="http://img3.imgtn.bdimg.com/it/u=2475849442,329715809&fm=26&gp=0.jpg" alt="Han Solo" />} />
                              <div className="caozuo">
                                 <div>查看</div>
                                 <div>编辑</div>
                                 <div>联系</div>
                              </div>
                           </div>
                           <div className="gezi">
                              <Comment author={<a>高浏罗</a>}
                                 content={
                                    <div className="pdiv">
                                       <strong>二年级 - 女孩 - 文科差 </strong>

                                       <p className="infos" style={{ fontSize: "9px", color: "#c2c2c2" }}>
                                          该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                    </div>
                                 }
                                 avatar={<Avatar src="http://img4.imgtn.bdimg.com/it/u=1357628744,178375004&fm=26&gp=0.jpg" alt="Han Solo" />} />
                              <div className="caozuo">
                                 <div>查看</div>
                                 <div>编辑</div>
                                 <div>联系</div>
                              </div>
                           </div>
                           <div className="gezi">
                              <Comment author={<a>高浏罗</a>}
                                 content={
                                    <div className="pdiv">
                                       <strong>二年级 - 女孩 - 文科差 </strong>

                                       <p style={{ fontSize: "9px", color: "#c2c2c2" }}>
                                          该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                    </div>
                                 }
                                 avatar={<Avatar src="http://img4.imgtn.bdimg.com/it/u=2482476292,4060215508&fm=26&gp=0.jpg" alt="Han Solo" />} />
                              <div className="caozuo">
                                 <div>查看</div>
                                 <div>编辑</div>
                                 <div>联系</div>
                              </div>
                           </div>
                           <div className="gezi">
                              <Comment author={<a>高浏罗</a>}
                                 content={
                                    <div className="pdiv">
                                       <strong>二年级 - 女孩 - 文科差 </strong>

                                       <p style={{ fontSize: "9px", color: "#c2c2c2" }}>
                                          该生思维严密,机智敏捷,天资聪颖,有强烈的求知欲,学习成绩优异,富有创新精神。 严于律己,关心同学,积极参与集体生活,遵守纪律,
                                              </p>
                                    </div>
                                 }
                                 avatar={<Avatar src="http://img4.imgtn.bdimg.com/it/u=1050973335,3741690257&fm=26&gp=0.jpg" alt="Han Solo" />} />
                              <div className="caozuo">
                                 <div>查看</div>
                                 <div>编辑</div>
                                 <div>联系</div>
                              </div>
                           </div>

                        </div>

                     </Card>
                     <Card style={{ width: "98%", marginTop: "15px" }} title="学生综合情况"  >
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
                        <List dataSource={this.state.stData}
                           renderItem={(item, i) => (
                              <List.Item key={i}>
                                 <div style={{ overflow: "hidden", width: "100%" }}>
                                    {i + 1} . <span>{item.text}</span> {item.isOK ? <Checkbox defaultChecked={true} style={{ float: "right" }} /> : <Checkbox style={{ float: "right" }} defaultChecked={false} />}
                                 </div>
                              </List.Item>
                           )}
                        />

                     </Card>

                     <Card style={{ width: "100%", marginTop: "15px" }} title="我的工作台"  >
                        <Button style={{ marginBottom: "10px" }} icon={"plus"} type="primary" block onClick={() => this.showModal()}> 创建今日任务总结 </Button>
                        <Button style={{ marginBottom: "10px" }} icon={"plus"} type="default" block > 创建明日任务单</Button>
                        <Button style={{ marginBottom: "10px" }} icon={"plus"} type="danger" block onClick={() => this.QingjiaShow()}> 创建请假单</Button>
                        <Button.Group size="small" style={{ margin: "0 auto" }}>
                           <Button icon={"container"}  >我的月计划</Button>
                           <Button type="primary" icon={"setting"}  >设置</Button>
                           <Button type="primary" icon={"to-top"}  >我的提交</Button>
                        </Button.Group>

                     </Card>

                  </Col>
               </Row>
            </div>



            <Modal visible={this.state.visible} title="添加任务总结" onOk={this.handleOk}  width={"75%"} style={{ top: 20 }} onCancel={this.handleCancel}
               footer={[<Button key="back" onClick={this.handleCancel}>  取消  </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={()=> this.formOK()} htmlType="submit" disabled={hasErrors(getFieldsError([
                           "username","college","rangePicker","cascader","zuoye"
                        ]))}  > 提交 </Button> ]} >
                           <div style={{width:"94%",margin:"0px auto" }}> 
                                 <Form layout="inline" name="sas" onSubmit={this.handleSubmit}>
                                       <Form.Item label="姓名"  {...formItemLayout}  validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                                          {getFieldDecorator('username', {
                                             rules: [{ required: true, message: 'Please input your username!' }],
                                          })(
                                             <Input
                                             
                                             placeholder="姓名"
                                             />,
                                          )}
                                       </Form.Item>
                                       <Form.Item label="学员" {...formItemLayout} validateStatus={collegeError ? 'error' : ''} help={collegeError || ''}>
                                          {getFieldDecorator('college', {
                                             rules: [{ required: true, message: '学员不能为空！' }],
                                          })(
                                             <Input
                                             
                                             
                                             placeholder="学员"
                                             />,
                                          )}
                                       </Form.Item>
                                       <Form.Item label="日期"  {...formItemLayout} validateStatus={rangePickerError ? 'error' : ''}  help={rangePickerError || ''}>
                                          {getFieldDecorator('rangePicker', rangeConfig)(<RangePicker style={{width:"100%", }}  showTime format="YYYY-MM-DD HH:mm"   onChange={()=>this.onChange()}
                                       onOk={()=> this.onOk()} />)}
                                       </Form.Item>

                                       <Form.Item label="学级"  {...formItemLayout} validateStatus={cascaderError ? 'error' : ''}  help={cascaderError || ''}>
                                          {getFieldDecorator('cascader', 
                                          {
                                             // initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                             rules: [
                                             { type: 'array', required: true, message: '请选择学生学级!' },
                                             ],
                                          }
                                          
                                          )(  <Cascader options={residences}  placeholder="Please select" />)}
                                       </Form.Item>
                                       <Form.Item label="作业情况"  {...formItemLayout} validateStatus={zuoyeError ? 'error' : ''}  help={zuoyeError || ''}>
                                          {getFieldDecorator('zuoye', 
                                          {
                                             // initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                             rules: [
                                             { type: 'string', required: true, message: '请选择作业完成情况!' },
                                             ],
                                          }
                                          
                                          )(  
                                             <Select   style={{ width: "100%" }} placeholder="作业情况" >
                                                <Option value="0">无作业</Option>
                                                <Option value="1">作业良好完成</Option>
                                                <Option value="2">作业完成不理想</Option> 
                                          </Select>
                                          )}
                                       </Form.Item>
                                          
                                       </Form>
                                 <Input.TextArea  style={{width:"92%",height:"160px",margin:"20px auto",display:"block"}}  placeholder="详情备注"  />              
                           </div> 
           </Modal>
        
          <Modal visible={this.state.isShowQingJia} title="添加请假单" width={"75%"} style={{ top: 20 }}   onCancel={()=>this.QingjiaCancel()} footer={QingJiaFootr}>
                <div style={{width:"94%",margin:"0px auto" }}>
                      <Form layout="inline" name="QingJia" id="QingJia" >
                            <Form.Item label="姓名"  {...QingJiaItemLayout}  validateStatus={this.QingjiaError().name ? 'error' : ''} help={this.QingjiaError().name || ''}>
                                { getFieldDecorator('QingJiaName',this.QingjiaConFig().name )( <Input placeholder="姓名" />) }
                            </Form.Item>  

                            <Form.Item label="假型"  {...formItemLayout} validateStatus={this.QingjiaError().jiaxing ? 'error' : ''}  help={this.QingjiaError().jiaxing || ''}>
                                          {getFieldDecorator('jiaxing', 
                                          {
                                             // initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                             rules: [
                                               { type: 'string', required: true, message: '请选择假型!' },
                                             ],
                                          }
                                          
                                          )(  
                                             <Select   style={{ width: "100%" }} placeholder="请选择假型" >
                                                <Option value="0">年假</Option>
                                                <Option value="1">事件</Option>
                                                <Option value="2">婚假</Option> 
                                                <Option value="3">病假</Option> 
                                                <Option value="4">产假</Option> 
                                             </Select>
                                          )}
                                       </Form.Item> 
                      </Form> 
                </div>
                
          </Modal>
         </div>
      )
   }

   
}

export default Form.create( { name: 'sas' })(Me); 