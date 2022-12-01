import React, { Component } from 'react'

export default class ConfirmPopup extends Component {
  render() {
    return (
      <div style={ { color: 'green', backgroundColor: '#e6f4e6', padding: '1px 20px 20px 20px', width : '65%', borderRadius: '16px', position: 'relative', right : '-25px', top : '0', height : '110px', marginTop: '20px' } }>
        <h1>Order Confirmation</h1>
        <div>Thank you! for your purchase, Your order has been placed successfully. </div>
      </div>
    )
  }
}
