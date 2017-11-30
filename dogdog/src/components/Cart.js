
import React from 'react';
import '../css/Cart.css';
import axios from 'axios';
import {createBrowserHistory} from 'history';
class Cart extends React.Component {
	componentDidMount(){
		var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message,callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
		console.log("ffffffffffffffffffffffffffff")
	    axios.post("/users/list")
	    .then(function(res){
	   	console.log("zzzzzzzzzzzzzzzzzzz")
	   	console.log(res)
	    if(res.data.code == 1){
	   		//history.push('/cart');
	   		console.log("已经已经登陆")
	    } else {
	    	console.log("还未登陆哦") 
	    	history.push('/user'); 

	    	
	    }  
	    })
  }
	render(){
		return(
				<div className="cart">
					我是购物车哦
				</div>	

			)
	}
}

export default Cart;