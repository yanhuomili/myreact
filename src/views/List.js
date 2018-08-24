import React from 'react'
//import { hashHistory } from 'react-router'
import { HashRouter } from 'react-router-dom'
 
export default class List extends React.Component {
    render() {
        const arr = [1, 2, 3]
        return (
            <ul>
                {arr.map((item, index) => {
                    return <li key={index} onClick={this.clickHandler.bind(this, item)}>js jump to {item}</li>
                })}
            </ul>
        )
    }
    clickHandler(value) {
        HashRouter.push('/detail/' + value)
    }
}
 
