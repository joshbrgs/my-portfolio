import React from 'react';
import { NavBar, Footer } from '../components';

const Layout = ({ children }: any): JSX.Element => {
	return (
		<main className="relative min-h-screen">
			<NavBar />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;
