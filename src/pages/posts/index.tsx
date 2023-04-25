import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Router, useRouter } from 'next/router';
import { instance } from '@/utils/axiosInstance';
import Layout from '@/components/Layout';
import { Button } from '@/components/Button';
import * as S from '@/styles/writeStyled';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@/components/TuiEditor/Editor'), { ssr: false });
const WriteModal = dynamic(() => import('@/components/Write/WriteModal'), { ssr: false });

const WritePage = () => {
  const [router, setRouter] = useState(useRouter());
  const [vw, setVw] = useState(800);
  const [title, setTitle] = useState('');
  const titleRef = useRef('');
  // const [titleInput, setTitleInput] = useState(titleRef.current.value);
  const [contents, setContents] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    router.asPath === '/posts'
      ? null
      : async () => {
          const oldPost = await getPost(router.asPath.slice(7));
          console.log(oldPost);
          setTitle(oldPost.title);
          setContents(oldPost.contents);
          // setTitleInput(oldPost.title);
        };
  }, []);
  useEffect(() => {
    window.addEventListener('resize', getWindowWidth);
    // return window.removeEventListener('resize', getWindowWidth);
  }, [vw]);

  //글 등록 API - POST
  const postWrite = async (post: object) => {
    const response = await instance.post('/posts', post);
    console.log(response);
  };
  //글 불러오기 API - GET
  // const writtenTitle = router.asPath.slice(7);
  const getPost = async (writtenTitle: string) => {
    const response = await instance.get(`/posts/${writtenTitle}`);
    console.log(response);
    return response;
  };

  //글 수정 API - PUT
  const putEditWrite = async (writtenTitle: string, post: object) => {
    const response = await instance.put(`/posts/${writtenTitle}`, post);
    console.log(response);
  };

  //창 너비 값 구하기
  const getWindowWidth = () => {
    setVw(window.innerWidth);
  };

  // Editor 에서 contents 갖고 오기 (상태 끌어올리기)
  const getEditorContents = (params: string) => {
    console.log('updatedContents:', params);
    setContents(params);
  };
  const clickExitBtn = () => {
    //직전 페이지로 이동하기
    router.back();
  };

  // 확인 모달 버튼(WriteModal)
  const clickBtn = () => {
    setTitle(titleRef.current.value);
    setContents(contents);
    setIsClicked(true);
  };

  return (
    <S.Background>
      {isClicked && (
        <WriteModal title={title} contents={contents} setIsClicked={setIsClicked} putEditWrite={putEditWrite} />
      )}
      {!isClicked && (
        <S.Wrapper>
          <S.TitleContainer>
            <input type="text" placeholder="제목을 적어주세요" ref={titleRef} />
          </S.TitleContainer>
          <Editor getEditorContents={getEditorContents} viewWidth={vw} contents={contents} />
          <S.WriteFooter>
            <Button onClick={clickExitBtn}>나가기</Button>
            <Button onClick={clickBtn}>출간하기</Button>
          </S.WriteFooter>
        </S.Wrapper>
      )}
    </S.Background>
  );
};

export default WritePage;
