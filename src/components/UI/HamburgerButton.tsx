import { motion } from 'framer-motion';
import React from 'react';

const HamburgerButton = ({ onClick, rotate, disapear, rotateReverse }: any) => {
	return (
		<button
			type="button"
			aria-label="Hamburger"
			className="p-3 pr-8 w-10 h-10 relative focus:outline-none outline-none z-50"
			onClick={onClick}>
			<div className="block w-5 absolute left-1/2 top-3 transform  -translate-x-1/2 -translate-y-1/2 shadow-xl">
				<motion.span
					className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
						rotate ? 'rotate text-white' : ''
					}`}
				/>
				<motion.span
					className={`block absolute mt-2 h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
						disapear ? 'disapear' : ''
					}`}
				/>
				<motion.span
					className={`block absolute mt-4 h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
						rotateReverse ? 'rotateReverse text-white' : ''
					}`}
				/>
			</div>
		</button>
	);
};

export default HamburgerButton;
