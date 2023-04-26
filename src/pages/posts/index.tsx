import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { instance } from '@/utils/axiosInstance';
import Layout from '@/components/Layout';
import { Button } from '@/components/Button';
import * as S from '@/styles/writeStyled';
import * as B from '@/styles/buttonStyled';
import dynamic from 'next/dynamic';
import { EditorProps } from '@/components/TuiEditor/Editor';
import { WriteModalProps } from '@/components/Write/WriteModal';

const Editor = dynamic<EditorProps>(() => import('@/components/TuiEditor/Editor'), { ssr: false });
const WriteModal = dynamic<WriteModalProps>(() => import('@/components/Write/WriteModal'), { ssr: false });

const WritePage = () => {
  const router = useRouter();
  const [vw, setVw] = useState<number>(800);
  const [title, setTitle] = useState<string>('');
  const titleRef = useRef<HTMLInputElement>(null);
  const [contents, setContents] = useState<string>('');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const toastEditorRef = useRef({});
  useEffect(() => {
    const getPost = async (writtenTitle: string) => {
      const response = await instance.get(`/posts/${writtenTitle}`);
      console.log(response);
      setTitle(response.data.title);
      setContents(response.data.contents);
    };
    router.asPath === '/posts' ? null : getPost(router.asPath.slice(7));
  }, []);

  useEffect(() => {
    const getWindowWidth = () => {
      setVw(window.innerWidth);
    };
    window.addEventListener('resize', getWindowWidth);
    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  const postWrite = async (post: object) => {
    const response = await instance.post('/posts', post);
    console.log(response);
  };

  const putEditWrite = async (writtenTitle: string, post: object) => {
    const response = await instance.put(`/posts/${writtenTitle}`, post);
    console.log(response);
  };

  const getEditorContents = (params: string) => {
    console.log('updatedContents:', params);
    setContents(params);
  };
  const clickResetBtn = () => {
    toastEditorRef.current.resetEditor();
  };
  const clickExitBtn = () => {
    router.back();
  };
  const clickBtn = () => {
    setTitle(titleRef.current!.value);
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
            <input type="text" placeholder="제목을 입력하세요" ref={titleRef} />
          </S.TitleContainer>
          <Editor getEditorContents={getEditorContents} viewWidth={vw} contents={contents} ref={toastEditorRef} />
          <S.WriteFooter>
            <B.DarkLightBtn onClick={clickExitBtn}>나가기</B.DarkLightBtn>
            <div className="buttons">
              <B.DarkHighlightBtn onClick={clickResetBtn}>초기화</B.DarkHighlightBtn>
              <B.HighlightDarkBtn onClick={clickBtn}>발행하기</B.HighlightDarkBtn>
            </div>
          </S.WriteFooter>
        </S.Wrapper>
      )}
    </S.Background>
  );
};

export default WritePage;
