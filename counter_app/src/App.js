import React, { Component } from 'react'
import Counter from './pages/Counter'

export default class App extends Component {
  constructor( props ) {
    super(props);
    this.state = { timer : [] }

    this.handleAddTimer = this.handleAddTimer.bind(this);
    this.removeCounter = this.removeCounter.bind(this);
  }

  handleAddTimer() {
    this.setState( { timer : [ ...this.state.timer, 0 ] });
  }

  removeCounter( index ) {
    this.setState( { timer : [ ...this.state.timer ].filter( ( item, curIndex ) => curIndex !== index ) } );
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <button onClick={() =>  this.handleAddTimer() }>Add Timer</button>
        {
          this.state.timer.map( ( counterTime, index ) => {
            return <Counter key={ index } id={ index } counterTime={ counterTime } removeCounter={ this.removeCounter }/>
          })
        }
      </>
    )
  }
}