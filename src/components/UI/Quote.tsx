import React from 'react';

const Quote = () => {
	return (
		<section className="h-3/5 m-12">
			<div className="flex flex-col text-3xl justify-end items-end">
				<p className="w-3/5">
					<span className="mx-3">"</span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui numquam sit quam nobis voluptatem
					facere aperiam vel laudantium rerum. Iure architecto quam, asperiores facilis aspernatur fugiat
					debitis aperiam quia!<span className="mx-3">"</span>
				</p>
				<div className="flex justify-end">
					<span>~</span>
					<p>John Doe</p>
				</div>
			</div>
		</section>
	);
};

export default Quote;
