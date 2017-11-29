

import React from 'react';
import axios from 'axios';
import '../css/Detail_two.css';
class Detail_two extends React.Component {
	constructor(){
		super();
		this.state = {
			list2_title_one:[],
			list2_img_one:[],
			list2_title_two:[],
			list2_img_two:[],
		}
	}
	componentDidMount(){
		var that = this;
		axios.get("/v3/goods/category/main.html?do=getChildren&owner=5&pet_type=dog&system=wap&isWeb=1&version=303&_=1511853932611")
		.then(function(res){
			console.log(res);
			that.setState({
				list2_title_one:res.data.cate_list[0].title,
				list2_img_one:res.data.cate_list[0].list,
				list2_title_two:res.data.cate_list[1].title,
				list2_img_two:res.data.cate_list[1].list,
			})
		})
	}
	render(){
		return(
				<div className="detail_two">
					<h6>{this.state.list2_title_one}</h6>
					<ul className="ul_one">
						{
							this.state.list2_img_one.map((item,index)=>{
								return(
									<li key={item.name}>
										<div><img src={item.photo}/></div>
										<p>{item.name}</p>
									</li>

								)
							})
						}
					</ul>	
					<h6>{this.state.list2_title_two}</h6>
					<ul className="ul_two">
						{
							this.state.list2_img_two.map((item,index)=>{
								return(
									<li key={item.name}>
										<div><img src={item.logo}/></div>
										<p>{item.name}</p>
									</li>
								)
							})
						}
					</ul>
				</div>	

			)
	}
}

export default Detail_two;