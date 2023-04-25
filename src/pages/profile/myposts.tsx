import React from 'react';
import ProfileLayout from '@/components/Layout/ProfileLayout';
import * as S from '@/styles/profileStyled';
function MyPosts() {
  return (
    <ProfileLayout hasHeader>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <S.ProfileBodyPostItem key={item}>
          <div className="post__img"></div>
          <div className="post__content"></div>
        </S.ProfileBodyPostItem>
      ))}
    </ProfileLayout>
  );
}

export default MyPosts;
