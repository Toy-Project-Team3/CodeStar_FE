import BaseLayout from '@/components/Layout/BaseLayout';
import React, { ChangeEvent } from 'react';
import * as S from '@/styles/searchStyled';
import IconSearch from '@/asset/img/IconSearch';
import SearchPost from '@/components/SearchPost';
import { useQuery } from 'react-query';
import { getPosts } from '@/utils/requests';
import { PostInterface } from '@/types/RequestInterface';


function Index() {
  const { data } = useQuery('posts', getPosts);
  const [search, setSearch] = React.useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filterData = data?.filter((item) => item.title.includes(search));
  console.log(filterData);

  return (
    <BaseLayout hasHeader>
      <S.MainContainer>
        <div className="input--Wrapper">
          <IconSearch />
          <input placeholder="검색어를 입력하세요" value={search} onChange={handleChange} />
        </div>
        {search !== '' ? (
          <>
            <S.NoticeParagraph>
              총 <b>{filterData?.length}개</b>의 포스트를 찾았습니다.
            </S.NoticeParagraph>
            <div>
              {filterData?.map((item: PostInterface) => (
                <SearchPost key={item.postId} searchPost={item} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </S.MainContainer>
    </BaseLayout>
  );
}

export default Index;
