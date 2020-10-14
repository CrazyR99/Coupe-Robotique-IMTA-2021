import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../App.css';

export class IconMenuItem extends Component {
	render() {
		return (
			<div style={iconMenuItem}>
				<Link
					to={this.props.linkTo}
					className="iconButton"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<button>
						<img src={this.props.icon} alt="icon" />
						<span>{this.props.text}</span>
					</button>
				</Link>
			</div>
		);
	}
}

export default IconMenuItem;

const iconMenuItem = {
	flex: '1',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center'
};
