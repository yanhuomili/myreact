import React from 'react';

class Btn extends React.Component{
	constructor(props){
		super(props);
		this.state={
			date:new Date(),
			counter:100
		};
		
	}
	componentDidMount(){
		console.log('挂在');
		console.log(this.props,'btn')
	}
	componentWillUnmount(){
		console.log('卸载')
	}
	tick(){
		this.setState({
			date:new Date()
		})
	}
	aClick(){
		console.log('aa')
	}
	bClick(){
		console.log('bb')
	}
	cClick(){
		console.log('cc')
	}
	render(){
		const {optionArr} =this.props;
		return(
			<div>
				{optionArr.map((item)=>{return (<button key={item.val} onClick={item.handler}>{item.val}<span>{item.text}--{this.state.date.toLocaleTimeString()}</span></button>)})}
				<div>{this.state.counter}</div>
			</div>
		)
	}
}

export default Btn;