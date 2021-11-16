import { Switch } from '@chakra-ui/react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Drawer, SocialIcons } from '..';

const NavBar = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	return (
		<header className="mx-4 my-2 flex items-center justify-between sticky">
			<Drawer />
			<div className="flex items-center space-x-6">
				<div className="flex space-x-3">
					{isDarkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
					<Switch onChange={() => setIsDarkMode(!isDarkMode)} />
				</div>
				<SocialIcons />
			</div>
		</header>
	);
};

export default NavBar;
