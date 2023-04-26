import React from 'react';
import * as S from '@/styles/profileStyled';
import { motion } from 'framer-motion';

const variants = {
  waterInitial: {
    y: 300,
  },
  waterAnimate: (custom: number) => ({
    y: custom + '%',
    transition: {
      duration: 2,
    },
  }),
};

function CreditScore() {
  return (
    <S.ProfileCreditScore score={50}>
      <motion.div
        custom={50}
        variants={variants}
        initial="waterInitial"
        animate="waterAnimate"
        className="wave"
      ></motion.div>
      <div className="score">
        <span>50</span>
      </div>
    </S.ProfileCreditScore>
  );
}

export default CreditScore;
