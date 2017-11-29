
// import React from 'react';
 import '../css/Login.css';
// class Login extends React.Component {
// 	render(){
// 		return(
// 				<div className="login">
// 					我是登录页
// 				</div>	

// 			)
// 	}
// }

// export default Login;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'



const Login = (props) => (
  <div className="all">
    <div className="login">
      <p className="p">
        <i className="iconfont">&#xe64b;</i>
        <input type="text" placeholder="请输入用户名"/>
      </p>
      <hr/>
      <p className="p">
        <i className="iconfont">&#xe622;</i>
        <input type="password" placeholder="请输入密码"/>
      </p>
      <hr/>
      <button>登录</button>
    </div>  
  </div>    
)

const Regist = (props) => (
  <div className="all">
    <div className="regist">
      <p className="p">
        <i className="iconfont">&#xe528;</i>
        <input type="text" placeholder="请输入用户名"/>
      </p>
      <hr/>
      <p className="p">
        <i className="iconfont">&#xe6b2;</i>
        <input type="password" placeholder="请输入密码"/>
      </p>
      <hr/>
      <p className="p">
        <i className="iconfont">&#xe614;</i>
        <input type="password" placeholder="请确认密码"/>
      </p>
      <hr/>
      <button>注册</button>
    </div>  
  </div>  
)

class User extends React.Component{
	componentDidMount(){
		document.getElementById("App-header").style.display = "none";
	}
	render(){
		return(
				<Router>
				    <div className="user">
				      <ul>
				        <li><NavLink activeClassName="active" to="/login">登录</NavLink></li>
				        <li><NavLink activeClassName="active" to="/regist">注册</NavLink></li>
				      </ul>

				      <Switch>
				        <Redirect exact from="/user" to="/login"  component={Login}/>
				        <Route path="/login" component={Login}/>
				        <Route path="/regist" component={Regist}/>
				      </Switch>
				    </div>
			  </Router>

			)
	}
}
// const User = () => (
//   <Router>
//     <div className="user">
//       <ul>
//         <li><NavLink activeClassName="active" to="/login">登录</NavLink></li>
//         <li><NavLink activeClassName="active" to="/regist">注册</NavLink></li>
//       </ul>

//       <Switch>
//         <Redirect exact from="/user" to="/login"  component={Login}/>
//         <Route path="/login" component={Login}/>
//         <Route path="/regist" component={Regist}/>
//       </Switch>
//     </div>
//   </Router>
// )
export default User;