import React from 'react';
// import { Link } from 'react-router-dom';
import '../pages/Home';
import LogoFacebook from '../images/facebook_logo.png';
import LogoLinkedin from '../images/linkedIn_logo.png';
import LogoYoutube from '../images/youtube_logo.png';

export default function header() {
	return (
		<header style={headerStyle}>
			<div style={titleContainerStyle}>
				<h6 style={titleStyle}>Club robotique de l'IMT Atlantique</h6>
			</div>
			{/* <div style={linkContainerStyle}>
				<a href="#introSection" style={linkStyle}>
					Accueil
				</a>
				<a href="#robotSection" style={linkStyle}>
					Robot
				</a>
				<a href="#articlesSection" style={linkStyle}>
					Articles
				</a>
				<a href="#sponsorsSection" style={linkStyle}>
					Sponsors
				</a>
				<a href="#teamSection" style={linkStyle}>
					Equipe
				</a>
			</div> */}
			<div style={networkContainerStyle}>
				<div style={networkItemStyle}>
					<a href="https://www.linkedin.com/school/imt-atlantique/">
						<img src={LogoLinkedin} alt="linkedIn_logo" style={logoStyle} />
					</a>
				</div>
				<div style={networkItemStyle}>
					<a href="https://www.youtube.com/c/IMTAtlantique/videos">
						<img src={LogoYoutube} alt="youtube_logo" style={logoStyle} />
					</a>
				</div>
				<div style={networkItemStyle}>
					<a href="https://www.facebook.com/IMTAtlantique">
						<img src={LogoFacebook} alt="facebook_logo" style={logoStyle} />
					</a>
				</div>
			</div>
		</header>
	);
}

const headerStyle = {
	position: 'absolute',
	top: '0%',
	zIndex: '99',
	width: '100%',
	padding: '0vh',
	display: 'flex',
	backgroundColor: 'white',
	color: 'black'
};

const titleContainerStyle = {
	flex: '1',
	display: 'flex',
	alignItems: 'center',
	paddingLeft: '5vh',
	justifyContent: 'left'
};

const titleStyle = {
	fontWeight: 'normal',
	margin: 'auto 0 auto 0'
};

// const linkContainerStyle = {
// 	margin: '0 5vw 0 5vw',
// 	flex: 1,
// 	display: 'flex',
// 	alignItems: 'center'
// };

// const linkStyle = {
// 	flex: '1',
// 	textAlign: 'center',
// 	textDecoration: 'none',
// 	color: 'black'
// };

const networkContainerStyle = {
	flex: '1',
	margin: '0 3vw 0 3vw',
	display: 'flex',
	alignItems: 'center'
};

const networkItemStyle = {
	flex: '1',
	margin: '1vw',
	listStyle: 'none',
	display: 'flex',
	justifyContent: 'center'
};

const logoStyle = {
	flex: '1',
	height: '5vh'
};
