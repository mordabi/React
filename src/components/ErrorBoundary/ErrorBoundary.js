import React,{Component} from 'react';


class ErrorBoundary extends Component{

    state={
        errorMassage:'',
        isError: false
    }

    errorCatch = (error,info)=>{
        this.setState({
            isError:true,
            errorMassage:error
        })
    }

    render()
    {
            if(this.state.isError){
               return <h1>{this.errorMassage}</h1>
            }
            else{
                return this.props.children;
            }
    }
}

export default ErrorBoundary