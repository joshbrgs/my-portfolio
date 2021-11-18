import Link from 'next/link';
import { Footer } from '../../components';
import { getPosts } from '../../util/posts';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps() {
	//context was param
	const posts: any = await getPosts();

	//Format the Date
	posts.map((post: { dateFormatted: string; published_at: string | number | Date }) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const options: any = {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		};

		post.dateFormatted = new Intl.DateTimeFormat('en-US', options).format(new Date(post.published_at));
	});

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: { posts },
	};
}

const Blog: React.FC<{ posts: Post[] }> = props => {
	const { posts } = props;

	return (
		<div>
			<Link href="/">
				<div className="back">
					<img src="/assets/back.svg" alt="back" className="back-arrow" /> <a>Go back</a>
				</div>
			</Link>
			<ul className="posts">
				<img src="/assets/Repeat-Grid5.svg" height={500} width={500} className="blog-grid" />
				{posts.map(post => {
					return (
						<li key={post.id} className="indiv">
							<Link href="blog/post/[slug]" as={`blog/post/${post.slug}`}>
								<section>
									<img src={post.feature_image} alt="blog image" className="blog-image" />
									<p className="tags">{post.tags[0].name}</p>
									<h2 className="blog-title">{post.title}</h2>
									<p className="excerpt">"{post.custom_excerpt}"</p>
									<h3 className="author">
										<img
											className="profile-image"
											src={post.authors[0].profile_image}
											alt="blog image"
										/>{' '}
										{post.authors[0].name}
									</h3>
									<p className="reading">
										{post.dateFormatted} <span> | </span> {post.reading_time} MIN READ{' '}
									</p>
								</section>
							</Link>
						</li>
					);
				})}
			</ul>

			<Footer />
		</div>
	);
};
export default Blog;
