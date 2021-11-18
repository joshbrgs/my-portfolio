import { Divider } from '@chakra-ui/react';
import React from 'react';

interface IProject {
	right: boolean;
}

const Project = ({ right }: IProject) => {
	return (
		<>
			<Divider />
			<div className={`flex flex-col my-28 mx-8 ${right && 'items-end'}`}>
				<h3 className={`text-4xl pb-2 ${right && 'mr-4'}`}>Title For Project</h3>
				<p className="w-2/5">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic rerum a nam reiciendis repudiandae
					expedita, totam sit, autem placeat est vel perferendis eveniet voluptates quam voluptas ex, porro
					amet doloribus?
				</p>
			</div>
		</>
	);
};

export default Project;
