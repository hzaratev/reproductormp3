import ReactDOM from "react-dom";
import React from "react";
import PropTypes from "prop-types"; // ES6

export class Lista extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="lista" className="list-group">
				{this.props.lt.map((value, index) => {
					return (
						<button
							key={index}
							type="button"
							className={
								this.props.selected === index
									? "list-group-item list-group-item-action active"
									: "list-group-item list-group-item-action"
							}>
							{value.name}
						</button>
					);
				})}
			</div>
		);
	}
}
Lista.propTypes = {
	lt: PropTypes.array,
	selected: PropTypes.number
};
