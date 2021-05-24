import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/parts/BlogFooter';

type Post = {
  title: string;
  slug: string;
  reading_time: Float32Array;
  custom_excerpt: string;
  tags: any;
  authors: any;
  created_at: Float32Array;
  id: string;
  dateFormatted: any;
  feature_image: any;
};

import { getPosts } from '../../lib/posts';

export async function getStaticProps(context) {
  const posts = await getPosts();

  //Format the Date
  posts.map((post) => {
    const options: any = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };

    post.dateFormatted = new Intl.DateTimeFormat('en-US', options).format(
      new Date(post.published_at)
    );
  });

  if (!posts) {
    return {
      notFound: true
    };
  }

  return {
    props: { posts }
  };
}

const Blog: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;

  return (
    <div>
      <Link href="/">
        <div className="back">
          <FontAwesomeIcon icon={faArrowLeft} size="1x" color="#e6e6e6" />{' '}
          <a>Go back</a>
        </div>
      </Link>
      <ul className="posts">
        {posts.map((post) => {
          return (
            <li key={post.id} className="indiv">
              <Link href="blog/post/[slug]" as={`blog/post/${post.slug}`}>
                <section>
                  <img
                    src={post.feature_image}
                    alt="blog image"
                    className="blog-image"
                  />
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
                    {post.dateFormatted} <span> | </span> {post.reading_time}{' '}
                    MIN READ{' '}
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