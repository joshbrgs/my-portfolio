import Cards from '../components/parts/Cards';
import React, { useState, useEffect } from 'react';

function Projects(): React.ReactElement {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="projects">
      <div>
        <h2
          className="proj-title"
          style={{
            transform: `translateY(${offsetY * 0.5}px) rotate(180deg)`
          }}
        >
          Projects
        </h2>
        <h2 className="watermark">Projects</h2>
      </div>

      <div className="list">
        <span className="one">
          <Cards
            imageUrl="/assets/Logo blue.svg"
            title="Twitter Bot"
            body="My twitter bot, on a time interval, made with Python, Tweepy, and the Twitter API, has a follow for a follow function, like and retweet keywords or a mention, and likes keywords like coffee and crypto!"
            button2="Tweet"
            git="https://github.com/jlifts/social-bots"
            site="https://twitter.com/intent/tweet?screen_name=bluejay_mr&ref_src=twsrc%5Etfw"
            lang="Python"
            lang2="Tweepy"
            lang3="Twitter API"
          />
        </span>
        <span className="two">
          <Cards
            imageUrl="/assets/origin.png"
            title="Eccomerce Site"
            body="This is a build I made for a brand, Origin51, that is an eccomerce experience with Shopify SDK"
            button2="Live Site"
            git="https://github.com/jlifts/Origin51"
            site="https://www.origin51.com"
            lang="React"
            lang2="Graphql"
            lang3="Shopify-Buy-SDK"
          />
        </span>
        <span className="three">
          <Cards
            imageUrl="/assets/Icon.svg"
            title="My Portfolio Site"
            body="This is the site you are currently on! You can also checkout my blog (coming soon) or type a wrong url to see the 404. Built with NextJS."
            button2="Visit Blog"
            git="https://github.com/jlifts/my-portfolio"
            site="https://joshb.io/404"
            lang="NextJS"
            lang2="TypeScript"
            lang3="NodeJS"
          />
        </span>
      </div>
      <div
        className="graphic"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      >
        <img src="/assets/Lined.svg" height={270} width={250} />
      </div>
      <h3>Always Adding More!</h3>
    </section>
  );
}

export default Projects;
