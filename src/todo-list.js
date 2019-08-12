import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

class Counter extends Component {
    counterData = observable({
        count: 0,
    });

    handleInc = () => {
        this.counterData.count++;
    };

    handleDec = () => {
        this.counterData.count--;
    };

    render() {
        return (
            <div>
                Counter: {this.counterData.count}
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
            </div>
        )
    }
}

export default observer(Counter)