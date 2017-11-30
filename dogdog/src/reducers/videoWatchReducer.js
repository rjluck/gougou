export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_WATCH":
		console.log("reducer GET_WATCH");
			newS = "";
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}