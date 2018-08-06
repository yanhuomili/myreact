import React, { Component} from 'react';
import { Link } from "react-router-dom";
export default class Home extends Component {
//	constructor(){
//		super()
//	}
	render() {
	    return (
	    	<div>
	    		<h3>首页</h3>
	    		<ul>
	                <li><Link to="/User">其他页</Link></li>
	                <li><Link to="/Profile">其他页</Link></li>
    			</ul>
	    	</div>
	    );
	}
}


