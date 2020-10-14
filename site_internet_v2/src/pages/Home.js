import React from 'react';
import RobotSection from '../components/RobotSection';
import ArticlesSection from '../components/ArticlesSection';
import SponsorsSection from '../components/SponsorsSection';
import TeamSection from '../components/TeamSection';

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<RobotSection />
				<ArticlesSection />
				<SponsorsSection />
				<TeamSection />
			</div>
		);
	}
}
