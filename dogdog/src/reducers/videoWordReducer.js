export default function(state=[],action) {
	// console.log(state);
	let newS;
	switch(action.type) {
		case "GET_VIDEO_WORD":
		console.log("reducer GET_VIDEO_WORD");
			newS = "";
			newS = action.payload;
			return newS;
		default :
			return state;
	}
}