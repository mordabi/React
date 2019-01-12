import React from 'react'
import Classes from './Cockpit.module.css'
import Aux from '../../Hoc/Auxilary'

const ControllerApp = (props)=> {

    let classes = [];
    let btnClass = Classes.Button;
    if(props.showPerson)
    {
        btnClass = [Classes.Button, Classes.Red].join(' ');
        
    }
    if(props.persons.length<=2)
    {
      classes.push(Classes.red);
    }
    if(props.persons.length<=1)
    {
       classes.push(Classes.bold);
    }
    return (
    <>
    <h1>hi im react App</h1>
    <button className={btnClass} onClick={props.toggle} >Toggle persons</button>
    <button onClick= {props.login}>log in</button>
    <p className={classes.join(' ')}>fuck yeaaa</p>
    </>
    )
}



export default ControllerApp;