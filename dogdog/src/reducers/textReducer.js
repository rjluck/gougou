export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_RTEXT":
		console.log("reducer GET_RTEXT");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}