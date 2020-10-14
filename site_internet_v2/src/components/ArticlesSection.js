import React, { Component } from 'react';

import ArticleBox from './ArticleBox';

import ImageBackground from '../images/articleSection_background_2.png';

import Image1 from '../images/supporter.jpg';
import Image2 from '../images/roboticClub.jpg';
import Image3 from '../images/roboticClub2.jpg';
import Image4 from '../images/strategie.jpg';
import Image5 from '../images/imtAtlantique.jpg';
import Image6 from '../images/étapes.jpg';

export class ArticlesSection extends Component {
	render() {
		return (
			<div
				id="articlesSection"
				style={{ backgroundColor: 'transparent', position: 'relative', display: 'grid', placeItems: 'center' }}
			>
				<div>
					<img
						src={ImageBackground}
						alt="ImageBackground"
						style={{
							position: 'absolute',
							objectFit: 'cover',
							top: '0%',
							left: '0%',
							height: '100%',
							width: '100%'
						}}
					/>
				</div>
				<h1 style={title}>Articles</h1>
				<div className="grid">
					<div className="one" style={{ height: '90vh' }}>
						<ArticleBox src={Image1} alt="image" title="Coupe de France de robotique" />
					</div>
					<div className="two" style={{ height: '30vh' }}>
						<ArticleBox src={Image2} alt="image" title="Club robotique de Nantes" />
					</div>
					<div className="three" style={{ height: '60vh' }}>
						<ArticleBox src={Image3} alt="image" title="Club robotique de Brest" />
					</div>
					<div className="four" style={{ height: '60vh' }}>
						<ArticleBox src={Image4} alt="image" title="Notre stratégie" />
					</div>
					<div className="five" style={{ height: '30vh' }}>
						<ArticleBox src={Image5} alt="image" title="IMT Atlantique" />
					</div>
					<div className="six" style={{ height: '30vh' }}>
						<ArticleBox src={Image6} alt="image" title="Les étapes" />
					</div>
				</div>
			</div>
		);
	}
}

export default ArticlesSection;

const title = {
	position: 'relative',
	color: '#02B8DF',
	fontWeight: '200',
	fontSize: '3.5rem'
};
