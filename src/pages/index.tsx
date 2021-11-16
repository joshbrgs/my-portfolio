import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Hero, MainLoading } from '../components';
import Layout from '../layouts/Layout';

//Components

//Landing Page
const Home: React.FC = () => {
	const [loading, setLoading] = useState(false); //Set to true for loading animation

	return (
		<AnimatePresence>
			{loading ? (
				<MainLoading setLoading={setLoading} />
			) : (
				<Layout>
					<Hero />
				</Layout>
			)}
		</AnimatePresence>
	);
};

export default Home;
