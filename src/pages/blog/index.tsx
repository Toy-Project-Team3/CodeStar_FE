import BaseLayout from '@/components/Layout/BaseLayout';
import React from 'react';
import * as S from '@/styles/blogStyled';
import Link from 'next/link';
import IconSearch from '@/components/IconSearch';
import BlogPost from '@/components/blogPost';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getblogPosts } from '@/utils/requests';
import { PostInterface } from '@/types/RequestInterface';

function Index() {
  const query = useRouter().query;
  const { data } = useQuery('user', () => getblogPosts(query.id));

  return (
    <BaseLayout hasHeader>
      <S.MainContainer>
        <S.OwnerContainer>
          <div className="wrapper">
            <Link href="javascript:void(0)">
              <img src="https://picsum.photos/200/300" alt="profile" />
            </Link>
            <div className="owner">
              <div className="name">
                <Link href="javascript:void(0)">이병욱</Link>
              </div>
              <div className="description"></div>
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
            {data?.map((post: PostInterface) => (
              <BlogPost key={post.postId} blogPost={post} />
            ))}
          </div>
        </S.ContentContainer>
      </S.MainContainer>
    </BaseLayout>
  );
}

export default Index;
