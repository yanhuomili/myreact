import React from 'react';

class Input3 extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
	}
	componentWillUnmount(){
	}
	change=(e)=>{
		this.props.onOriginChange(e.target.value)
	}
	render(){
		const n=this.props.number;
		return(
			<div>
				<input value={n} onChange={this.change}/>&nbsp;&nbsp;&nbsp;&nbsp;
				<span>这是input3的数据{n}</span>
			</div>
		)
	}
}

export default Input3;