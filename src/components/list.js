import React, { Component } from 'react'

export default class list extends Component {

    arr = [1, 2, 3, 4, 5];
    newarr = (this.arr).map((num) => {
        <li>{num}</li>
    })
    render() {
        return (
            <div>
                <ul>{this.newarr}</ul>
            </div>
        )
    }
}
