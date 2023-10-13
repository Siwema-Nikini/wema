import { Component } from "react";

class App extends Component{
  constructor(){
    super();
    this.state={
     monsters:[
       {
         id:'1',
         name:'Linda',
       },

       {
         id:'2',
         name:'Frank',
       },

       {
         id:'3',
         name:'Jack',
       },
     ]

    }
  }

  render(){
    return(
    this.state.monsters.map((monster)=>{
      return(
        <div key={monster.id}>
          <h1>{monster.name}</h1>
          
        
        </div>
      )
    })
    ) 
  }

}

export default App;