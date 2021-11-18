import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Tooltip, useColorMode } from '@chakra-ui/react';
import Menu from './Menu';
import { SocialIcons } from '..';

const Footer: React.FC = () => {
	const { colorMode } = useColorMode();
	return (
		<footer
			className={`absolute w-screen h-72  ${
				colorMode === 'light' ? 'bg-gray-400 text-black' : 'bg-gray-800 text-white'
			}`}>
			<div className="grid grid-cols-3 gap-8 my-16 place-items-center">
				<div className="w-28 col-span-1 space-y-6 self-start">
					<span className="text-4xl font-bold">Menu</span>
					<Menu vertical />
				</div>
				<div className="w-96 col-span-1 space-y-6 self-start">
					<span className="text-4xl font-bold">Get In Touch</span>
					<SocialIcons />
					<Tooltip hasArrow label="Send me an email" aria-label="A tooltip" placement="left">
						<a href="mailto:burgessj247@gmail.com">burgessj247@gmail.com</a>
					</Tooltip>
				</div>
				<div className="col-span-1 space-y-6 self-start">
					<span className="text-4xl font-bold">Other</span>
					<div className="flex flex-row space-x-6">
						<Tooltip hasArrow label="Buy Me a coffee with ETH!" aria-label="A tooltip" placement="left">
							<div>
								<FontAwesomeIcon icon={faCoffee} />
							</div>
						</Tooltip>
						<Tooltip hasArrow label="Download my Resume" aria-label="A tooltip" placement="right">
							<a className="btn" href="/assets/Burgess Resume.pdf" download>
								<FontAwesomeIcon icon={faDownload} />
							</a>
						</Tooltip>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
