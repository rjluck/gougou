export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_GOODS":
		console.log("reducer GET_GOODS");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}