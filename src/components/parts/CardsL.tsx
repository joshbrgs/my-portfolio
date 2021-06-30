import React from 'react';
import Tilt from 'react-tilt';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cards: any = ({
  imageUrl,
  title,
  body,
  button2,
  git,
  site,
  lang,
  lang2,
  lang3
}) => {
  return (
    <div className="card">
      <div className="side-section L">
        <Tilt options={{ max: 25 }}>
          <Image
            src={imageUrl}
            className="card-image"
            alt="Mock-up"
            height={330}
            width={330}
          />
        </Tilt>
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
            <Tilt options={{ max: 25 }}>
              <a href={git} target="blank" className="text-left">
                View Code
              </a>
            </Tilt>
            <Tilt options={{ max: 25 }}>
              <a href={site} target="blank">
                {button2}
              </a>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;