import React,{Component} from 'react'; 
import { HashRouter ,Link,Route,Redirect} from 'react-router-dom';
 
import './App.css';
import Login from './Pages/login';
import home from './Pages/home';
class App extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render(){
    return (
      <HashRouter  >
      <div >
           
          <Route exact path="/" render={()=><Redirect to="/Login" />}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/home" component={home}></Route> 
      </div>
   </HashRouter> 
    )
  }
}

export default App;
