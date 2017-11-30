export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_LIST1":
		console.log("reducer GET_LIST1");
			newS = [...state];
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}