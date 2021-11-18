import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layout, ProjectsLayout, CaseStudyLayout } from '../layouts';
import { Hero, Quote } from '../components';
import MainLoading from '../components/Animations/MainLoading';

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
					<Quote />
					<ProjectsLayout />
					<CaseStudyLayout />
				</Layout>
			)}
		</AnimatePresence>
	);
};

export default Home;
