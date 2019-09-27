import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
 import {Table,Tag,Divider,Button,Icon} from 'antd';
 const columns = [
    {

        title: '序号',
        align:'center',
        width:70, 
        render:(text,record,index)=>`${index+1}`
        
        },{
      title: '学生姓名',
      dataIndex: 'name',
      key: 'name',
      align:'center',
      render: text =>  text ,
    },
    {
      title: '负责教师',
      dataIndex: 'teacher',
      key: 'teacher',
      align:'center',
    },
    {
      title: '学生情况',
      dataIndex: 'address',
      key: 'address',
      align:'center',
    },
    {
      title: '特点',
      key: 'tags',
      align:'center',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: '作业完成情况',
      dataIndex: 'action',
      align:'center',
      key: 'action',
      render: (text, record) => {
        var color,con ;
        if(text==0){
          color="orange";
          con="不理想"
        }else if(text==1){
            color="green";
            con="良好"
        }else {
            color="red";
            con="优秀"
        }
        return (
            <span style={{color}}>{con}</span>
        )
      },
    },
    {
      title: '审阅',
      dataIndex: 'isClick',
      align:'center',
      key: 'isClick', 
      render: (text, record) => {
        var bom ;
        
        if(text){
            return (
              <span><Icon type="check" style={{color:'green'}} /><span style={{color:'green'}}>已审阅</span> </span>  
            );
        }else {
          return (
             <Button size="small">
                <Icon type="form" /> 审阅
             </Button>
          )  
        }

        
      }
    }
  ];
  
  const data = [
    {
      key: '1',
      name: '高浏罗',
      teacher: "申院长",
      action:"1",
      address: '英文不好',
      tags: ['聪明', '不好好学'],
      isClick:1,
    },
    {
      key: '2',
      name: '金?熙',
      teacher: '申雪莲',
      action:"1",
      address: '数学不好',
      tags: ['看见数学就逃避'],
      isClick:1,
    },
    {
      key: '3',
      name: '爱谁谁 记不得',
      teacher: '蒋程程',
      action:"0",
      address: '语文不好',
      tags: ['识字困难'],
      isClick:0,
    },
    {
      key: '4',
      name: '爱谁谁 记不得',
      teacher: '钱盼盼',
      action:"2",
      address: '背书不好',
      tags: ['学习努力', '学习能力欠佳'],
      isClick:0,
    },
    {
      key: '5',
      name: '爱谁谁 记不得',
      teacher: '郑阳',
      action:"2",
      address: '听写',
      tags: ['不听话'],
      isClick:1,
    },
    {
      key: '6',
      name: '爱谁谁 记不得',
      teacher: '郑阳',
      action:"2",
      address: '听写',
      tags: ['不听话'],
      isClick:1,
    },
    {
      key: '7',
      name: '爱谁谁 记不得',
      teacher: '郑阳',
      action:"2",
      address: '听写',
      tags: ['不听话'],
      isClick:1,
    },
    {
      key: '8',
      name: '爱谁谁 记不得',
      teacher: '郑阳',
      action:"2",
      address: '听写',
      tags: ['不听话'],
      isClick:1,
    },
    {
      key: '9',
      name: '爱谁谁 记不得',
      teacher: '郑阳',
      action:"2",
      address: '听写',
      tags: ['不听话'],
      isClick:1,
    },
     
  ];
class Test extends Component {
    constructor() {
        super();

        this.state = {
          
        }
    }
    
 
    render() {
        return (
            <div className="test">
               <Table columns={columns}  size="small"  bordered dataSource={data} />
            </div>
        )
    }
}

export default Test;