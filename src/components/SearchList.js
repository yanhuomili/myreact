import React from 'react';
import Input from './Input'
import './style.css'


function Ul(props){
	return <ul>
		{props.arr.map(item=><Li key={item} val={item}/>)}
	</ul>
}
function Li(props){
	return <li>{props.val}</li>
}


class SearchList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			text:'',
			isfilter:false,
			arr:[1,2,3,4,5,6,7,8,9],
			originArr:[1,2,3,4,5,6,7,8,9],
			isSelect:false,
		}
	}
	componentDidMount(){
	}
	componentWillUnmount(){
	}
	change(val){
		if(!this.state.isSelect) return;	
		if(!val){
			this.setState({
		 		arr:this.state.originArr
		 	})
			return;
		}
		let evenArr=[];
		let oddArr=[];
	 	let list=this.state.originArr.map(item=>{if(item%2==0){
	 			evenArr.push(item)
	 		}else{
	 			oddArr.push(item);
	 		}
	 	})
		 if((val%2)==0){
		 	this.setState({
		 		arr:evenArr
		 	})
		 }else{
		 	this.setState({
		 		arr:oddArr
		 	})
		 }
		 
//		 console.log(val%2,'searchList')
	}
	cChange(val){
		this.setState({
			isSelect:val
		})
	}
	render(){
		const n=this.props.number;
		const name=this.props.name;
		return(
			<div className="list-wrap">
				<Input inputRef={this.props.inputRef} isSelect={this.state.isSelect} chChange={this.cChange.bind(this)} onOriginChange={this.change.bind(this)}/>
				<Ul arr={this.state.arr}/>
				<div>{this.props.name}</div>
				<div>{this.props.children}</div>
			</div>
		)
	}
}

export default SearchList;