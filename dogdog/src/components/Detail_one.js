
import React from 'react';
import axios from 'axios';
import '../css/Detail_one.css';
import {connect} from 'react-redux';


// ===================2=================================


// class Detail_one extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			list1_title_one:[],
// 			list1_img_one:[],
			
// 		}
// 	}
// 	componentDidMount(){
// 		this.props.getComingsoon();
// 	}
// 	render(){

// 		return(
// 				<div className="detail_two">
// 					<h6>{this.props.list1_title_one}</h6>
// 					<ul className="ul_one">
// 						{
// 							this.props.list1_img_one.map((item,index)=>{
// 								return(
// 									<li key={item.name}>
// 										<div><img src={item.photo}/></div>
// 										<p>{item.name}</p>
// 									</li>
// 								)
// 							})
// 						}
// 					</ul>	
// 				</div>	
// 			)
// 	}
// }

// export default connect(
// 		(state)=>{
// 			console.log("返回来的")
// 			console.log(state);
// 			console.log("list");
// 			console.log(state.list)
// 			return{
// 				list1_title_one:state.title?state.title:'',
// 				list1_img_one:state.list?state.list:[]
// 			}
// 		},
// 		{
// 			getComingsoon:()=>{
// 				//异步action  借助redux-thunk 中间件实现
// 				return (dispatch)=>{
// 					var that = this;
// 					axios.get("/v3/goods/category/main.html?do=getChildren&owner=88888&pet_type=dog&system=wap&isWeb=1&version=303&_=1511858885869")
// 					.then(function(res){
// 						console.log("hhhhhhh")
// 						console.log(res.data.cate_list[0].title);
// 						dispatch({
// 							type:"LIST_ONE",
// 							payload:res.data.cate_list[0]
// 						})
// 					})
// 				}	
// 			}
// 		}

// 	)(Detail_one);


// ===========================1=================================
class Detail_one extends React.Component {
	constructor(){
		super();
		this.state = {
			list1_title_one:[],
			list1_img_one:[],
			
		}
	}
	componentDidMount(){
		var that = this;
		axios.get("/v3/goods/category/main.html?do=getChildren&owner=88888&pet_type=dog&system=wap&isWeb=1&version=303&_=1511858885869")
		.then(function(res){
			console.log(res);
			that.setState({
				list1_title_one:res.data.cate_list[0].title,
				list1_img_one:res.data.cate_list[0].list,
			})
		})
	}
	render(){

		return(
				<div className="detail_two">
					<h6>{this.state.list1_title_one}</h6>
					<ul className="ul_one">
						{
							this.state.list1_img_one.map((item,index)=>{
								return(
									<li key={item.name}>
										<div><img src={item.photo}/></div>
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

export default Detail_one;