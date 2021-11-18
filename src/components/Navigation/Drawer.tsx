import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Switch,
	useColorMode,
} from '@chakra-ui/react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useReducer } from 'react';
import { SocialIcons } from '..';
import { hamburgerReducer, InitialState } from '../../reducers/hamburgerReducer';
import HamburgerButton from '../UI/HamburgerButton';
import Menu from './Menu';

const DrawerNav = () => {
	// const btnRef = useRef();
	const [state, dispatch] = useReducer(hamburgerReducer, InitialState);
	const { colorMode, toggleColorMode } = useColorMode();

	const handleOpen = () => {
		dispatch({
			type: 'OPEN',
		});
	};

	const handleClose = () => {
		dispatch({
			type: 'CLOSE',
		});
	};

	const { isOpen, rotate, rotateReverse, disappear } = state;

	return (
		<>
			<HamburgerButton
				// ref={btnRef}
				onClick={handleOpen}
				rotate={rotate}
				disapear={disappear}
				rotateReverse={rotateReverse}
			/>
			<Drawer isOpen={isOpen} placement="right" onClose={handleClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>
						<div className="flex space-x-3">
							<Switch onChange={toggleColorMode} />
							{colorMode === 'dark' ? (
								<FontAwesomeIcon icon={faMoon} />
							) : (
								<FontAwesomeIcon icon={faSun} />
							)}
						</div>
					</DrawerHeader>

					<DrawerBody>
						<Menu vertical className="space-y-3 my-3 text-xl w-full" />
					</DrawerBody>

					<DrawerFooter>
						<SocialIcons />
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default DrawerNav;
