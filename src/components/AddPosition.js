import { savePosition } from "../redux/actions";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";


export default function AddPosition() {
	const dispatch = useDispatch();

	const onSubmit = (evt) => {
		evt.preventDefault();
		
		if (evt.target.elements.name.value && evt.target.elements.price.value) {
			dispatch(savePosition({
			id: nanoid(),
			name: evt.target.elements.name.value,
			price: evt.target.elements.price.value
			})
		)};
		
		evt.target.elements.name.value = "";
		evt.target.elements.price.value = "";
	};

	return (
		<form onSubmit={onSubmit}>
			<input type="text" name="name" />
			<input type="text" name="price" />
			<button>save</button>
		</form>
	)
};
