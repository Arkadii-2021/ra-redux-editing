import { EDIT_DATA } from "./actions";

export const positionReducer = (state=null, action) => {
	switch (action.type) {
		case EDIT_DATA:
			return action.payload
		
		default:
			return state
	}
};
