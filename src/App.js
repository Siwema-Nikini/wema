import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
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
