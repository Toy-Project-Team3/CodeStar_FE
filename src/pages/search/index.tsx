import BaseLayout from '@/components/Layout/BaseLayout';
import React from 'react';
import * as S from '@/styles/searchStyled';
import IconSearch from '@/components/IconSearch';

function Index() {
  return (
    <BaseLayout hasHeader>
      <S.MainContainer>
        <div className="input--Wrapper">
          <IconSearch />
          <input placeholder="검색어를 입력하세요" />
        </div>
      </S.MainContainer>
    </BaseLayout>
  );
}

export default Index;
