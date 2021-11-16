import React from 'react';
import { NavBar, Footer } from '../components';

const Layout = ({ children }: any): JSX.Element => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
