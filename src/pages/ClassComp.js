import React, { Component } from 'react'
import Form from '../components/Form';

export default class ClassComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'test',
      dataInput: '',
    }
  }

  onChangeInput(e){
    this.setState({
      dataInput: e.target.value
    })
  }

  render() {
    const { title, dataInput } = this.state
    return (
      <>
        <h1>Ini tampilan Class {title}</h1>
        <Form
          value={dataInput}
          onChange={(e) => this.onChangeInput(e)}
          placeholder="tolong di input"
        />
      </>
    )
  }
}