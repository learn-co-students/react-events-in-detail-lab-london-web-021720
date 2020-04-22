// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    handleClick = (event) => {
        event.persist()
        return setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }
    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}