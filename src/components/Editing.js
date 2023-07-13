import React from "react";
import { useSelector } from "react-redux";
import Positions from "./Positions";
import AddPosition from "./AddPosition";
import EditPosition from "./EditPosition";


export default function Editing() {
	return (
		<div className="general">
			{useSelector(state => state.form) ? <EditPosition /> : <AddPosition />}
			<Positions />
		</div>
	)
};
