import React from "react";

import { Lista } from "./lista.jsx";
import { Footer } from "./footer.jsx";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lista: [],
			itemselected: null
		};

		this.nextPrevious = this.nextPrevious.bind(this);

		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(function(response) {
				return response.json();
			})
			.then(data => {
				this.setState({ lista: data });
			});
	}

	nextPrevious(val) {
		if (
			val !== -1 &&
			this.state.itemselected < this.state.lista.length - 1
		) {
			this.setState({ itemselected: this.state.itemselected + val });
		} else if (val !== -1) {
			this.setState({ itemselected: 0 });
		}

		if (this.state.itemselected > 0 && val === -1)
			this.setState({ itemselected: this.state.itemselected + val });
	}
	render() {
		return (
			<div className="text">
				<div id="header" className="text-center">
					<h1>Reproductor de música</h1>
				</div>
				<Lista
					onplay={this.nextPrevious}
					lt={this.state.lista}
					selected={this.state.itemselected}
				/>

				<Footer onplay={this.nextPrevious} />
			</div>
		);
	}
}
