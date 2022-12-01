import React, { Component } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import ConfirmPopup from '../components/ConfirmPopup'
import PopupHOC from '../HOC/PopupHOC'

const PopupWrapper = PopupHOC( ButtonComponent, ConfirmPopup )

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <h1>HeaderComponent</h1>
        <PopupWrapper text="HeaderComponent Button"></PopupWrapper>
      </div>
    )
  }
}
