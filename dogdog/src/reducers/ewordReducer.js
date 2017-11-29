export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_EWORD":
		console.log("reducer GET_EWORD");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}