
import React , {PureComponent} from 'react';
import Person from './Person/Person'


class Persones extends PureComponent{
    constructor(props)
    {
      super(props);
      this.lastRefElement = React.createRef()
      console.log('[Persons.js] constractor()');
    }
    componentWillMount()
    {
      console.log('[Persons.js] Componentwillmount()');
    }
    componentDidMount()
    {
      console.log('[Persons.js] ComponentDidMount() ');
      this.lastRefElement.current.focus();
    }
    // shouldComponentUpdate(nextProps,nextState){
    //   console.log('[update Persons.js] shouldComponentUpdate() ',nextProps,nextState);
    //     return true
    // }
    componentWillUpdate(nextProps,nextState){
      console.log('[update Persons.js] ComponentWillUpdate() ',nextProps,nextState);
    }
    componentDidUpdate(nextProps,nextState){
      console.log('[update Persons.js] ComponentDidUpdate() ',nextProps,nextState);
    };
   
    render(){
        console.log('[Persons.js] render()');
   return this.props.persons.map((person,index)=>{
        return  <Person change={(event)=>this.props.change(event,person.id)}
         key = {person.id} 
         name={person.name}
         age={person.age} 
         ref={this.lastRefElement}
         position  = {index}
         clicked={()=> this.props.delete(index)}/>
      })
}
}

export default Persones