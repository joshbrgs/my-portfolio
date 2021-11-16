import React from 'react';

export interface ICard {
	imageUrl: string;
	title: String;
	body: String | any;
	button2: String;
	git: string;
	site: string;
	lang: String;
	lang2: String;
	lang3: String;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cards: any = ({ imageUrl, title, body, button2, git, site, lang, lang2, lang3 }: ICard) => {
	return (
		<div className="card">
			<div className="side-section">
				<h4>{title}</h4>
				<p>{body}</p>
				<ul>
					<li>{lang}</li>
					<li>{lang2}</li>
					<li>{lang3}</li>
				</ul>
				<div className="buttons">
					<a href={git} target="blank" className="text-left">
						View Code
					</a>

					<a href={site} target="blank">
						{button2}
					</a>
				</div>
			</div>
			<div className="image-container">
				<img src={imageUrl} className="card-image" alt="Mock-up" height={330} width={330} />
			</div>
		</div>
	);
};

export default Cards;
