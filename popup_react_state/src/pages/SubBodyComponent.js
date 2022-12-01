import React, { Component } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import PopupComponent from '../components/PopupComponent'
import MenuComponent from './Menu'

export default class SubBodyComponent extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.setpopupObj( { ...this.props.popupObj, subBody : 'default' } );
  }

  render() {
    return (
      <div>
        <h3>SubBodyComponent</h3>
        <ButtonComponent handleClick={ this.handleClick } text='SubBodyComponent Button'></ButtonComponent>
        { this.props.popupObj.subBody == 'default' ? <PopupComponent></PopupComponent> : '' }
        <MenuComponent {...this.props} />
      </div>
    )
  }
}
