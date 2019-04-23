import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"; // ES6

export class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			play: false
		};
		this.reproduce = this.reproduce.bind(this);
		this.forward = this.forward.bind(this);
		this.backward = this.backward.bind(this);
	}
	reproduce() {
		this.setState({ pause: !this.state.pause });
	}
	forward() {
		this.props.onplay(1);
	}
	backward() {
		this.props.onplay(-1);
	}
	render() {
		return (
			<footer className="footer mt-auto py-3">
				<div className="container">
					<span className="text-muted">
						<button type="button" onClick={this.backward}>
							<i className="fas fa-step-backward" />
						</button>
						&nbsp;
						<button type="button" onClick={this.reproduce}>
							<i
								className={
									this.state.pause
										? "fas fa-pause"
										: "fas fa-play"
								}
							/>
						</button>
						&nbsp;
						<button type="button" onClick={this.forward}>
							<i className="fas fa-step-forward" />
						</button>
					</span>
				</div>
			</footer>
		);
	}
}
Footer.propTypes = {
	onplay: PropTypes.func
};
