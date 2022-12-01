import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);

        this.state = { counterTime : this.props.counterTime }        
        
        this.startTimer = () => { 
            this.interval && this.stopTimer();
            ( this.interval = setInterval( () => this.setState( ( prevValue ) => {
                return { counterTime : prevValue.counterTime + 1 }
            } ), 1000 ) )
        }

        this.stopTimer = () => {
            clearInterval( this.interval );
        }

        this.resetTimer = () => {
            this.stopTimer()
            this.setState( { counterTime : 0, showTimeOut : false } )
        }

        this.removeCounter = () => {
            this.props.removeCounter( this.props.id );
        }
    }

    componentDidUpdate( prevProps, prevState ) {
        if( prevState.counterTime > 9 && !prevState.showTimeOut ) {
            this.stopTimer();
            this.setState( { showTimeOut : true } );
        }
    }

    componentWillUnmount() {
        this.stopTimer();
    }

  render() {
    return (
      <div>
        <button onClick={ () => this.startTimer() }>Start</button>
        <button onClick={ () => this.stopTimer() }>Stop</button>
        <button onClick={ () => this.resetTimer() }>Reset</button>
        <button onClick={ () => this.removeCounter() } >Remove</button>
        {
            this.state.showTimeOut ? <div>TimeOut</div> : <div>{ this.state.counterTime }</div>
        }
      </div>
    )
  }
}
