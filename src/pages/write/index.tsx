import React, { useState, useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/Button';
import * as S from '@/styles/writeStyled';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@/components/TuiEditor/Editor'), { ssr: false });
const Viewer = dynamic(() => import('@/components/TuiEditor/Viewer'), { ssr: false });
// import WriteModal from '@/components/Write/WriteModal';
const WriteModal = dynamic(() => import('@/components/Write/WriteModal'), { ssr: false });

const WritePage = () => {
  //실시간으로 vw 변화 감지하기 => 710px 미만이면 Editor 값 변경
  // const [viewWidth, setViewWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   console.log(viewWidth);
  //   setViewWidth(window.innerWidth);
  // }, [viewWidth]);

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const modalRef = useRef();
  //title 설정
  const getTitle = (e) => {
    setTitle(e.target.value);
  };
  const getEditorContents = (params: string) => {
    setContents(params);
  };
  const submitClicked = () => {
    //writeModal 올라오기
    setIsSubmitClicked(true);
    modalRef.focus();
  };
  const movePreviousPage = () => {
    //직전 페이지로 이동하기
  };

  return (
    <S.Container>
      {isSubmitClicked ? <WriteModal ref={modalRef} title={title} contents={contents} /> : <></>}
      <S.Wrapper>
        <S.TitleContainer>
          <input type="text" onChange={getTitle} placeholder="제목을 적어주세요" />
        </S.TitleContainer>
        <Editor getEditorContents={getEditorContents} />
        <S.WriteFooter>
          <Button width={10} height={4} border={false} theme={'dark'} onClick={movePreviousPage}>
            나가기
          </Button>
          <Button onClick={submitClicked}>출간하기</Button>
        </S.WriteFooter>
      </S.Wrapper>
      {/* <S.Wrapper>
        <Viewer contents={contents} />
      </S.Wrapper> */}
    </S.Container>
  );
};

export default WritePage;
