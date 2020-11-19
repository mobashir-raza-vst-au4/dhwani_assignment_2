import React, { Component } from 'react'

export default class Boxes extends Component {
    render() {
        return (
            <div className={this.props.className} onClick={this.props.onClick} style={this.props.style}>
                {this.props.title}
            </div>
        )
    }
}
