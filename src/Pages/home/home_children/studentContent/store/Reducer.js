import {
  Student_getStudent,
  Student_getItemStudentContent
} from './type';
const defaultState ={
     studentList:[],
     studentContent:{}
};


export default (state=defaultState,action)=>{
    if(action.type==Student_getStudent){
        let newstate= JSON.parse(JSON.stringify(state));

        newstate.studentList=action.data;
        return newstate;
    }else if(action.type==Student_getItemStudentContent){
      let newstate= JSON.parse(JSON.stringify(state));

      let data=newstate.studentList.filter((ele,index)=>{
              return ele.id==action.id
      });
      newstate.studentContent=data[0] 
      return newstate;
    }
     
    return state;
};