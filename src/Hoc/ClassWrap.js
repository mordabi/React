import React, {Component} from 'react'

const classWrap = (WrapClass,nameClass)=> {
    const Wrapp = class extends Component{
            render(){
            return (
            <div className={nameClass}>
                <WrapClass ref={this.props.forwardRef} {...this.props}/>
            </div>)
        }
        
    }
    return React.forwardRef((props,ref)=>{
       return <Wrapp {...props} forwardRef ={ref}/>
    })
}
export default classWrap;