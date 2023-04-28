import React from 'react';
import * as S from '@/styles/profileBackground.styled';
const ProfileBackgroundLayout = () => {
  return (
    <>
      <div className="container">
        <div className="container-label label--my-profile">나의 프로필</div>
        <div className="container-label label--likes">좋아요한 게시물</div>
        <div className="container-label label--comments">댓글 단 게시물</div>
      </div>
    </>
  );
};

export default ProfileBackgroundLayout;
