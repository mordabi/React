import React, { PureComponent } from 'react';
import Person from '../components/Persones/Person/Person'
import Classes from './App.module.css'
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import Persones from '../components/Persones/Persones'
import Cockpit from '../components/Cockpit/Cockpit'
import classes from './App.module.css';
import WithClass from '../Hoc/WithClass'
import wrapclass from '../Hoc/ClassWrap'
import Aux from '../Hoc/Auxilary'
//import Radium ,{StyleRoot} from 'radium';



export const authContext = React.createContext(false); 

class App extends PureComponent {

  constructor(props)
  {
    super(props);
    this.state = {
      persons :[{id:'as11',name:'Mor',age:22},
      {id:'as12',name:'david',age:21},{id:'as13',name:'Avishi',age:22}],
      showPerson : false,
      togglePerson :0,
      authState: false
    }
    console.log('[App.js] constractor()');
  }
  componentWillMount()
  {
    console.log('[App.js] Componentwillmount()');
  }
  componentDidMount()
  {
    console.log('[App.js] ComponentDidMount() ');
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[update App.js] shouldComponentUpdate() ',nextProps,nextState);
  //   return nextState.persons!=this.state.persons || 
  //   nextState.showPerson!=this.state.showPerson;
  // }
  componentWillUpdate(nextProps,nextState){
    console.log('[update App.js] ComponentWillUpdate() ',nextProps,nextState);
  }
  componentDidUpdate(nextProps,nextState){
    console.log('[update App.js] ComponentDidUpdate() ',nextProps,nextState);
  }
  static getDerivedStateFromProps(nextProps,prevState)
  {
    console.log('[App.js] getDrivedStateFromProps()',nextProps,prevState);
    return prevState;
  };
  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate',this.state.togglePerson);
  }
 
  logHendler =()=>{
    return this.setState({authState:true}) ;
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
    this.setState((prevState,props)=>
      {
       return  {showPerson:change,
        togglePerson: prevState.togglePerson + 1}
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
    console.log('[App.js render()]');
    let persons = null;
    if (this.state.showPerson)
    {
      persons=(
          <Persones persons = {this.state.persons}
           delete = {this.deletePerson}
           change = {this.onChangeHandler}
           />
           

           /////////code without split to components
        //   this.state.persons.map((person,index)=>{
        //   return <ErrorBoundary>
        //     <Person change={(event)=>this.onChangeHandler(event,person.id)}
        //    key = {person.id} 
        //    name={person.name}
        //     age={person.age} 
        //     delete={()=> this.deletePerson(index)}/></ErrorBoundary>
        // })
    );
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPerson:true})}}></button>
        <Cockpit toggle = {this.togglePersonElement} 
        persons ={this.state.persons} 
        showPerson = {this.state.showPerson}
        login ={this.logHendler}/>
        <authContext.Provider value ={this.state.authState}>
          {persons}
        </authContext.Provider>
      </Aux>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App ') );
  }
}

export default wrapclass(App,Classes.App);
