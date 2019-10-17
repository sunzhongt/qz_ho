
import React, { Component } from 'react';
import './editAntd.scss';
import './style.scss';
import {createHashHistory} from "history"
import ReactEcharts from 'echarts-for-react';
import { Chart, Coord,Tooltip, Geom, Guide } from 'bizcharts';
const { Global } = require('../../../../API/Global');
const { shine } = require('../../../../API/shine'); 
const { walden } = require('../../../../API/walden');
 


const { Text } = Guide;

const data = [ {
  gender: 'female',
//   path: 'M320.96 503.232v105.376h127.872V736.48H320.96v127.872H191.136V736.48H63.296V608.608h127.84v-105.76C81.216 474.208 0 374.56 0 255.712 0 114.496 114.496 0 255.712 0c141.248 0 255.68 114.496 255.68 255.712 0 119.328-79.872 219.264-190.432 247.52zm-65.248-375.36c-70.624 0-127.872 57.216-127.872 127.84 0 70.592 57.248 127.84 127.872 127.84s127.872-57.248 127.872-127.84c0-70.624-57.248-127.84-127.872-127.84z',
  value: 100,
}];

const scale = {
  value: {
    min:0,
    max: 100,
  },
};

class jumpMyPerformance extends Component {
    constructor(props){
        super(props);
        this.state={

        }
     
    }

    render(){
        return (
            <div  >
                <Chart height={400} width={400} data={data} scale={scale}  >
        <Tooltip />
        <Geom
          type="interval"
          position="gender*value"
          color="gender"
          shape="liquid-fill-gauge"
          style={{
            lineWidth: 10,
            opacity: 0.75,
          }}
        />
        <Guide>
          {
            data.map(
              (row ,i)=> (<Text 
                key={i}
                content={`${row.value}%`}
                top
                position={{
                  gender: row.gender,
                  value: 50,
                }}
                style={{
                  opacity: 0.75,
                  fontSize: window.innerWidth / 25,
                  textAlign: 'center',
                }}
              />))
          }
        </Guide>
      </Chart>
            </div>
        )
    }
}


export default jumpMyPerformance;