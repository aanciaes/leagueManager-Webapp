import React, { Component } from 'react';
import logo from './logo.svg';
import ball from './Soccer_ball.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    prop1:true,
    prop2:false
  }
}
  render() {
    return (
      <div className="App">

        <img src={ball} className="App-logo" alt="logo" />
        <div className="wrapper-login">
          <div className="wrapper-input-login">
            <span>Username:</span>
            <input></input>
          </div>

          <div className="wrapper-input-login">
            <span>Password:</span>
            <input></input>
          </div>
        </div>
        
        <div className="button-login-wrapper">
          <button type='submit'>Go</button>
        </div>
        
       {/*  <Badjoraz teste1 = {this.state.prop1} teste2 = {this.state.prop2}/> */}
      </div>

    );
  }
}

class Badjoraz extends Component{

  render(){
    var text="";
    return(
      <div className="tiago-wrapper">
      
        <p className ="tiago">
          {this.props.teste1? text="badjoraz":text="zgarafi"}
          {text}    
          </p>
         
        </div>
    );
  }

}

export default App;
