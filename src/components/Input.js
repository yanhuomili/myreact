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
	checkoutChange=(e)=>{
		this.props.chChange(e.target.checked)
		console.log(e.target.checked,'9699999')
	}
	render(){
		const n=this.props.number;
		return(
			<div className="search">
				<input ref={this.props.inputRef	} value={n} onChange={this.change}/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
				<input id="check" onChange={this.checkoutChange}  type="checkbox"/><label htmlFor="check">是否过滤数据</label>
			</div>
		)
	}
}

export default Input;