import React from 'react';
import Link from 'next/link';

interface IMenu {
	vertical: boolean;
	className?: string;
}

const Menu = ({ vertical, className }: IMenu): JSX.Element => {
	return (
		<nav className={`${className} flex ${vertical && 'flex-col'} uppercase`}>
			<Link href="/">
				<span className="expand fromCenter cursor-pointer">My Work</span>
			</Link>
			<Link href="/about">
				<span className="expand fromCenter cursor-pointer">About</span>
			</Link>
			<Link href="/contact">
				<span className="expand fromCenter cursor-pointer">Contact</span>
			</Link>
			<Link href="/blog">
				<span className="expand fromCenter cursor-pointer">Blog</span>
			</Link>
		</nav>
	);
};

export default Menu;
