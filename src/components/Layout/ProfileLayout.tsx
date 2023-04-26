import React from 'react';
import BaseLayout from '@/components/Layout/BaseLayout';
import { ProfileLayoutProp } from '@/types/componentProps';
import * as S from '@/styles/profileStyled';
import { motion, Variants } from 'framer-motion';
import { ProfileActivity } from '@/styles/profileStyled';
import CreditScore from '@/components/CreditScore';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  LIKE: '좋아요',
  MYPOSTS: '게시글',
};

function ProfileLayout({ children, hasHeader }: ProfileLayoutProp) {
  const route = useRouter();
  return (
    <BaseLayout hasHeader={hasHeader}>
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
              </div>
              <div className="activity__body">
                {Object.keys(profileConstants).map((key, index) => (
                  <div
                    key={index}
                    className={
                      'activity__body__item' + (route.pathname.split('/')[2] === key.toLowerCase() ? ' active' : '')
                    }
                  >
                    <Link href={`/profile/${key.toLowerCase()}`}>
                      <span>{profileConstants[key]}</span>
                    </Link>
                    <p>0</p>
                  </div>
                ))}
              </div>
            </ProfileActivity>
          </div>
          <div className="col3">
            <CreditScore />
          </div>
        </S.ProfileHeader>
        <S.ProfileBody>{children}</S.ProfileBody>
      </S.ProfileWrapper>
    </BaseLayout>
  );
}

export default ProfileLayout;
