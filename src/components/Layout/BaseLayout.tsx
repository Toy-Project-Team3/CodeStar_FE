import React, { useEffect, useRef, useState } from 'react';
import * as S from '@/styles/styled';
import Logo from '@/asset/img/Logo';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '../Modal';
import { BaseLayoutProp } from '@/types/componentProps';
import IconSearch from '@/asset/img/IconSearch';
import { getCookie, getUser, removeCookie } from '@/utils/cookies';
import { imgInstance, instance } from '@/utils/axiosInstance';
import { getMyInfo } from '@/utils/requests';

function BaseLayout({ children, hasHeader }: BaseLayoutProp) {
  const [token, setToken] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [subnavOpen, setSubnavOpen] = useState<boolean>(false);
  const subnavRef = useRef<HTMLUListElement>(null);
  const headerProfileRef = useRef(null);
  const user = getUser();
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
      // getMyInfo('dc1a21ba-d3b1-4e1e-85ac-6a2b9d6581a4').then((data) => {
      //   setUserInfo(data.profileImg);
      // });
    }
    setSubnavOpen(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleLogout = async () => {
    console.log('logout');
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
                  {/* {userInfo ? <img src={userInfo} alt="프로필 이미지" /> : <img src="../asset/img/my.png" />} */}
                  <S.HeaderProfile ref={headerProfileRef} onClick={() => setSubnavOpen((prevState) => !prevState)} />
                  {subnavOpen && (
                    <S.MyList ref={subnavRef}>
                      <li>{user && <Link href={{ pathname: `/blog/${user.id}` }}>나의 글</Link>}</li>
                      <li>
                        <Link href="/profile">마이페이지</Link>
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
