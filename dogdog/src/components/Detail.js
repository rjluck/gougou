
import React from 'react';
import '../css/Login.css';
import {connect} from "react-redux";
// class Detail extends React.Component {
// 	render(){
// 		return(
// 				<div className="detail">
// 					我是详情页
// 				</div>	

// 			)
// 	}
// }

const Detail = (props)=>(
		<div className="detail">
		我是详情页
		{props.match.params.fid}
		</div>
)



//export default Detail;
export default connect(
		(state)=>{
			return {
				title:state
			}
		},
		null

)(Detail);