import {
  Me_setStudent
} from './type';
const defaultState ={
     student:[]
};


export default (state=defaultState,action)=>{
    if(action.type==Me_setStudent){
        let newstate= JSON.parse(JSON.stringify(state));

        newstate.student=action.data;
        return newstate;
    }
     
    return state;
};