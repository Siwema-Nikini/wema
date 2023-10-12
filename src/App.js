import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monster1:{
        name:'linda'
      },

      monster2:{
        name:'Frank'
      },

      monster3:{
        name:'Jack'
      },


      name:{
            firstName:"siwema",
            lastName:'Nikini'
          },
            age:23,
    }
  }
  render(){
    return(
      <div>
        <p>Hello my name is {this.state.name.firstName} and I'am {this.state.age} years old</p>
        <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1>
        <button
         onClick = {() =>{
          this.setState({name:{firstName:'wema', lastName:'Simon'}, age:27})
          console.log(this.state)
        }}
        >
          change
          </button>
      </div>
    )
  }
}

export default App;
