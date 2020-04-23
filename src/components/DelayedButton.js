// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    

    timeout = (event) => {
        // console.log(event)
       setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }
    
    render() {
       return ( <button onClick ={event => { 
          event.persist(this.timeout(event))
         
       }}>
           Delayed
       </button>)
      }


}