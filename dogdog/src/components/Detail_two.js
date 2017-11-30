import React from 'react';
import axios from 'axios';
import '../css/Detail_two.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import Goods from './goods.js';

class Detail_two extends React.Component {
	constructor(){
		super();
		this.state = {
			list2_title_one:[],
			list2_img_one:[],
			list2_title_two:[],
			list2_img_two:[],
		}
		this.hid = this.hid.bind(this);
	}
	hid(){
		document.getElementById("leftList").style.display = "none";
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
			<Router>
					<div className="detail_two">
						<h6>{this.state.list2_title_one}</h6>
						<ul className="ul_one">
							{
								this.state.list2_img_one.map((item,index)=>{
									return(
										<li key={item.name}>
											<Link onClick={this.hid} activeClassName="active" to="/goods">
												<div>
													<img src={item.photo}/>
												</div>
												<p>{item.name}</p>
											</Link>
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
											<NavLink onClick={this.hid} activeClassName="active" to="/goods">
												<div>
													<img src={item.logo}/>
												</div>
												<p>{item.name}</p>
											</NavLink>
										</li>
									)
								})
							}
						</ul>
			      <Switch>
			        <Route path="/goods" component={Goods}/>
			      </Switch>
					</div>	

			</Router>
		)
	}
}

export default Detail_two;