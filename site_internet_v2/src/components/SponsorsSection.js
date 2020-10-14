import React, { Component } from 'react';
import SponsorItem from './SponsorItem';
import ImageBackground from '../images/sponsorSection_background_2.png';

import Image1 from '../images/nike.png';
import Image2 from '../images/leroyMerlin.png';
import Image3 from '../images/lydia.png';
import Image4 from '../images/sopra.png';
import Image5 from '../images/intermarche.png';

export class SponsorsSection extends Component {
	state = {
		hover: false
	};

	setHover = (bool) => {
		this.setState({ hover: bool });
	};

	render() {
		return (
			<div
				id="sponsorsSection"
				style={{
					backgroundColor: 'transparent',
					position: 'relative',
					display: 'grid',
					placeItems: 'center',
					padding: '20vh 0'
				}}
			>
				<img
					src={ImageBackground}
					alt="ImageBackground"
					style={{
						objectFit: 'cover',
						position: 'absolute',
						top: '0%',
						left: '0%',
						height: '100%',
						width: '100%'
					}}
				/>
				<h1 style={title}>Sponsors</h1>
				<div style={{ ...containerItems, width: this.state.hover ? 'calc(80% + 10vw)' : '80%' }}>
					<SponsorItem image={Image1} setHover={this.setHover} link="https://www.nike.com/fr" />
					<SponsorItem image={Image2} setHover={this.setHover} link="https://www.leroymerlin.fr/" />
					<SponsorItem image={Image3} setHover={this.setHover} link="https://lydia-app.com/fr" />
					<SponsorItem image={Image4} setHover={this.setHover} link="https://www.soprasteria.com/fr" />
					<SponsorItem image={Image5} setHover={this.setHover} link="https://www.intermarche.com/" />
				</div>
			</div>
		);
	}
}

export default SponsorsSection;

const title = {
	position: 'relative',
	color: 'white',
	fontWeight: '200',
	fontSize: '3.5rem'
};

const containerItems = {
	position: 'relative',
	display: 'flex',
	padding: '5vw',
	height: '80vh'
};
