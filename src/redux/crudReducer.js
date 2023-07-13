import { SAVE_POSITION, EDIT_POSITION, REMOVE_POSITION } from "./actions";


const initialState = [];

export const crudReducer = (state=initialState, action) => {
	switch (action.type) {
		case SAVE_POSITION:
			return [...state, action.payload]
			
		case REMOVE_POSITION:
			return state.filter(position => position.id !== action.payload)
			
		case EDIT_POSITION:
			return state.map(position => {
				if (position.id === action.payload.id) {
					position = {
						...position,
						name: action.payload.name,
						price: action.payload.price
					}
				}
				return position
			})

		default: 
			return state
	}
};
