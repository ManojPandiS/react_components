import React, { Component } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import ConfirmPopup from '../components/ConfirmPopup'

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.setpopupObj( { ...this.props.popupObj, global : 'confirm' } );
  }

  render() {
    return (
      <div>
        <h1>HeaderComponent</h1>
        <ButtonComponent handleClick={ this.handleClick } text='HeaderComponent Button'></ButtonComponent>
        { this.props.popupObj.global == 'confirm' ? <ConfirmPopup></ConfirmPopup> : '' }
      </div>
    )
  }
}
