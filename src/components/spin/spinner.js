import React, { Component } from 'react'
import loadSvg from './load.svg';

export class spinner extends Component {
  render() {
    return (
      <div  className="text-center">
        <img src={loadSvg} alt="Loading" />
      </div>
    )
  }
}

export default spinner
