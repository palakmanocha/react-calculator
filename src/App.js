import React, { Component } from 'react';
import './App.css';
import Keys from './components/Keys';

class App extends Component {

  constructor(){
    super();
    this.state={
      keys:[1,2,3,4,5,6,7,8,9,'.',0,'-'],
      ops:['+','-','x','÷','%'],
      fns:['C','Del','=']
    }
  }


  toInput(e){
    this.refs.exp.value = this.refs.exp.value + e.target.value;
    e.preventDefault();
  }

  toDo(e){
   let n = this.refs.exp.value;
   if(e.target.value === '='){
        for (let i = 0; i < n.length; i++) {
            if(n.charAt(i)==='+'){
              let x = n.substring(0,i);
              let y = n.substring(i+1);
              x = parseFloat(x,10);
              y = parseFloat(y,10);
              this.refs.exp.value = x+y;
            }
            if(n.charAt(i)==='-'){
              let x = n.substring(0,i);
              let y = n.substring(i+1);
              x = parseFloat(x,10);
              y = parseFloat(y,10);
              this.refs.exp.value = x-y;
            }
            if(n.charAt(i)==='x'){
              let x = n.substring(0,i);
              let y = n.substring(i+1);
              x = parseFloat(x,10);
              y = parseFloat(y,10);
              this.refs.exp.value = x*y;
            }
            if(n.charAt(i)==='÷'){
              let x = n.substring(0,i);
              let y = n.substring(i+1);
              x = parseFloat(x,10);
              y = parseFloat(y,10);
              this.refs.exp.value = x/y;
            }
            if(n.charAt(i)==='%'){
              let x = n.substring(0,i);
              let y = n.substring(i+1);
              x = parseFloat(x,10);
              y = parseFloat(y,10);
              this.refs.exp.value = (x/100)*y;
            }
       }   
   }
   if(e.target.value ==='C')
      this.refs.exp.value=" ";
   if(e.target.value==='Del')
      this.refs.exp.value=this.refs.exp.value.substring(0,n.length-1);
    }
  render() {
    return (
      <div className="App">
          <h1>React-Calculator</h1>
          <div id='calculator'>
            <input id='inp' ref='exp' type="text"/>
              <Keys do={this.toDo.bind(this)} clk={this.toInput.bind(this)} elements={this.state.keys} ops={this.state.ops} fns={this.state.fns}/>
          </div>
      </div>
    );
  }
}

export default App;
