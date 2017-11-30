export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_INFO":
		console.log("reducer GET_INFO");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}