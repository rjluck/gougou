export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_SURPRISE":
		console.log("reducer GET_SURPRISE");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}