import Link from 'next/link';
import React from 'react';

interface IMenu {
	vertical: boolean;
	className?: string;
}

const Menu = ({ vertical, className }: IMenu): JSX.Element => {
	return (
		<nav className={`${className} flex ${vertical && 'flex-col'} uppercase`}>
			<Link href="/">
				<span className="expand fromLeft">My Work</span>
			</Link>
			<Link href="/about">
				<span className="expand fromLeft">About</span>
			</Link>
			<Link href="/contact">
				<span className="expand fromLeft">Contact</span>
			</Link>
			<Link href="/blog">
				<span className="expand fromLeft">Blog</span>
			</Link>
		</nav>
	);
};

export default Menu;
