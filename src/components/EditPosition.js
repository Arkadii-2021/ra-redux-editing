import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPosition, editMode } from "../redux/actions";


export default function EditPosition() {
	const dispatch = useDispatch();
	const editItem = useSelector(state => state.editItem);
	
	const [state, setState] = useState({
		name: editItem.name,
		price: editItem.price
	});
	
	const save = (evt) => {
		evt.preventDefault();
	
		dispatch(editPosition({
			id: editItem.id,
			name: evt.target.elements.name.value,
			price: evt.target.elements.price.value
		}));
		dispatch(editMode(false));
	};

	const cancel = () => {
		dispatch(editMode(false));
	};

	const onChange = (evt) => {
		const name = evt.target.name;
		
		setState(prevState => ({...prevState, [name]: evt.target.value}));
	};

	return (
		<form onSubmit={save}>
			<input type="text" name="name" value={state.name} onChange={onChange}/>
			<input type="text" name="price" value={state.price} onChange={onChange}/>
			<button type="submit">save</button>
			<button onClick={cancel} >cancel</button>
		</form>
	)
};
