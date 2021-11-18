import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Hero: React.FC = () => {
	return (
		<section className="flex w-screen h-screen uppercase text-10xl leading-none mx-36">
			<div className="z-20">
				<h2 className="fromLeft cursor-default">
					The Web is
					<br /> Changing
				</h2>
				{/* <h2>Changing</h2> */}
				{/* <h2>Audience</h2> */}
				{/* <div className="flex text-6xl">
					<span className="mr-2">With </span>
					<Typewriter
						options={{ loop: true }}
						onInit={typewriter => {
							typewriter
								.typeString(' Web Developement')
								.pauseFor(2500)
								.deleteAll()
								.typeString(' UI/UX Design')
								.pauseFor(2500)
								.deleteAll()
								// .typeString(' Mobile Developer')
								// .pauseFor(2500)
								// .deleteAll()
								.typeString(' Blockchain Engineering')
								.pauseFor(2500)
								.deleteAll()
								.start();
						}}
					/>
				</div> */}
			</div>
			{/* <div className="flex h-full w-full absolute right-0 z-10 transform translate-x-96 -translate-y-16">
				<Image src="/assets/Icon.svg" layout="fill" />
			</div> */}
		</section>
	);
};

export default Hero;
