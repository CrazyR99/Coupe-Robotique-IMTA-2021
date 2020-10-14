import React, { useState } from 'react';

export default function ArticleBox(props) {
	const [ hover, setHover ] = useState(false);

	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				...articleBox,
				filter: 'brightness(100%)'
			}}
		>
			<img
				src={props.src}
				alt={props.alt}
				style={{ ...image, filter: hover ? 'brightness(100%)' : 'brightness(50%)' }}
			/>
			{hover ? <div /> : <h4 style={title}>{props.title}</h4>}
		</div>
	);
}

const articleBox = {
	height: '100%',
	width: '100%',
	padding: '5px'
};

const image = {
	objectFit: 'cover',
	width: '100%',
	height: '100%',
	borderRadius: '2vh'
};

const title = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	color: 'white',
	transform: 'translateX(-50%) translateY(-50%)'
};
