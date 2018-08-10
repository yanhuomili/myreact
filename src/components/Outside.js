import React from 'react';


class Outside extends React.Component{
	constructor(props){
		super(props);
		this.state={
			date:new Date(),
			counter:100,
			wrapStyle:{
				display:'flex',
				justifyContent:'space-between',
				alignItems:'center'
			}
		};
		
	}
	componentDidMount(){
	}
	componentWillUnmount(){
	}
	render(){
		return(
			<div className="wrap" style={this.state.wrapStyle}>
				<div className="left">
					{this.props.left}
				</div>
				<div className="right">
					{this.props.right}
				</div>
			</div>
		)
	}
}

export default Outside;