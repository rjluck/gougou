
// import React from 'react';
import '../css/Login.css';
import axios from 'axios';
import React from 'react';
import {createBrowserHistory} from 'history';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

class Login extends React.Component{
	constructor(){
		super();
		this.login = this.login.bind(this);
	}
	login(){
		 var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message,callback) => callback(window.confirm(message)) // 跳转拦截函数
	        })
			console.log("调用login函数")
			var that = this;
			axios.post("/users/login",{
				    username: document.querySelector('#username').value,
				    psw: document.querySelector('#password').value
			})
			.then(function(res){
				console.log("登陆成功hou")
				console.log(res);
				if(res.data.code==1){
				    //alert('ok');
				    history.push('/main');
				}
			})
	}
	render(){
		return(
			<div className="all">
			    <div className="login">
			      <p className="p">
			        <i className="iconfont">&#xe64b;</i>
			        <input type="text" placeholder="请输入用户名" id="username"/>
			      </p>
			      <hr/>
			      <p className="p">
			        <i className="iconfont">&#xe622;</i>
			        <input type="password" placeholder="请输入密码" id="password"/>
			      </p>
			      <hr/>
			      <button onClick={this.login}>登录</button>
			    </div>  
		  	</div> 

		)
	}
}

class Regist extends React.Component{
	regist(){
		var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message,callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
		console.log("我要注册喽！");
		axios.post('/users/regist', {
		    username: document.querySelector('#username_regist').value,
		    psw: document.querySelector('#password_regist').value
		})
		.then(function (res) {
			    console.log(res);
			  if(res.data.code !=1){
			  	alert(res.data.message);
			  	return;
			  }
			  else {
			  	//alert("success");
			  	//this.props.history.push('/login');
			  	history.push('/user');
			  }
		})

	}
	render(){
		return(
			 <div className="all">
			    <div className="regist">
			      <p className="p">
			        <i className="iconfont">&#xe528;</i>
			        <input type="text" placeholder="请输入用户名" id="username_regist"/>
			      </p>
			      <hr/>
			      <p className="p">
			        <i className="iconfont">&#xe6b2;</i>
			        <input type="password" placeholder="请输入密码" id="password_regist"/>
			      </p>
			      <hr/>
			      <p className="p">
			        <i className="iconfont">&#xe614;</i>
			        <input type="password" placeholder="请确认密码"/>
			      </p>
			      <hr/>
			      <button onClick={this.regist}>注册</button>
			    </div>  
			  </div>  
		)
	}
}



class User extends React.Component{
	componentDidMount(){
		document.getElementById("App-header").style.display = "none";
		document.getElementById("footer").style.display = "none";
	}
	retu(){
		//history.push('/user');
		window.history.go(-1);
	}
	render(){
		console.log('thislogin')
		return(
				<Router>
				    <div className="user">
				      <div className="retu" onClick={this.retu}>点我返回</div>
				      <ul>
				        <li><NavLink activeClassName="active" to="/user">登录</NavLink></li>
				        <li><NavLink activeClassName="active" to="/regist">注册</NavLink></li>
				      </ul>

				      <Switch>
				        <Route exact path="/user" component={Login}/>
				        <Route exact path="/regist" component={Regist}/>
				      </Switch>
				    </div>
			  </Router>
			)
	}
}

export default User;