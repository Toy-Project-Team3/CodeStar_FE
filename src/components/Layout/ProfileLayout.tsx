import React, { useEffect, useState } from 'react';
import BaseLayout from '@/components/Layout/BaseLayout';
import { ProfileLayoutProp } from '@/types/componentProps';
import * as S from '@/styles/profileStyled';
import { ProfileActivity } from '@/styles/profileStyled';
import { motion, Variants } from 'framer-motion';
import CreditScore from '@/components/CreditScore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getMyInfo } from '@/utils/requests';
import { User, UserInfo } from '@/types/User';
import { getUser } from '@/utils/cookies';

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

function ProfileLayout({ children, hasHeader }: ProfileLayoutProp) {
  const [data, setData] = useState<UserInfo | null>(null);
  const user = getUser();
  const route = useRouter();

  const getUserInfo = async (user: User) => {
    if (!user) await route.push('/');
    else {
      const res = await getMyInfo(user.userId);
      console.log(res);
      setData(res);
    }
  };

  useEffect(() => {
    getUserInfo(user);
  }, []);

  return (
    <BaseLayout hasHeader={hasHeader}>
      <S.ProfileWrapper>
        <S.ProfileHeader>
          <div className="col1">
            <div className="profile__img">
              <img src={data?.profileImg} alt="profileImg" />
            </div>
            <form action="">
              <label htmlFor="imgs">클릭하여 이미지를 등록하기</label>
              <input type="file" name="imgs" id="imgs" />
              <motion.button className="upload" whileHover="hover" whileTap="tap" variants={variants}>
                이미지 업로드
              </motion.button>
            </form>
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
                <div>
                  <Link href="#">
                    <span>작성한 게시글</span>
                  </Link>
                  <p>{data?.postList.length}</p>
                </div>
                <div>
                  <Link href="#">
                    <span>좋아요 남긴 게시글</span>
                  </Link>
                  <p>{data?.likes.length}</p>
                </div>
              </div>
            </ProfileActivity>
          </div>
          <div className="col3">
            <CreditScore score={data?.credits.creditScore!} />
          </div>
        </S.ProfileHeader>
        <S.ProfileBody>{children}</S.ProfileBody>
      </S.ProfileWrapper>
    </BaseLayout>
  );
}

export default ProfileLayout;
