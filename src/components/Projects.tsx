import Cards from '../components/parts/Cards';
import React, { useState, useEffect } from 'react';
import CardsL from './parts/CardsL';

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
            body="My twitter bot, on a time interval, made with Python, Tweepy, and the Twitter API, has a follow for a follow function, like and retweet mentions and keywords, like coffee and crypto!"
            button2="Tweet"
            git="https://github.com/jlifts/social-bots"
            site="https://twitter.com/intent/tweet?screen_name=bluejay_mr&ref_src=twsrc%5Etfw"
            lang="Python"
            lang2="Tweepy"
            lang3="Twitter API"
          />
        </span>
        <span className="two">
          <CardsL
            imageUrl="/assets/Origin_Mock.webp"
            title="Ecommerce Site"
            body="This is a build I made for a brand, Origin51, that is an ecommerce experience with Shopify SDK for the checkout, and Graphql to query the product data from their Shopify store, everything else is custom with React."
            button2="Live Site"
            git="https://github.com/jlifts/Origin51"
            site="https://jlifts.github.io/Origin51"
            lang="React"
            lang2="Graphql"
            lang3="Shopify-Buy-SDK"
          />
        </span>
        {/* <span className="three">
          <Cards
            imageUrl="/assets/Discord.svg"
            title="Discord Jack-of-All-Trades Bot"
            body="#"
            button2="Add the Bot!"
            git="https://github.com/jlifts/bot-over-other-bots"
            site="#"
            lang="Discord Developer Portal"
            lang2="TypeScript"
            lang3="MongoDB"
          />
        </span> */}
        <span className="three">
          <Cards
            imageUrl="/assets/Icon.svg"
            title="My Portfolio Site"
            body="This is the site you are currently on! You can also check out my blog (coming soon) or type a wrong url to see the 404. Built with NextJS and NodeJS. "
            button2="Visit Blog"
            git="https://github.com/jlifts/my-portfolio"
            site="https://joshb.io/blog"
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
        <img src="/assets/Lined.svg" height={270} width={250} alt="flare" />
      </div>
      <h3>Always Adding More!</h3>
    </section>
  );
}

export default Projects;
