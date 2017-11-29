export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_VIDEO":
		console.log("reducer GET_VIDEO");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}