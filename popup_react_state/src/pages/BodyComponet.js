import React, { Component } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import DeletePopup from '../components/DeletePopup'
import SubBodyComponent from './SubBodyComponent'

export default class BodyComponet extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.setpopupObj( { ...this.props.popupObj, global : 'delete' } );
  }

  render() {
    return (
      <>
        <h2>BodyComponet</h2>

        <ButtonComponent handleClick={ this.handleClick } text='BodyComponet Button'></ButtonComponent>
        { this.props.popupObj.global == 'delete' ? <DeletePopup></DeletePopup> : '' }
        <SubBodyComponent {...this.props} />
      </>
    )
  }
}
