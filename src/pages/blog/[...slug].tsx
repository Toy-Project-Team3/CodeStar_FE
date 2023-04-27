import BaseLayout from '@/components/Layout/BaseLayout';
import React from 'react';
import * as S from '@/styles/blogStyled';
import Link from 'next/link';
import IconSearch from '@/asset/img/IconSearch';
import BlogPost from '@/components/blogPost';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getPost, getblogPosts } from '@/utils/requests';
import { PostInterface } from '@/types/RequestInterface';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query.slug;
  console.log(query);
  if (!query) {
    return null;
  }
  const res = await getblogPosts(query[0]);

  return { props: { post: res } };
}

function Index({ post }: { post: PostInterface[] }) {
  return (
    <BaseLayout hasHeader>
      <S.MainContainer>
        <S.OwnerContainer>
          <div className="wrapper">
            <div>
              <img src="https://picsum.photos/200/300" alt="profile" />
            </div>
            <div className="owner">
              <div className="name">{post[0].author.userName}</div>
              <div className="description">{post[0].author.bio}</div>
            </div>
          </div>
          <S.UnderLine></S.UnderLine>
        </S.OwnerContainer>
        <S.CategoryContainer>
          <div>글</div>
        </S.CategoryContainer>
        <S.ContentContainer>
          <div className="section">
            <div className="input--wrapper">
              <IconSearch />
              <input placeholder="검색어를 입력하세요" />
            </div>
          </div>
          <div>
            {post?.map((post: PostInterface) => (
              <BlogPost key={post.postId} blogPost={post} />
            ))}
          </div>
        </S.ContentContainer>
      </S.MainContainer>
    </BaseLayout>
  );
}

export default Index;
