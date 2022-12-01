import React, { Component } from 'react'

export default class DeletePopup extends Component {
  render() {
    return (
        <div style={ { color: 'red', backgroundColor: 'rgb(244 230 230)', padding: '1px 20px 20px 20px', width : '65%', borderRadius: '16px', position: 'fixed', right : '25px', top : '110px', height : '140px' } }>
            <h1>Delete order</h1>
            <div>Are you sure! Do you want to cancel this order?</div>
            <button style={{ marginTop: '20px'}}>Yes, proceed!!</button>
        </div>
    )
  }
}
