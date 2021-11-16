import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
	return (
		<footer className="absolute bottom-0 bg-gray-800 w-screen">
			<div className="flex justify-between mx-3">
				<p>
					Check out my{' '}
					<Link href="/blog">
						<a className="text-primary">Blog</a>
					</Link>{' '}
					as well!
				</p>
				{/* Tip with Bat? */}
				<a className="btn" href="/assets/Burgess Resume.pdf" download>
					<FontAwesomeIcon icon={faDownload} />
				</a>
				<a href="mailto:burgessj247@gmail.com">burgessj247@gmail.com</a>
			</div>
		</footer>
	);
};

export default Footer;
