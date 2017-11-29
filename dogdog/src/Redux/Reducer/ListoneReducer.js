

const reducer = (state={},info)=>{
	let {type,payload}=info;
	switch(type){
		case "LIST_ONE":
			return Object.assign(payload);
		default:
			return state
	}
}

export default reducer;
//================================================
//  import {combineReducers} from 'redux';
// const reducers =(state=[],action)=>{
// 	let newS;
// 	switch(action.type){
// 		case "LIST_ONE":
// 			newS = [...state];
// 	 		newS = (action.payload);
// 			return newS;
// 		case "LIST_TWO":
// 			newS = [...state];
// 	 		newS = (action.payload);
// 			return newS;
// 		default:
// 			return state
// 	}
// }



// export default reducers;