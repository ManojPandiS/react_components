import React, { Component } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import PopupComponent from '../components/PopupComponent'
import SubMenuComponent from './SubMenu'

export default class MenuComponent extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.setpopupObj( { ...this.props.popupObj, subBody : 'Menu_default' } );
  }

  render() {
    return (
      <div>
        <h3>MenuComponent</h3>
        <ButtonComponent handleClick={ this.handleClick } text='MenuComponent Button'></ButtonComponent>
        { this.props.popupObj.subBody == 'Menu_default' ? <PopupComponent></PopupComponent> : '' }
        <SubMenuComponent {...this.props}/>
      </div>
    )
  }
}
