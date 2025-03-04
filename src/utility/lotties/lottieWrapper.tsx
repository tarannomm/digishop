import React from 'react';
import Lottie from 'react-lottie';
import empty from "./emptyshop1.json";
import search from './emptyshop2.json';
import { LottieProps } from '../../types/AppTypes';
import { animateMini } from 'framer-motion';
 



const LottieWrapper: React.FC<LottieProps> = ({ animationType, height = 400, width = 400 }) => {
  

  const options = {
    loop: true,
    autoplay: true,
    animationData: animationType!=="search"?empty:search,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={options}  />;
};

export default LottieWrapper;
