// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleClick = (event) => {
        let x = event.clientX
        let y = event.clientY
        let answer = [x, y]
        return answer
    }

    finalClick = (event) => {
        let a = this.handleClick(event)
        return this.props.onReceiveCoordinates(a)
    }
    render() {
        return (
            <button
            onClick={this.finalClick}>
            </button>
        )
    }
}