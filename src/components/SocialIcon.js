import React from 'react';
import { ReactComponent as FacebookIcon } from '../images/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '../images/icon-instagram.svg';
import { ReactComponent as TwitterIcon } from '../images/icon-twitter.svg';
import { ReactComponent as YoutubeIcon } from '../images/icon-youtube.svg';

function SocialIcon(props) {
	switch (props.platform) {
		case 'facebook':
			return <FacebookIcon {...props} />;
		case 'instagram':
			return <InstagramIcon {...props} />;
		case 'twitter':
			return <TwitterIcon {...props} />;
		case 'youtube':
			return <YoutubeIcon {...props} />;
		default:
			return <div />;
	}
}

export default SocialIcon;
