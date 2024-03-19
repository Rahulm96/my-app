import React, { Component } from 'react'
import Childcmp from './Childcmp'             
export default class problem1 extends Component {
  render() {
    return (
      <div className='container'>
        <Childcmp name = "Rahul"/>
        <Childcmp name = "Summit"/>
        <Childcmp name = "Rahulagain"/>
        <Childcmp name = "Rahul"/>
      </div>
    )
  }
}
