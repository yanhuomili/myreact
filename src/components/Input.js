import React from 'react';

class Input extends React.Component{
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
			<div className="search">
				<input value={n} onChange={this.change}/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
				<input id="check" type="checkbox"/><label htmlFor="check">是否过滤数据</label>
			</div>
		)
	}
}

export default Input;