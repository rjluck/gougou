import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch
}from 'react-router-dom'

import Main from './components/Main';
import Category from './components/Category';
import Cart from './components/Cart';
import User from './components/Login';
import Goods from './components/goods';

// ==========================================
class App extends Component {
  constructor(){
    super();
    this.changeCategory = this.changeCategory.bind(this);
  }
  componentDidMount(){

  }

  changeCategory(){
    //document.getElementById("App-header").style.display = "none";
  }


  render() {
    //var headerArr =["首页","服饰城","狗狗主粮","医疗保健","零食玩具","日用外出","美容香波"]
    var headerArr = [
      {
        name:"首页",
        url:"http://localhost:3000/main"
      },
      {
        name:"服饰城",
        url:"https://wap.epet.com/clothmall/main.html?pet_type=dog&fw=0"
      },
      {
        name:"狗狗主粮",
        url:"https://wap.epet.com/main.html?menu_param=123&pet_type=dog&is_single=1&fw=0"
      },
      {
        name:"医疗保健",
        url:"https://wap.epet.com/main.html?menu_param=125&pet_type=dog&is_single=1&fw=0"
      },
      {
        name:"零食玩具",
        url:"https://wap.epet.com/main.html?menu_param=131&pet_type=dog&is_single=1&fw=0"
      },
      {
        name:"日用外出",
        url:"https://wap.epet.com/main.html?menu_param=134&pet_type=dog&is_single=1&fw=0"
      },
      {
        name:"美容香波",
        url:"https://wap.epet.com/main.html?menu_param=140&pet_type=dog&is_single=1&fw=0"
      }
    ]
    return (
      
      <div className="App">
        <header className="App-header" id="App-header">
          <div className="one-header">
            <span><a>狗狗站</a></span>
            <span>定位</span>
            <div><input placeholder="搜索商品和品牌"/><i className="iconfont icon-search"></i></div>
            <span><i className="iconfont xiaoxi icon-buchongiconsvg02"></i></span>
          </div>
          <div className="two-header"> 
              {
                 headerArr.map(function(item,index){
                    return (
                      <div key={index}>
                          <a href={item.url}>
                            <p>{item.name}</p>
                          </a>
                      </div>
                      );
                 })       
              }
          </div>
        </header>

        <Router>
          <div>
            <Switch>
                    <Redirect exact from="/" to="/main"/>
                    <Route exact path="/main" component={Main}/>  
                    <Route exact path="/category" component={Category}/> 
                    <Route path="/cart" component={Cart}/> 
                    <Route exact path="/user" component={User}/> 
                    <Route exact path="/goods" component={Goods}/> 
            </Switch>                    
            <footer className="App-footer">
                <ul>
                  <li>
                    <NavLink activeClassName="active" className="empty" to="/main">
                      <div>
                        <i className="iconfont">&#xe700;</i>
                      </div>
                      <p>首页</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" className="empty" to="/category">
                      <div>
                        <i className="iconfont">&#xe606;</i>
                      </div>
                      <p>分类</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" className="empty" to="/cart">
                      <div>
                        <i className="iconfont">&#xe64a;</i>
                      </div>
                      <p>购物车</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active" className="empty" to="/user">
                      <div>
                        <i className="iconfont">&#xe7bf;</i>
                      </div>
                      <p>我的E宠</p>
                    </NavLink>
                  </li>     
                </ul>        
            </footer>
          </div>
        </Router>
                 
      </div>
     
    );
  }
}

export default App;
