import React, { Component } from 'react'

export default class loginout extends Component {
    constructor(props){
        super(props);
        this.state = {islogedin: false};
    }

    logingin = ()=>{
        this.setState({islogedin:false})
    }

    logingout = ()=>{
        this.setState({islogedin:true})
    }

  render() {
    const { islogedin } = this.state;
    return (
      <div> 
        
        {islogedin?
        (<button onClick={this.logingin}> Login</button>):
        (<button onClick={this.logingout}>Logout</button>)}
      </div>
    )
  }
}
