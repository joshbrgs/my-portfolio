import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons: React.FC = () => {
	return (
		<div className="flex space-x-2">
			<Link href="https://github.com/jlifts">
				<a target="blank" className="hover:text-github">
					<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
				</a>
			</Link>
			<Link href="https://www.linkedin.com/in/burgess-josh/">
				<a target="blank" className="hover:text-linkedIn">
					<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
				</a>
			</Link>
			<Link href="https://twitter.com/bluejay_mr">
				<a target="blank" className="hover:text-twitter">
					<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
				</a>
			</Link>
			<Link href="https://dribbble.com/JBurgessDev">
				<a target="blank" className="hover:text-dribble">
					<FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
				</a>
			</Link>
		</div>
	);
};

export default SocialIcons;
