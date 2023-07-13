import { SAVE_POSITION } from "./actions";

export const positionReducer = (state=null, action) => {
	switch (action.type) {
		case SAVE_POSITION:
			return action.payload
		
		default:
			return state
	}
};
