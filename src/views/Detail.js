import React from 'react'
 
export default class Detail extends React.Component {
    render() {
        return (
            <p>Detail，url参数：{this.props.params.id}</p>
        )
    }
}
 
