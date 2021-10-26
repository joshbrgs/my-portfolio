import React from 'react';
import Link from 'next/link';
import SocialIcons from '../UI/SocialIcons';

const Footer: React.FC = () => {
	return (
		<div className="footer blogger">
			<p>
				Powered by{' '}
				<Link href="https://ghost.org/">
					<a className="ghost">Ghost</a>
				</Link>{' '}
				CMS
			</p>
			{/* Tip with Bat? */}
			{/* Socials */}
			<div className="social-div">
				<SocialIcons />
			</div>
			<a className="email" href="mailto:burgessj247@gmail.com">
				burgessj247@gmail.com
			</a>
		</div>
	);
};

export default Footer;
