import React,{Component} from 'react';
import axios from 'axios';
import '../css/info.css';


class Info extends Component {
	constructor(){
		super();
		this.state = {
			info:[]
		}
	}
	componemtDidMount(){
		var that =this;
		axios.get("/v3/goods/list/main.html?version=355&brandid=0&page=1&orderby=def_desc&cateid=7&pet_type=dog&extend_pam=&real_wid=&region=&system=wap&isWeb=1&_=1512022842542")
		.then(function(res){
			console.log(res);
			that.setSate({
				info:res.data
			})
		})
	}
	render () {
		return (
			<div className="info">
				<h2>商品详情</h2>
			</div>
		)
	}
}


export default Info;