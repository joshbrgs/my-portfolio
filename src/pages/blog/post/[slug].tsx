import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../../components/parts/BlogFooter';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getSinglePost, getPosts } from '../../../lib/posts';

type Post = {
  title: string;
  html: string;
  slug: string;
  tags: any;
  reading_time: Float32Array;
  custom_excerpt: string;
  authors: any;
  created_at: Float32Array;
  id: string;
  dateFormatted: any;
  feature_image: any;
};

// Static Filesystem Cache
export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: { post }
  };
}

const Post: React.FC<{ post: Post }> = (props) => {
  const { post } = props;
  const [enableLoadComments, setLoadComments] = useState<boolean>(true);

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  // //Disqus Comments
  // function loadComments() {
  //   setLoadComments(false);

  //   (window as any).disqus_config = function () {
  //     this.page.url = window.location.href;
  //     this.page.identifier = post.slug;
  //   };

  //   const script = document.createElement('script');
  //   script.src = 'https://ghostcms-nextjs-11.disqus.com/embed.js';
  //   script.setAttribute('data-timestamp', Date.now().toString());

  //   document.body.appendChild(script);
  // }

  return (
    <div>
      <div className="single-post">
        <Link href="/blog">
          <div className="back">
            <Image
              src="/assets/back.svg"
              alt="back"
              className="back-arrow"
              height={20}
              width={30}
            />{' '}
            <a>Go back</a>
          </div>
        </Link>
        <section>
          <div className="head">
            <p className="tags">{post.tags[0].name}</p>
            <h1 className="post-title">{post.title}</h1>
            <p className="excerpt">"{post.custom_excerpt}"</p>
            <h3 className="author">
              <img
                className="profile-image"
                src={post.authors[0].profile_image}
                alt="blog image"
              />{' '}
              {post.authors[0].name}
            </h3>
            <p className="reading">{post.reading_time} MIN READ </p>
          </div>
          <img
            src={post.feature_image}
            alt="blog image"
            className="blog-image"
          />
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
          {/* {enableLoadComments && <p onClick={loadComments}>Comments</p>}
          <div id="disqus_thread"></div> */}
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Post;
