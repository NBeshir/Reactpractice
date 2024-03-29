import React,{Component} from 'react';


import './App.css';
import Person from './Person/Person';

class App extends Component {
state={
persons: [
  {id:1, name:"Max", age:28},
  {id:2, name:"Manu" , age:27},
  {id:3, name:"Lina", age:8}
  ],
  showPersons:false
}

// 


nameChangedHandler = (event, id) =>{
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });
  const person = {
    ...this.state.persons[personIndex]
  };
  person.name= event.target.value;

  const persons = [...this.state.persons]
  persons[personIndex] = person;
  this.setState({persons:persons})
    

}

togglePersonsHandler = () =>{
  const doesShow = this.state.showPersons;
 this.setState({showPersons : !doesShow})
}
 
  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons:persons})

  }

  render(){
const style = {
  backgroundColor:'green',
  font:'inherit',
  border:'1px solid blue',
  padding:'8px',
  cursor:'pointer',
  color:'white'
  
};

let persons =null;
if(this.state.showPersons){
  persons =(
  <div>
  
    {
      this.state.persons.map((people,index)=>{
      return  <Person key={people.id} name={people.name} age={people.age} clicked={()=>this.deletePersonHandler(index)}  change={(event)=>this.nameChangedHandler(event,people.id)}/>
   })
   
   }
  
  
  </div>
  );
  
  style.backgroundColor="red";
  
}
let classes = [];
if(this.state.persons.length <=2){
  classes.push('red');
}
if(this.state.persons.length <=1){
  classes.push('bold')
}
  return (
    <div className="App" >
      <h1>I am a react app</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button style={style} onClick={this.togglePersonsHandler}> Switch Name</button>
      
      
      {persons}
      

    
      
     
    
    </div>
    
  );
 
}
}

export default App;
