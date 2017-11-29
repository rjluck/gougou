export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_FIRE_SIMG":
		console.log("reducer GET_FIRE_SIMG");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}