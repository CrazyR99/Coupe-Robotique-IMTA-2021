import React, { Component } from 'react'; // ES6

import RobotComponentItem from './RobotComponentItem';
import FadeImage from './FadeImage';

import ImageBackground from '../images/robotSection_background_2.png';
import RobotImg from '../icons/robot.png';
import RobotSentence from '../icons/robotSentence.png';
import Image1 from '../images/code.jpg';
import Image2 from '../images/robotArm.jpg';
import Image3 from '../images/robotBaseRoulante.jpg';
import Image4 from '../images/carteElec.jpg';

export class RobotSection extends Component {
	state = {
		hoverRobot: false,
		grayscale: 'grayscale(100%)'
	};

	setIsShownComponents = (bool) => {
		this.setState({ hoverRobot: bool, grayscale: !bool ? 'grayscale(100%)' : 'grayscale(0%)' });
	};

	render() {
		return (
			<React.Fragment>
				<div id="robotSection" style={robotSection}>
					<div style={robotImgContainer}>
						<img
							src={ImageBackground}
							style={{
								objectFit: 'cover',
								position: 'absolute',
								top: '0%',
								left: '0%',
								height: '100%',
								width: '100%'
							}}
							alt="ImageBackground"
						/>
						{!this.state.hoverRobot && (
							<FadeImage
								src={RobotSentence}
								style={{
									position: 'absolute',
									top: '0%',
									left: '5%',
									width: '50%',
									objectFit: 'cover',
									margin: '20vw'
								}}
								alt="robotIMG"
							/>
						)}
						<img
							src={RobotImg}
							onMouseEnter={() => this.setIsShownComponents(true)}
							style={{ ...robotImg, filter: this.state.grayscale }}
							alt="robotIMG"
						/>
					</div>
					{this.state.hoverRobot && (
						<div
							style={{ ...robotComponentsContainer }}
							onMouseLeave={() => this.setIsShownComponents(false)}
						>
							<RobotComponentItem
								image={Image1}
								title="IA"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum magna eu auctor imperdiet. Duis quis nunc porta, ullamcorper odio quis, lacinia dolor. Proin dignissim ante non dolor aliquam, nec pellentesque justo vehicula. Aliquam a libero ex. Praesent sollicitudin justo eget tellus ullamcorper molestie. Vivamus scelerisque condimentum turpis, quis vehicula enim posuere eget. Vivamus sed arcu vestibulum, posuere diam et, pharetra nisi. Maecenas blandit nulla odio, vitae dictum sapien lacinia quis. Morbi nec odio pretium eros posuere faucibus eu quis erat. Nulla egestas turpis lectus, sit amet ultrices libero ultricies at. Mauris viverra euismod odio in euismod. Maecenas eget est vel felis efficitur ullamcorper."
							/>
							<RobotComponentItem
								image={Image2}
								title="Bras du robot"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum magna eu auctor imperdiet. Duis quis nunc porta, ullamcorper odio quis, lacinia dolor. Proin dignissim ante non dolor aliquam, nec pellentesque justo vehicula. Aliquam a libero ex. Praesent sollicitudin justo eget tellus ullamcorper molestie. Vivamus scelerisque condimentum turpis, quis vehicula enim posuere eget. Vivamus sed arcu vestibulum, posuere diam et, pharetra nisi. Maecenas blandit nulla odio, vitae dictum sapien lacinia quis. Morbi nec odio pretium eros posuere faucibus eu quis erat. Nulla egestas turpis lectus, sit amet ultrices libero ultricies at. Mauris viverra euismod odio in euismod. Maecenas eget est vel felis efficitur ullamcorper."
							/>
							<RobotComponentItem
								image={Image3}
								title="Base roulante"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum magna eu auctor imperdiet. Duis quis nunc porta, ullamcorper odio quis, lacinia dolor. Proin dignissim ante non dolor aliquam, nec pellentesque justo vehicula. Aliquam a libero ex. Praesent sollicitudin justo eget tellus ullamcorper molestie. Vivamus scelerisque condimentum turpis, quis vehicula enim posuere eget. Vivamus sed arcu vestibulum, posuere diam et, pharetra nisi. Maecenas blandit nulla odio, vitae dictum sapien lacinia quis. Morbi nec odio pretium eros posuere faucibus eu quis erat. Nulla egestas turpis lectus, sit amet ultrices libero ultricies at. Mauris viverra euismod odio in euismod. Maecenas eget est vel felis efficitur ullamcorper."
							/>
							<RobotComponentItem
								image={Image4}
								title="Electronique"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum magna eu auctor imperdiet. Duis quis nunc porta, ullamcorper odio quis, lacinia dolor. Proin dignissim ante non dolor aliquam, nec pellentesque justo vehicula. Aliquam a libero ex. Praesent sollicitudin justo eget tellus ullamcorper molestie. Vivamus scelerisque condimentum turpis, quis vehicula enim posuere eget. Vivamus sed arcu vestibulum, posuere diam et, pharetra nisi. Maecenas blandit nulla odio, vitae dictum sapien lacinia quis. Morbi nec odio pretium eros posuere faucibus eu quis erat. Nulla egestas turpis lectus, sit amet ultrices libero ultricies at. Mauris viverra euismod odio in euismod. Maecenas eget est vel felis efficitur ullamcorper."
							/>
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default RobotSection;

var robotSection = {
	position: 'relative'
};

const robotImgContainer = {
	display: 'grid',
	width: '100%',
	placeItems: 'center'
};

var robotImg = {
	margin: '20vw',
	width: '20%'
};

const robotComponentsContainer = {
	position: 'absolute',
	height: '100%',
	width: '100%',
	display: 'grid',
	gridTemplate: '1fr 1fr / 1fr 1fr',
	placeItems: 'center',
	top: '0%',
	left: '0%',
	padding: '8% 5% 8% 5%'
};
