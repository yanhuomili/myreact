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
			arr:[1,2,3,4,5,6,7,8,9]
		}
	}
	componentDidMount(){
	}
	componentWillUnmount(){
	}
	change(val){
		// if((val/2)==0){
		// 	let list=this.state.arr.map(item=>(item/2==0))
		// 	console.log(list,'list')
		// 	this.setState({
		// 		arr:list
		// 	})
		// }
		// console.log(val/2,'searchList')
	}
	render(){
		const n=this.props.number;
		return(
			<div className="list-wrap">
				<Input onOriginChange={this.change}/>
				<Ul arr={this.state.arr}/>
			</div>
		)
	}
}

export default SearchList;