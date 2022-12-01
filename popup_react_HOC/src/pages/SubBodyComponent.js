import React, { Component } from 'react'
import ButtonComponent from '../components/ButtonComponent'
import PopupComponent from '../components/PopupComponent'
import PopupHOC from '../HOC/PopupHOC'

const PopupWrapper = PopupHOC( ButtonComponent, PopupComponent )

export default class SubBodyComponent extends Component {
  render() {
    return (
      <div>
        <h3>SubBodyComponent</h3>
        <PopupWrapper text="SubBodyComponent Button"></PopupWrapper>
      </div>
    )
  }
}
