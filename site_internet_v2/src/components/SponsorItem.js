import React, { useState } from 'react';

export default function SponsorItem(props) {
	const [ hover, setHover ] = useState(false);

	console.log(props.link);

	return (
		<div style={{ ...container, width: hover ? 'calc(30% + 20vw)' : '30%' }}>
			<a href={props.link}>
				<img
					src={props.image}
					alt="sponsorItemImage"
					style={{ ...image, width: '100%' }}
					onMouseEnter={() => {
						setHover(true);
						props.setHover(true);
					}}
					onMouseLeave={() => {
						setHover(false);
						props.setHover(false);
					}}
					onClick={props.onClick}
				/>
			</a>
		</div>
	);
}

const container = {
	margin: 'auto',
	display: 'grid',
	placeItems: 'center'
};

const image = {
	width: '100%',
	padding: '0.5vw'
};
