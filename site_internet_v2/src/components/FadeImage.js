import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function FadeImage(props) {
	const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500, delay: 1000 } });

	return (
		<animated.div style={animation}>
			<img src={props.src} style={props.style} alt={props.alt} />
		</animated.div>
	);
}
