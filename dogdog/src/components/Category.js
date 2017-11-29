
import React,{Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch
}from 'react-router-dom';
import Categorymain from './Categorymain';
import Categorybrand from './Categorybrand';
import '../css/Category.css';

class Category extends Component {
	componentDidMount(){
		document.getElementById("App-header").style.display = "none";		
	}
	render(){
		return(
				<Router>
					<div className="category">
						<div className="category-header">
							<ul>
								<li><NavLink activeClassName="active " className="empty" to="/category/fenlei">分类</NavLink></li>
								<li><NavLink activeClassName="active " className="empty" to="/category/pinpai">品牌</NavLink><i className="iconfont icon-search"></i></li>
							</ul>
						</div>
						<Switch>
							<Redirect exact from="/category" to="/category/fenlei" />
							<Route path="/category/fenlei" component={Categorymain}/>
							<Route path="/category/pinpai" component={Categorybrand}/>
						</Switch>
					</div>	
				</Router>
			)
	}
}

export default Category;