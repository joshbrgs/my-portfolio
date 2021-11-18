import { Divider } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { Drawer } from '..';

const NavBar = () => {
	return (
		<header className="sticky top-0 mx-4 py-3 flex items-center justify-between">
			<div className="flex items-center space-x-6">
				<Image src="/assets/Icon.svg" height={50} width={50} />
				<div className="flex items-center">
					<div className="h-11">
						<Divider orientation="vertical" />
					</div>
					<div className="uppercase cursor-default ml-6">Josh Burgess</div>
				</div>
			</div>
			<Drawer />
		</header>
	);
};

export default NavBar;
