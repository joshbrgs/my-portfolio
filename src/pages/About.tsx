import SocialIcons from '../components/UI/SocialIcons';
import React, { useState } from 'react';
import { Layout } from '../layouts';

const About = () => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<Layout>
			<section className="">
				<div className=" text-8xl leading-normal">
					{/* <span className="bubbles" animate={animation} ref={ref}>
					<img src="/assets/Grid.svg" height={270} width={250} alt="flare" />
				</span> */}
					{/* <h2 className="about-title">About</h2> */}
					<h4 className="">About</h4>
					{/* <div className="underline" ref={ref}></div> */}
					<p>
						Most of my experience is in Front End Developement, but I love the whole process of building
						apps, Back Ends, and programs. I graduated from <b>Pittsburgh University</b>, in Pittsburgh
						Pennsylvania, with a BS in Digital Marketing. It was during my undergraduate where I was
						introduced to the basics of scripting languages, and once I graduated I was down the rabbit hole
						of learning{' '}
						<span className="hover-reveal" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
							code
							<img
								className={hovered ? 'hover reveal' : 'hover'}
								role="presentation"
								height={100}
								width={100}
								src="/assets/shaqshake.gif"
							/>
						</span>
						.
					</p>
					<p>
						The libraries and frameworks I tend to use are <b>React</b> and <b>NextJS</b>, <b>Jest</b>,{' '}
						<b>NodeJS</b>, <b>NestJS</b>, and <b>React Native</b>. I have used <b>GraphQL</b> and <b>SQL</b>{' '}
						with <b>MongoDB</b> and <b>FireBase</b>. I use WordPress and Shopify as an Eccomerce CMS, and
						their SDK for personalized experiences. I also wireframe and design with <b>AdobeXD</b> and{' '}
						<b>Illustrator</b>. The languages I work with are <b>Typescript</b>, <b>JavaScript</b>,{' '}
						<b>Python</b>, <b>Sass</b>, <b>CSS</b>, and <b>HTML</b>. I am currently learning <b>Solidity</b>
						, <b>Golang</b>, <b>FaunaDB</b>, and <b>Kotlin</b>.
					</p>
					<p>
						I love learning new tech, and trying new things. The reason I find this industry so interesting
						is because of the endless possibilities and creativity. One growing interest of mine is in the{' '}
						<b>Cryptocurrency</b> space and <b>Blockchain</b> Tech. I am a proponent of <b>DeFi</b>.
					</p>
					<span className="social-container">
						<SocialIcons />
					</span>
				</div>
				{/* <div className="skill">
				<img src="/assets/Josh Burgess Logo.svg" height={400} width={400} alt="Logo" />
			</div> */}
			</section>
		</Layout>
	);
};

export default About;
