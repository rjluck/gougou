export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_FIRE_LIMG":
		console.log("reducer GET_FIRE_LIMG");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}