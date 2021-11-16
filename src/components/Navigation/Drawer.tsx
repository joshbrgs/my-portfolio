import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Input,
} from '@chakra-ui/react';
import React, { useRef, useReducer } from 'react';
import { hamburgerReducer, InitialState } from '../../reducers/hamburgerReducer';
import HamburgerButton from '../UI/HamburgerButton';
import Menu from './Menu';

const DrawerNav = () => {
	const btnRef = useRef();
	const [state, dispatch] = useReducer(hamburgerReducer, InitialState);

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
				ref={btnRef}
				onClick={handleOpen}
				rotate={rotate}
				disapear={disappear}
				rotateReverse={rotateReverse}
			/>
			<Drawer isOpen={isOpen} placement="left" onClose={handleClose} finalFocusRef={btnRef.current}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody>
						<Input placeholder="Type here..." />
						<Menu vertical className="space-y-3 my-3 text-xl w-full" />
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={handleClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default DrawerNav;
