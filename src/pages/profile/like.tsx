import React from 'react';
import ProfileLayout from '@/components/Layout/ProfileLayout';
import * as S from '@/styles/profileStyled';

function Like() {
  return (
    <ProfileLayout hasHeader>
      <h1>여태까지 좋아요를 남긴 글 목록입니다.</h1>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <S.ProfileBodyPostItem key={item}>
          <div className="post__img"></div>
          <div className="post__content">
            <h1>{item}</h1>
            <p>{item}</p>
          </div>
        </S.ProfileBodyPostItem>
      ))}
    </ProfileLayout>
  );
}

export default Like;
