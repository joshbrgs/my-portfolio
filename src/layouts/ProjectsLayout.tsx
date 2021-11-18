import React from 'react';
import { Divider, useColorMode } from '@chakra-ui/react';
import { Project } from '../components';

const ProjectsLayout = () => {
	const { colorMode } = useColorMode();

	return (
		<section className="h-full my-24">
			<Project right={false} />
			<Project right={true} />
			<Project right={false} />
			<Project right={true} />
			<Project right={false} />
			<Divider className={`${colorMode === 'light' && ''}`} />
		</section>
	);
};

export default ProjectsLayout;
