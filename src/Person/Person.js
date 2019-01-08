import React from 'react'
import './Person.css'
//import Radium from 'radium';
const person = (props)=>
{

    return( 
        <div className='Person'>
            <p onClick={props.clicked}>Hi im {props.name} wirting react and im {props.age} years old {props.children}</p>
            <input type='text' onChange={props.change} value={props.name}></input>
        </div>
    )
}

export default person;