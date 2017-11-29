export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_MENU":
		console.log("reducer GET_MENU");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}