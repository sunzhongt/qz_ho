import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
 import {Table,Tag,Divider,Button,Icon,Row,Col} from 'antd';
 const { Global } = require('../../../../API/Global');
  
   
class Me extends Component {
    constructor() {
        super();

        this.state = {
          
        }
    }
    
 
    render() {
        return (
            <div className="me">
               <div  style={{ width: '100%', height:( Global.pagesHeight / 2)  + 'px' }}>
                  <Row>
                        <Col span={12}>
                            <div className="jihua keshi">
                            <Row>
                                <Col span={12} className="over">
                                    <h4><Icon type="crown" />120h</h4>
                                </Col>
                                <Col span={12}>

                                  <h5>
                                   本月计划课时 
                                 </h5>
                                 <div className="yiwanc">
                                    已完成课时：108h 
                                 </div>
                                 <div className="weiwanc">
                                    未完成课时：12h 
                                 </div>
                                </Col>
                            </Row>
                                 
                                  
                                 
                            </div>
                        </Col>
                        <Col span={12}>
                        <div className=" keshi">
                                 <h4>实际课时</h4>
                                 <h5>100小时</h5>
                            </div>
                        </Col>
                    </Row>
               </div>
               <div  style={{ width: '100%', height:( Global.pagesHeight / 2)  + 'px' }}>
                  <Row>
                        <Col span={12}>
                        2
                        </Col>
                        <Col span={12}>
                        2
                        </Col>
                    </Row>
               </div>
               
            </div>
        )
    }
}

export default Me;