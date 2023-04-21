import React from 'react';
import * as S from '@/styles/profileStyled';
import { MainWrapper } from '@/styles/styled';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  hover: {
    y: -3,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    y: 3,
    transition: {
      duration: 0.2,
    },
  },
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

function Index() {
  return (
    <MainWrapper>
      <S.ProfileWrapper>
        <S.ProfileHeader>
          <div className="col1">
            <div className="profile__img"></div>
            <motion.button className="upload" whileHover="hover" whileTap="tap" variants={variants}>
              이미지 업로드
            </motion.button>
            <motion.button className="delete" whileHover="hover" whileTap="tap" variants={variants}>
              이미지 제거
            </motion.button>
          </div>
          <div className="col2">
            <h1>이름</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, tempora!</p>
            <button>수정하기</button>
          </div>
          <div className="col3">
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
          </div>
        </S.ProfileHeader>
      </S.ProfileWrapper>
    </MainWrapper>
  );
}

export default Index;
