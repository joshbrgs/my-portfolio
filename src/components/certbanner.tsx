import React from "react";

const CertBanner: React.FC = () => {
  return (
    <div className="w-full inline-flex flex-nowrap">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <img
            src="/images/AWS_D_A.png"
            alt="AWS Cert 1"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          <img
            src="/images/AWS_SA_A.png"
            alt="AWS Cert 2"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          <img
            src="/images/AWS_ML_S.png"
            alt="CNCF Cert"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          {/* Repeat the images here to create a continuous loop effect */}

          <img
            src="/images/KCNA_badge.png"
            alt="AWS Cert 1"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          <img
            src="/images/TF_A.png"
            alt="AWS Cert 2"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          <img
            src="/images/Argo_Fund.png"
            alt="CNCF Cert"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          <img
            src="/images/Argo_Scale.png"
            alt="CNCF Cert"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <img
            src="/images/AWS_D_A.png"
            alt="AWS Cert 1"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          <img
            src="/images/AWS_SA_A.png"
            alt="AWS Cert 2"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          <img
            src="/images/AWS_ML_S.png"
            alt="CNCF Cert"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          {/* Repeat the images here to create a continuous loop effect */}

          <img
            src="/images/KCNA_badge.png"
            alt="AWS Cert 1"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          <img
            src="/images/TF_A.png"
            alt="AWS Cert 2"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          <img
            src="/images/Argo_Fund.png"
            alt="CNCF Cert"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
        <li>
          <img
            src="/images/Argo_Scale.png"
            alt="CNCF Cert"
            height={100}
            width={100}
            className="grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          />
        </li>
      </ul>
    </div>
  );
};

export default CertBanner;
