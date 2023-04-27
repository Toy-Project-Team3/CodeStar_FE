import React from 'react';
import * as S from '@/styles/blogPostStyled';
import Link from 'next/link';
import IconLike from '@/asset/img/IconLike';
import { PostInterface } from '@/types/RequestInterface';
import { getDate } from '@/utils/dateFormat';

function Index({ blogPost }: { blogPost: PostInterface }) {
  return (
    <S.MainContainer>
      <Link
        href={{ pathname: `/post`, query: { postId: blogPost.postId, userId: blogPost.author.id } }}
        as={'@' + blogPost.author.userId + '/' + blogPost.postId}
      >
        <h2 className="title">{blogPost.title}</h2>
      </Link>
      <p className="content">{blogPost.content}</p>
      <S.SubContainer>
        <span>{getDate(blogPost.createdAt)}</span>
        <div className="separator">·</div>
        <span>{blogPost.commentList.length}개의 댓글</span>
        <div className="separator">·</div>
        <span className="likes">
          <IconLike />
          {blogPost.likes?.length}
        </span>
      </S.SubContainer>
    </S.MainContainer>
  );
}

export default Index;
