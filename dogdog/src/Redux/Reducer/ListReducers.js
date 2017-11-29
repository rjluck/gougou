
export default function(state=[],action){
	let newS;
	switch(action.type){
		case "LIST_ONE":
			newS = [...state];
	 		newS = (action.payload);
			return newS;
		case "LIST_TWO":
			newS = [...state];
	 		newS = (action.payload);
			return newS;
		default:
			return state
	}
}