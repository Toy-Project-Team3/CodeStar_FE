import React, { useState } from 'react';
import * as S from '@/styles/styled';
import Logo from '@/components/Logo';
import Link from 'next/link';
import Modal from '../Modal';
import { BaseLayoutProp } from '@/types/componentProps';
import IconSearch from '../IconSearch';

function BaseLayout({ children, hasHeader }: BaseLayoutProp) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <S.MainWrapper>
      {hasHeader && (
        <S.Header>
          <Link href="/">
            <div className="logo">
              <Logo />
            </div>
          </Link>
          <div>
            <S.HeaderSearchButton>
              <Link href="/search">
                <IconSearch />
              </Link>
            </S.HeaderSearchButton>
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
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </S.MainWrapper>
  );
}

export default BaseLayout;
