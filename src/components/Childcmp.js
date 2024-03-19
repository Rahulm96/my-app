import React, { Component } from 'react'

export default class Childcmp extends Component {
  render() {
    return (
      <div className='child'>
        <p> props passed is {this.props.name }</p>
      </div>
    )
  }
}
