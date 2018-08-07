import React, { Component} from 'react';
import { Link } from "react-router-dom";
import Switch from '../components/Switch';
import ShowTip from '../components/ShowTip'
import Btn from '../components/Btn'

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			login:false,
			text:[
				{
					val:'按钮1',
					text:'额外的文字',
					handler:()=>{
						console.log(this.state)
						console.log('按钮1')
						this.setState({
							login:!this.state.login
						})
					}
				},
				{
					val:'按钮2',
					handler:()=>{
						console.log('按钮2')
						this.setState({
							login:!this.state.login
						})
					}
				}
			]
		}
	}
	
	
	render() {
	    return (
	    	<div>
	    		<h3>首页</h3>
	    		<ul>
	                <li><Link to="/User">用户</Link></li>
	                <li><Link to="/Profile">Profile</Link></li>
    			</ul>
    			<div>{new Date().toLocaleTimeString()}</div>
    			<Btn optionArr={this.state.text}/>
    			<Switch/>
    			<ShowTip login={this.state.login}/>
	    	</div>
	    );
	}
}


