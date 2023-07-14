export const EDIT_DATA = "EDIT_DATA";
export const EDIT_MODE = "EDIT_MODE";
export const SAVE_POSITION = "SAVE_POSITION";
export const EDIT_POSITION = "EDIT_POSITION";
export const REMOVE_POSITION = "REMOVE_POSITION";


export const editData = (obj) => {
	return {
		type: EDIT_DATA,
		payload: obj
	}
};

export const editMode = (bool) => {
	return {
		type: EDIT_MODE,
		payload: bool
	}
};

export const savePosition = (obj) => {
	return {
		type: SAVE_POSITION,
		payload: obj
	}
};

export const editPosition = (obj) => {
	return {
		type: EDIT_POSITION,
		payload: obj
	}
};

export const removePosition = (id) => {
	return {
		type: REMOVE_POSITION,
		payload: id
	}
};
