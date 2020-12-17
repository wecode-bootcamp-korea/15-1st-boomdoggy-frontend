import React, { Component } from 'react';

class Option extends Component {
  render() {
    return (
      <option value={this.props.item.value}>{this.props.item.text}</option>
    );
  }
}

export default Option;
