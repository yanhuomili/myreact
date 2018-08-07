import React,{Component} from 'react';

function TipOne(props){
	return <h4>欢迎回来</h4>
}
function TipTwo(props){
	return <h4>请登录</h4>
}


class ShowTip extends React.Component{
	constructor(props){
		super(props);
		this.state={
		}
	}
	render(){
		return(
			<div>
				{this.props.login?<TipOne/>:<TipTwo/>}
			</div>
			
		)
	}
	
}

export default ShowTip;