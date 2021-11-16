import React from 'react';
import { ICard } from './Cards';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CardsL: any = ({ imageUrl, title, body, button2, git, site, lang, lang2, lang3 }: ICard) => {
	return (
		<div className="card">
			<div className="side-section L">
				<img src={imageUrl} className="card-image" alt="Mock-up" height={330} width={330} />
			</div>
			<div className="image-container">
				<div className="image-sub">
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
			</div>
		</div>
	);
};
