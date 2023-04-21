import React from 'react';
import * as S from '@/styles/profileStyled';
import { MainWrapper } from '@/styles/styled';
import { motion, Variants } from 'framer-motion';
import CreditScore from '@/components/CreditScore';

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
            <CreditScore />
          </div>
        </S.ProfileHeader>
      </S.ProfileWrapper>
    </MainWrapper>
  );
}

export default Index;
