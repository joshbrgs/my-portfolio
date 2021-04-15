import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PageNotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go;
      router.push('/');
    }, 3500);
  }, []);

  return (
    <div className="PageNotFound">
      <h1>404</h1>
      <Image
        src="/assets/ANH-Ben-identification.jpeg"
        height={350}
        width={490}
        priority={true}
      />
      <h2>This is not the page you are looking for...</h2>
      <p>If you are not teleported click below</p>
      <Link href="/">
        <a className="li">
          Back to the Experience!
          <span className="arrow"></span>
        </a>
      </Link>
    </div>
  );
};

export default PageNotFound;
