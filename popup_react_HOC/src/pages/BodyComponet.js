import React, { Component } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import DeletePopup from '../components/DeletePopup'
import PopupHOC from '../HOC/PopupHOC'
import SubBodyComponent from './SubBodyComponent'

const PopupWrapper = PopupHOC( ButtonComponent, DeletePopup )

export default class BodyComponet extends Component {
  render() {
    return (
      <div>
        <h2>BodyComponet</h2>
        <PopupWrapper text="BodyComponet Button"></PopupWrapper>
        {/* <ButtonComponent handleClick={ handleClick } text='BodyComponet Button'></ButtonComponent> */}
        <SubBodyComponent></SubBodyComponent>
      </div>
    )
  }
}
