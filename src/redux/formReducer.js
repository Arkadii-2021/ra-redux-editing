import { EDIT_MODE } from './actions';


export const formReducer = (state=false, action) => {
	switch (action.type) {
		case EDIT_MODE: 
			return action.payload
			
		default:
			return state
	}
};
