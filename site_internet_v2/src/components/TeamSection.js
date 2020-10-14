import React, { Component } from 'react';
import ImageBackground from '../images/teamSection_background_2.png';

export class TeamSection extends Component {
	render() {
		return (
			<div
				id="teamSection"
				style={{ backgroundColor: 'yellow', position: 'relative', display: 'grid', placeItems: 'center' }}
			>
				<h1>Team Section</h1>
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
				<h1 style={title}>Team</h1>
				
				<div style={{ height: '80vh' }} />
			</div>
		);
	}
}

export default TeamSection;

const title = {
	position: 'relative',
	color: '#A4D233',
	fontWeight: '200',
	fontSize: '3.5rem'
};
