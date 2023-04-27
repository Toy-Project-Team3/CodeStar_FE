import React from 'react';
import * as S from '@/styles/searchPostStyled';
import Link from 'next/link';
import IconLike from '@/asset/img/IconLike';
import { PostInterface } from '@/types/RequestInterface';
import { getDate } from '@/utils/dateFormat';

function Index({ searchPost }: { searchPost: PostInterface }) {
  return (
    <S.MainContaier>
      <S.UserContainer>
        <Link href="#">
          <img src="https://picsum.photos/200/300" alt="profile" />
        </Link>
        <div className="username">{searchPost.author.userName}</div>
      </S.UserContainer>
      <S.ThumbnailLink href="#">
        <div className="thumbnail">
          <img src="https://picsum.photos/700/400" alt="thumbnail" />
        </div>
      </S.ThumbnailLink>
      <S.TitleLink href="#">
        <h2>{searchPost.title}</h2>
      </S.TitleLink>
      <S.ContentContianer>
        <p>{searchPost.content}</p>
      </S.ContentContianer>
      <S.SubContainer>
        <span>{getDate(searchPost.createdAt)}</span>
        <div className="separator">·</div>
        <span>{searchPost.commentList.length}개의 댓글</span>
        <div className="separator">·</div>
        <span className="likes">
          <IconLike /> {searchPost.likes?.length}
        </span>
      </S.SubContainer>
    </S.MainContaier>
  );
}

export default Index;
