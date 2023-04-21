import React from 'react';
import * as S from '@/styles/profileStyled';
import { MainWrapper } from '@/styles/styled';
import { motion, Variants } from 'framer-motion';
import CreditScore from '@/components/CreditScore';
import { ProfileActivity } from '@/styles/profileStyled';
import Layout from '@/components/Layout';

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

interface ProfileConstants {
  [key: string]: string;
}

const profileConstants: ProfileConstants = {
  COMMENT: '댓글',
  LIKE: '좋아요',
  POST: '게시글',
};

function Index() {
  return (
    <Layout hasHeader>
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
            <div className="col2-item">
              <h1>이름</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, tempora!</p>
              <button>수정하기</button>
            </div>
            <ProfileActivity>
              <div className="activity__header">
                <h1>활동</h1>
                <button>더보기</button>
              </div>
              <div className="activity__body">
                {Object.keys(profileConstants).map((key, index) => (
                  <div key={index}>
                    <span>{profileConstants[key]}</span>
                    <div></div>
                  </div>
                ))}
              </div>
            </ProfileActivity>
          </div>
          <div className="col3">
            <CreditScore />
          </div>
        </S.ProfileHeader>
      </S.ProfileWrapper>
    </Layout>
  );
}

export default Index;
