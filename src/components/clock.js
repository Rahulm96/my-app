import React, { Component } from 'react'

export default class clock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
      const timerId = setInterval(this.tick.bind(this), 1000);
    }
    
    componentWillUnmount(){
      clearInterval(this.timerId);
    }
    
    tick(){
      this.setState({
        date: new Date()
      })
    }
    
  render() {
    return (
      <div>
        This is the current time : {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}
