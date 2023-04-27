import React, { useState, useRef, useEffect } from 'react';
import * as S from '@/styles/styled';
import Logo from '@/asset/img/Logo';
import Link from 'next/link';
import Modal from '../Modal';
import { BaseLayoutProp } from '@/types/componentProps';
import IconSearch from '@/asset/img/IconSearch';
import { getCookie, removeCookie } from '@/utils/cookies';
import { instance } from '@/utils/axiosInstance';

function BaseLayout({ children, hasHeader }: BaseLayoutProp) {
  const [token, setToken] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [subnavOpen, setSubnavOpen] = useState<boolean>(false);
  const subnavRef = useRef<HTMLUListElement>(null);
  const headerProfileRef = useRef(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (!subnavRef.current || !headerProfileRef.current) return;

    const isClickedSubnav = subnavRef.current.contains(event.target as Node);
    const isClickedHeaderProfile = event.target === headerProfileRef.current;

    if (!isClickedSubnav && !isClickedHeaderProfile) {
      setSubnavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const cookieToken = getCookie();
    if (cookieToken) {
      setToken(true);
    }
    setSubnavOpen(false);
  }, [token]);

  const handleLogout = async () => {
    try {
      await instance.post('/auth/logout');
      setToken(false);
      removeCookie();
    } catch (error) {
      console.log(error);
    }
  };

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
            {token ? (
              <>
                <Link href={'/posts'}>
                  <S.HeaderWriteButton whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    글쓰기
                  </S.HeaderWriteButton>
                </Link>
                <S.MyInfo>
                  <S.HeaderProfile ref={headerProfileRef} onClick={() => setSubnavOpen((prevState) => !prevState)} />
                  {subnavOpen && (
                    <S.MyList ref={subnavRef}>
                      <li>
                        <Link href="#">나의 글</Link>
                      </li>
                      <li>
                        <Link href="#">마이페이지</Link>
                      </li>
                      <li onClick={handleLogout}>
                        <p>로그아웃</p>
                      </li>
                    </S.MyList>
                  )}
                </S.MyInfo>
              </>
            ) : (
              <S.HeaderLoginButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setModalOpen(true)}
              >
                로그인
              </S.HeaderLoginButton>
            )}
          </div>
        </S.Header>
      )}
      {children}
      {modalOpen && <Modal setModalOpen={setModalOpen} setToken={setToken} />}
    </S.MainWrapper>
  );
}

export default BaseLayout;
