import React from 'react';
import IconMenuItem from './IconMenuItem.js';
import ImageIntro from '../images/image_intro_2.png';
import TeamIcon from '../icons/team_4.svg';
import SponsorIcon from '../icons/partnership.svg';
import ArticleIcon from '../icons/article.png';
import RobotIcon from '../icons/robot.png';

export default function Background() {
	return (
		<React.Fragment>
			<div id="introSection" style={sectionStyle}>
				<div style={backgroundContainerStyle}>
					<img src={ImageIntro} alt="imageIntro" style={backgroundImgStyle} />
				</div>
				<div style={textContainerStyle}>
					<h1 style={titleStyle}>PoulpyBot</h1>
					<span style={subtitleStyle}>Construit par le club robotique de l'IMT Atlantique</span>
				</div>
				<div style={{ height: '70vh', backgroundColor: 'transparent' }} />
				<div style={iconsMenuContainer}>
					<IconMenuItem icon={RobotIcon} linkTo="robotSection" text="Robot" />
					<IconMenuItem icon={ArticleIcon} linkTo="articlesSection" text="Articles" />
					<IconMenuItem icon={SponsorIcon} linkTo="sponsorsSection" text="Sponsors" />
					<IconMenuItem icon={TeamIcon} linkTo="teamSection" text="Equipe" />
				</div>
			</div>
		</React.Fragment>
	);
}

const sectionStyle = {
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column'
};

const backgroundContainerStyle = {
	position: 'absolute'
};

const backgroundImgStyle = {
	objectFit: 'cover',
	width: '100%',
	height: '100vh'
	// transform: 'translateY(-20%)'
};

const textContainerStyle = {
	position: 'absolute',
	top: '20%',
	left: '10%',
	width: '80%',
	flex: '1',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-end',
	textAlign: 'justify',
	color: 'black'
};

const titleStyle = {
	fontWeight: '300',
	fontSize: '80px',
	color: '#02B8DF'
};

const subtitleStyle = {
	fontWeight: '300',
	paddingLeft: '1vw',
	color: '#A4D233'
};

const iconsMenuContainer = {
	position: 'absolute',
	width: '100%',
	top: '75%',
	//backgroundColor: 'red',
	padding: '10px',
	display: 'flex',
	justifyContent: 'space-evenly'
};
