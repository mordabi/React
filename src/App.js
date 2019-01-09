import React, { Component } from 'react';
import Person from './Person/Person'
import classess from'./App.css';
//import Radium ,{StyleRoot} from 'radium';

class App extends Component {

  state = {
    persons :[{id:'as11',name:'Mor',age:22},
    {id:'as12',name:'david',age:21},{id:'as13',name:'Avishi',age:22}],
    showPerson : false
  }

  switchNameHandler = (NewName)=>
  {
    //console.log('Clicked');
    this.setState({
      persons:[{name:NewName,age:22},{name:'david',age:24}]
    })
  }
  togglePersonElement = ()=>{
    const change = !this.state.showPerson;
    this.setState(
      {
        showPerson:change
      }
    )
  }


  deletePerson = (index) => {

    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState(
    {
      persons:persons
    }
    )
  }

  onChangeHandler=(event,id)=>{
    const personIndex = this.state.persons.findIndex((p)=>{
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] =person;
    this.setState({
      persons:persons
    })
  }
  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      cursor:'pointer',
      border:'1px solid blue',
      padding:'10px',
    };
    let persons = null;
    if (this.state.showPerson)
    {
      style.backgroundColor = 'red';
      persons=(<div>
        {
          this.state.persons.map((person,index)=>{
          return <Person change={(event)=>this.onChangeHandler(event,person.id)} key = {person.id} name={person.name} age={person.age} clicked={()=> this.deletePerson(index)}/>
        })
        }
    </div>);
    }
    let classes = [];
    if(this.state.persons.length<=2)
    {
      classes.push(classess.red);
    }
    if(this.state.persons.length<=1)
    {
       classes.push(classess.bold);
    }
    return (
      <div className={classess.App}>
        <h1>hi im react App</h1>
        <button style={style} onClick={this.togglePersonElement} >Toggle persons</button>
        {persons}
        <p className={classes.join(' ')}>fuck yeaaa</p>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App ') );
  }
}

export default App;
