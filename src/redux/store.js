import { combineReducers, compose, legacy_createStore } from "redux";
import { formReducer } from "./formReducer";
import { positionReducer } from "./positionReducer";
import { crudReducer } from "./crudReducer";


const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export function configureStore() {
	return legacy_createStore(
		combineReducers({
			item: crudReducer,
			form: formReducer, 
			editItem: positionReducer
		}),
		undefined,
		compose(
			ReactReduxDevTools
		)
	)
};
