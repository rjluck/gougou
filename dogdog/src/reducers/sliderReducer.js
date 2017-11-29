export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_DATA":
		console.log("reducer GET_DATA");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}