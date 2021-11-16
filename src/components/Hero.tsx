import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
//Refactor Typewriter

const Hero: React.FC = () => {
	const fade = {
		hidden: {
			opacity: 0,
		},
		show: { opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
	};
	return (
		<motion.section className="hero" initial="hidden" animate="show" variants={fade}>
			<div>
				<div>
					<div>
						<img src="/assets/Icon.svg" height={450} width={400} alt="Icon" />
					</div>
					<div>
						<div>
							<h2>Creating</h2>
							<h2>Better</h2>
							<h2>Experiences</h2>
						</div>
						<div>
							<Typewriter
								options={{ loop: true }}
								onInit={typewriter => {
									typewriter
										.typeString(' Web Developer')
										.pauseFor(2500)
										.deleteAll()
										.typeString(' UI/UX Designer')
										.pauseFor(2500)
										.deleteAll()
										.typeString(' Mobile Developer')
										.pauseFor(2500)
										.deleteAll()
										// .typeString('Blockchain Developer')
										// .pauseFor(2500)
										// .deleteAll()
										.start();
								}}
							/>
						</div>
					</div>
				</div>
				<div>
					<Link
						href="/projects"
						// smooth={true}
						// duration={500}
						// spy={true}
						// exact="true"
					>
						<a>Projects</a>
					</Link>
					<span> - </span>
					<Link
						href="/contact"
						// smooth={true}
						// duration={500}
						// spy={true}
						// exact="true"
						// offset={-70}
					>
						<a>Contact Me</a>
					</Link>
					<span> - </span>
					<Link href="/about">
						<a>About</a>
					</Link>
					<span> - </span>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
