import React from 'react';
import * as S from '@/styles/styled';
import Logo from '@/components/Logo';
import Link from 'next/link';

function Layout({ children, hasHeader }: { children: React.ReactNode; hasHeader: boolean }) {
  return (
    <S.MainWrapper>
      {hasHeader && (
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
      )}
      {children}
    </S.MainWrapper>
  );
}

export default Layout;
