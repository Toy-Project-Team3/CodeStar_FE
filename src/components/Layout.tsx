import React from 'react';
import * as S from '@/styles/styled';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { MainContentDummy } from '@/styles/styled';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.MainWrapper>
      <S.Header>
        <Link href={'/'}>
          <div className="logo">
            <Logo />
          </div>
        </Link>
        <div>
          <S.HeaderWriteButton whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            글쓰기
          </S.HeaderWriteButton>
          <Link href="/profile">
            <S.HeaderProfile></S.HeaderProfile>
          </Link>
        </div>
      </S.Header>
      {children}
    </S.MainWrapper>
  );
}

export default Layout;
