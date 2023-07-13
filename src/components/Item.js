import { useDispatch } from "react-redux";
import { editMode, removePosition, editData } from "../redux/actions";


export default function Item({ name, price, id }) {
	const dispatch = useDispatch();

	const editPosition = () => {
		dispatch(editData({id, name, price}))
		dispatch(editMode(true))
	};

	const deletePosition = () => {
		dispatch(removePosition(id))
		dispatch(editMode(false))
	};

	return (
		<li>
			<span><b>{`${name} ${price} `}</b></span>
			<button onClick={editPosition}>&#x270E;</button>
			<button onClick={deletePosition} >&#x2717;</button>
		</li>
	)
};
