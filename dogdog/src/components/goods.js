import React, { Component } from 'react';
import axios from 'axios';
import '../css/goods.css';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import Info from './Info.js';

class AppUI extends Component {
	componentDidMount(){
		this.props.getData();
	}
	render(){
		var props = this.props;
		return (
			<div className="goodsList">
				<h2>商品列表</h2>
				<ul className="infolist">
					{props.goods1.map(
						(item,index)=>{
							var fid = props.goods1.gspid;
							return (
								<Router  key={item.gspid}>
									<li>
										<NavLink activeClassName="active" to="/info/:fid">
											<div className="img">
												<div className="small">
													<img src={item.country_photo}/>
												</div>
												<img src={item.photo}/>
											</div>
											<div className="other">
												<p>{item.subject}</p>
												<p>
													<span>￥{item.sale_price}</span>
													<span>{item.dprice}</span>
												</p>
												<p>
													<span>{item.comments}</span>
													<span>{item.sold}</span>
												</p>
												<div className="add">
													<i className="iconfont">&#xe512;</i>
												</div>
											</div>
										</NavLink>
							      <Switch>
							        <Route path="/info" component={Info}/>
							      </Switch>
									</li>
								</Router>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

const mapStateToprops = (state)=>{
	return {
		goods1:state.goods1
	}
}

const mapDispatchProps = (dispatch)=>{
	return {
		getData:function(){
			axios.get("/v3/goods/list/main.html?version=355&brandid=0&page=1&orderby=def_desc&cateid=7&pet_type=dog&extend_pam=&real_wid=&region=&system=wap&isWeb=1&_=1512022842542")
			.then(function(res){
				console.log("获得的数据。。。。。。。。。");
				console.log(res);
				var goods1 = res.data.list
				console.log(goods1);
				dispatch({
					type:"GET_LIST1",
					payload:goods1
				})
			})
		}
	}
}

const Goods = connect(mapStateToprops,mapDispatchProps)(AppUI);


export default Goods;