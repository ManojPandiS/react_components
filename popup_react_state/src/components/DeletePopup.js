import React, { Component } from 'react'

export default class DeletePopup extends Component {
  render() {
    return (
        <div style={ { color: 'red', backgroundColor: 'rgb(244 230 230)', padding: '1px 20px 20px 20px', width : '65%', borderRadius: '16px', position: 'relative', right : '-25px', top : '0', height : '140px', marginTop: '20px'  } }>
            <h1>Delete order</h1>
            <div>Are you sure! Do you want to cancel this order?</div>
            <button style={{ marginTop: '20px'}}>Yes, proceed!!</button>
        </div>
    )
  }
}
