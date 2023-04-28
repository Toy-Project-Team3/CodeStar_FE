import React from 'react';
import * as S from '@/styles/profileStyled';
import { motion } from 'framer-motion';
import { CreditScoreProp } from '@/types/componentProps';

const variants = {
  waterInitial: {
    y: 300,
  },
  waterAnimate: (custom: number) => ({
    y: custom + '%',
    transition: {
      duration: 1.2,
      type: 'spring',
    },
  }),
};

function CreditScore({ width = 20, height = 20, score = 50 }: CreditScoreProp) {
  return (
    <S.ProfileCreditScore width={width} height={height} score={100}>
      <motion.div
        custom={score ? 100 - score : 100}
        variants={variants}
        initial="waterInitial"
        animate="waterAnimate"
        className="wave"
      ></motion.div>
      <div className="score">
        <span>{score}</span>
      </div>
    </S.ProfileCreditScore>
  );
}

export default CreditScore;
