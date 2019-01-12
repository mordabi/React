import React, {Component} from 'react'
import person from './Person.module.css'
import wrappClass from '../../../Hoc/ClassWrap'
import PropTypes from 'prop-types'
import {authContext} from '../../../container/App'
//import Radium from 'radium';

class Person extends Component
{
    constructor(props)
    {
      super(props);
      this.inputElement = React.createRef();
      console.log('[person.js] constractor()');
    }
    componentWillMount()
    {
      console.log('[person.js] Componentwillmount()');
    }
    componentDidMount()
    {
      console.log('[person.js] ComponentDidMount() ');
      // if(this.props.position === 0)
      //   this.inputElement.focus();
    }
    focus()
    {
      this.inputElement.current.focus();
    }
    render()
    {
        console.log('person.js render()');
        return <>
        <authContext.Consumer>
          {auth=> auth ? <p>Authicate</p>:null}
        </authContext.Consumer>
        <p onClick={this.props.clicked}>Hi im {this.props.name} wirting react and im {this.props.age} years old {this.props.children}</p>
        <input ref ={this.inputElement} type='text' onChange={this.props.change} value={this.props.name}></input>
    </>
    }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  clicked:PropTypes.func,
  change:PropTypes.func
}

export default wrappClass(Person,person.Person);