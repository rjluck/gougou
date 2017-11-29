export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_USER":
		console.log("reducer GET_USER");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}