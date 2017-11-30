
import React from 'react';
import '../css/Categorymain.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch
}from 'react-router-dom';
import Detail from './Detail';
import Detail_one from './Detail_one';
import Detail_two from './Detail_two';
class Categorymain extends React.Component {
	constructor() {
		super();
		this.state = {
			list:[]
		}
		this.change = this.change.bind(this);
	}
	componentDidMount(){
		document.getElementById("App-header").style.display = "none";		
		var that = this;
		axios.get('/v3/goods/category/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1511673356969')
		.then(function(res){
			//console.log(res);
			that.setState({
				list:res.data.categorys
			})

		})
	}
	change () {
		console.log("aaaa")
	}
	render(){
		return(
				<Router>
					<div className="categorymain">	
						<ul className="category-aside" id="leftList">
							{
								//console.log(this.state.list)
				                 // this.state.list.map(function(item,index){
				                 //    return (
				                 //      <li key={item.cateid} >
				                 //      	<NavLink to={"/detail/" +item.cateid } activeClassName="active" className="empty" onClick={()=>this.change()}>
				                 //      		<p >{item.name}</p>
				                 //      	</NavLink>
				                 //      </li>
				                 //      );
				                 // })       
				            }
				            <li><NavLink activeClassName="active" className="empty" to="/detail_one">为您推荐</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_two">狗狗主粮</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_three">狗狗零食</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_four">狗狗服饰</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_five">狗狗窝垫</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_six">狗狗生活</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_seven">狗狗玩具</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_eight">狗狗保健</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_nine">狗狗医疗</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_ten">狗狗牵引</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_eleven">狗狗美容</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_twelve">狗狗周边</NavLink></li>
				            <li><NavLink activeClassName="active" className="empty" to="/detail_thirteen">狗狗清洁</NavLink></li>

				           
						</ul>
						<div className="category-content">
							<Switch>
								<Redirect exact from="/category/fenlei" to="/detail_one"/>
								<Route exact path="/detail/:fid" component={Detail}/>
								<Route exact path="/detail_one" component={Detail_one}/>
								<Route exact path="/detail_two" component={Detail_two}/>
							</Switch>
						</div>
					</div>
				</Router>	

			)
	}

}

export default Categorymain;




