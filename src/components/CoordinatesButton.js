// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    coordinates = (event) => {
        const array = []
        array.push(event.clientX, event.clientY)
        return array 
    }
    
    render() {
        return (<button onClick ={event => this.props.onReceiveCoordinates(this.coordinates(event))}>Click</button>)
      }


}