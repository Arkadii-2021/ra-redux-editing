import { useSelector } from "react-redux";
import Item from "./Item";


export default function Positions() {
	return (
		<ul className="positions__item">
			{useSelector(state => state.item).map(({id, name, price}) => <Item key={id} id={id} name={name} price={price} />)}
		</ul>
	)
};
