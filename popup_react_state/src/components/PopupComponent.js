import React, { Component } from 'react'

export default class PopupComponent extends Component {
  render() {
    return (
      <div style={ { color: '#000', backgroundColor: '#f3f3f3', padding: '1px 20px 20px 20px', width : '65%', borderRadius: '16px', position: 'relative', right : '-25px', top : '0px', height : '110px', marginTop: '20px' } }>
        <h1>Hello there,</h1>
        <div>Welcome to Zoho Desk customer support portal.</div>
      </div>
    )
  }
}
