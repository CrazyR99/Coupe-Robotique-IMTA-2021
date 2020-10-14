import React, { Component } from 'react';

export class CardTest extends Component {
	render() {
		return (
			<div className="card my-3" style={{ width: '18rem' }}>
				<img
					className="card-img-top"
					src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-dark.jpg"
					alt=""
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ut dolore quia officia earum nemo
						libero, culpa neque error! Provident, asperiores itaque. Ipsam molestiae deserunt quo. Id
						pariatur repellat aperiam.
					</p>
				</div>
			</div>
		);
	}
}

export default CardTest;
