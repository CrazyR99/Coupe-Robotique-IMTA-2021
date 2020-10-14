import React, { useState } from 'react';

import Flipcard from '@kennethormandy/react-flipcard';
import '@kennethormandy/react-flipcard/dist/Flipcard.css';

import { useSpring, animated } from 'react-spring';

export default function RobotComponentItem(props) {
	const [ flipped, setFlipped ] = useState(false);

	const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500, delay: 500 } });

	return (
		<animated.div style={animation}>
			<div style={item} onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
				<Flipcard flipped={flipped} style={{ position: 'relative' }}>
					<div style={{ position: 'relative', height: 'auto', width: 'auto' }}>
						<img src={props.image} style={image} alt="componentIMG" />
						<h3 style={titleFront}>{props.title}</h3>
					</div>
					<div style={backContainer}>
						<span style={{ fontSize: '0.6rem', textAlign: 'justify' }}>{props.text}</span>
					</div>
				</Flipcard>
			</div>
		</animated.div>
	);
}

const height = '20vw';
const width = '40vw';

const item = {
	position: 'relative',
	opacity: '1',
	height: height,
	width: width,
	backgroundColor: '#eee',
	borderRadius: '2vh'
};

const image = {
	objectFit: 'cover',
	width: width,
	height: height,
	filter: 'brightness(50%)',
	borderRadius: '2vh'
};

const titleFront = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	color: 'white',
	transform: 'translateX(-50%) translateY(-50%)'
};

const backContainer = {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	padding: '3vh',
	alignItems: 'center',
	width: width,
	height: height
};
