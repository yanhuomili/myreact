import React from 'react';

class Switch extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isOn:true,
			isOn2:true,
			isOn3:true,
		}
	}
	toggle(n,e){
		console.log(e)
		console.log(n,1111111)
		this.setState((prevState)=>({
			isOn:!prevState.isOn
		}))
	}
	toggle2 = ()=>{
		this.setState((prevState)=>({
			isOn2:!prevState.isOn2
		}))
	}
	toggle3(n,e){
		console.log(e)
		console.log(n,3333333333)
		this.setState((prevState)=>({
			isOn3:!prevState.isOn3
		}))
	}
	render(){
		return(
			<div>
				<button onClick={this.toggle.bind(this,123)}>点击切换 {this.state.isOn?'ON':'OFF'}</button>
				<button onClick={this.toggle2}>点击切换2 {this.state.isOn2?'ON':'OFF'}</button>
				<button onClick={(e)=>this.toggle3(456,e)}>点击切换3 {this.state.isOn3?'ON':'OFF'}</button>
			</div>
			
		)
	}
	
}

export default Switch;