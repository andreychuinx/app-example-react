import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataInput: ''
    }
    // this.onChangeInput = this.onChangeInput.bind(this);
  }
  onChangeInput(e){
    this.setState({
      dataInput: e.target.value
    })
  }

  render() {
    const { props, state } = this
    console.log(props, 'ini props')
    return (
      <input
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    )
  }
}