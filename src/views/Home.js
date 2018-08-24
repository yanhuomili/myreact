import React, { Component} from 'react';
import { Link } from "react-router-dom";


import Switch from '../components/Switch';
import ShowTip from '../components/ShowTip'
import Btn from '../components/Btn'
import Input from '../components/Input'
import Input3 from '../components/Input3'
import Outside from '../components/Outside'
import SearchList from '../components/SearchList'

import List from './List'

class Left extends React.Component{
	render(){
		return <div>这是左边的图片</div>
	}
}
class Right extends React.Component{
	render(){
		return <div>这是右边的文字</div>
	}
}


export default class Home extends Component {
	constructor(props){
		super(props);
		this.state={
			login:false,
			el:null,
			dom:null,
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
			],
			number:888,
		}
	}

	change1(number){
		console.log(number,'number1')
		this.setState({
			number:number
		})
	}
	change3(number){
		console.log(number,'number2')
		this.setState({
			number:number
		})
	}
	getRef(){
		console.log(this.el.value)	
//		console.log(this.el.props.name)	
		this.setState({
//			dom:this.el.props.name
		})
	}
	goTo(){
	}
	render() {
	    return (
	    	<div>
	    		<h3>首页</h3>
	    		<ul>
	                <li><Link to="/User">用户</Link></li>
	                <li><Link to="/Profile">Profile</Link></li>
    			</ul>
    			<List/>
	    		{/* {
    			<div>{new Date().toLocaleTimeString()}</div>
    			<Btn optionArr={this.state.text}/>
    			<Switch/>
    			<ShowTip login={this.state.login}/>
    			<Input onOriginChange={this.change1.bind(this)} number={this.state.number}/>
    			<Input3 onOriginChange={this.change3.bind(this)} number={this.state.number}/>
				<Outside 
					left={<Input onOriginChange={this.change1.bind(this)} number={this.state.number}/>}
					right={<Input3 onOriginChange={this.change3.bind(this)} number={this.state.number}/>}
				/>

				<Outside		
					left={<Left/>}
					right={<Right/>}
				/>} */}

				<SearchList name={<List/>} inputRef={(el)=>{this.el=el}}><p>类似插槽</p></SearchList>
				<div onClick={this.getRef.bind(this)}>获取ref组件</div>
				{this.state.dom}
	    	</div>
	    );
	}
}


