import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {

    const style = {
      backgroundImage: `url(${this.props.poster})`
    }

    return (
      <div className="card-front" style={style}>
      </div>
    )
  }
}
