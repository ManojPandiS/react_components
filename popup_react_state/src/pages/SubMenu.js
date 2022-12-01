import React, { Component } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import PopupComponent from '../components/PopupComponent'

export default class SubMenuComponent extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.setpopupObj( { ...this.props.popupObj, subBody : 'Submenu_default' } );
  }

  render() {
    return (
      <div>
        <h3>SubMenuComponent</h3>
        <ButtonComponent handleClick={ this.handleClick } text='SubMenuComponent Button'></ButtonComponent>
        { this.props.popupObj.subBody == 'Submenu_default' ? <PopupComponent></PopupComponent> : '' }
      </div>
    )
  }
}
