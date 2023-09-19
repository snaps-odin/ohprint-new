

import React from 'react';

export default class HomeInstagram extends React.Component {
	render() {
		return (
			<section className="home-instagram-wrap">
				<iframe src="/html/instagram.html"
				        frameBorder={0}
				        scrolling="no"/>
			</section>
		)
	}
}