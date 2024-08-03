import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = (
  { animationData, loop = true, autoplay = true, style = {} },
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      });

      return () => {
        animation.destroy();
      };
    }
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} style={style}></div>;
};

export default LottieAnimation;
