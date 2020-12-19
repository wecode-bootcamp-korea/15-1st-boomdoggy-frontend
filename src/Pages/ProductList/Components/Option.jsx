import React, { Component } from 'react';

class Option extends Component {
  render() {
    const { item } = this.props;
    return <option value={item.value}>{item.text}</option>;
  }
}

export default Option;
