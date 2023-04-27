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
        <Link
          href={{ pathname: `/blog`, query: { id: searchPost?.author.id, userName: searchPost?.author.userName } }}
          as={'@' + searchPost?.author.userId}
        >
          {searchPost.author.profileImg && <img src={searchPost.author.profileImg} alt="profile" />}
        </Link>
        <div className="username">
          <Link
            href={{ pathname: `/blog`, query: { id: searchPost?.author.id, userName: searchPost?.author.userName } }}
            as={'@' + searchPost?.author.userId}
          >
            {searchPost.author.userName}
          </Link>
        </div>
      </S.UserContainer>
      <Link
        href={{ pathname: `/post`, query: { postId: searchPost.postId, userId: searchPost.author.id } }}
        as={'@' + searchPost.author.userId + '/' + searchPost.postId}
      >
        <S.ThumbnailLink>
          <img src={searchPost.thumbnail} alt="thumbnail" />
        </S.ThumbnailLink>
      </Link>
      <Link
        href={{ pathname: `/post`, query: { postId: searchPost.postId, userId: searchPost.author.id } }}
        as={'@' + searchPost.author.userId + '/' + searchPost.postId}
      >
        <S.TitleLink>
          <h2>{searchPost.title}</h2>
        </S.TitleLink>
      </Link>
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
