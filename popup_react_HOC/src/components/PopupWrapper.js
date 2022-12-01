import React, { Component } from 'react'
import ConfirmPopup from './ConfirmPopup'
import DeletePopup from './DeletePopup'
import PopupComponent from './PopupComponent'

export default class PopupWrapper extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const getPopup = () => {
            switch ( this.props.popupType ) {
                case 'delete'   : return <DeletePopup/>
                case 'confirm'  : return <ConfirmPopup/>
                default         : return <PopupComponent/>
            }
        }
        return getPopup()
  }
}
